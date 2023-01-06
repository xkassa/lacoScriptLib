import { get, post, grantToken } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import fs from "fs";

const ENV = "productionEBC";
const DEVELOPMENT = false;

async function main() {
  const nextUpdateToken = new Date();
  nextUpdateToken.setMinutes(nextUpdateToken.getMinutes() + 5);
  let token = await grantToken(DEVELOPMENT);
  let uuBookingEngineOrders, orderTimeslots;
  try {
    const response = await get(bookingEngineUrl[ENV], "order/list", { pageInfo: { pageSize: 35000 }, datetimeFrom: "2022-10-01T00:00:00.000Z", loadTimeslots: true }, token);
    uuBookingEngineOrders = response.itemList;
    orderTimeslots = response.orderTimeslots;
  } catch (e) {
    console.error(e);
  }

  //update failed orders
  //const bodyList = failedList.failedCalls.map((item) => item.dtoIn);
  const bodyList = [];
  uuBookingEngineOrders = uuBookingEngineOrders.filter((order) => order.data.countedPrice === "0.00");
  uuBookingEngineOrders.forEach((order) => {
    const orderTimeslot = orderTimeslots.find((timeslot) => timeslot.order === order.id);
    orderTimeslot &&
      bodyList.push({
        order: { id: order.id, createdBy: order.createdBy, ownedBy: order.ownedBy },
        orderTimeslots: [{ product: orderTimeslot.product, datetimeFrom: orderTimeslot.datetimeFrom, datetimeTo: orderTimeslot.datetimeTo }],
      });
  });

  const failedCalls = [];
  const successfullyUpdatedOrders = [];
  try {
    let i = 0;
    console.log(`${bodyList.length} are total orders to update`);
    for (let body of bodyList) {
      i++;
      if (new Date() > nextUpdateToken) {
        token = await grantToken(DEVELOPMENT);
        nextUpdateToken.setMinutes(nextUpdateToken.getMinutes() + 5);
      }
      try {
        const response = await post(bookigyUrl[ENV], "statistics/afterBookingUpdate", body, token);
        if (Object.keys(response.uuAppErrorMap).length) {
          console.log(`${i} order updated with warning:`);
          console.log(response.uuAppErrorMap);
        } else {
          console.log(`${i} order updated`);
        }
        successfullyUpdatedOrders.push(body.order.id);
      } catch (error) {
        failedCalls.push({ dtoIn: body, error: { message: error?.message, uuAppErrorMap: error?.response?.data?.uuAppErrorMap } });
        console.error(error?.response?.statusText);
      }
    }
  } catch (e) {
    console.error(e);
  }

  const successData = JSON.stringify({ successfullyUpdatedOrders });
  await fs.writeFile(`./data/successUpdated${ENV}run1.json`, successData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("success JSON data saved");
  });

  const failData = JSON.stringify({ failedCalls });
  await fs.writeFile(`./data/failedToUpdate${ENV}run1.json`, failData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("fail JSON data saved");
  });

  console.log("Script finished successfully");
}
main();
