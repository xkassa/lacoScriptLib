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
  /* try {
    const response = await get(bookingEngineUrl[ENV], "order/list", { pageInfo: { pageSize: 25000 }, datetimeFrom: "2022-07-01T00:00:00.000Z", loadTimeslots: true }, token);
    uuBookingEngineOrders = response.itemList;
    orderTimeslots = response.orderTimeslots;
  } catch (e) {
    console.error(e);
  }*/

  const bodyList = failedList.failedCalls.map((item) => item.dtoIn);
  /* uuBookingEngineOrders.forEach((order) => {
    const orderTimeslot = orderTimeslots.find((timeslot) => timeslot.order === order.id);
    orderTimeslot &&
      bodyList.push({
        order: { id: order.id, createdBy: order.createdBy, ownedBy: order.ownedBy },
        orderTimeslots: [{ product: orderTimeslot.product, datetimeFrom: orderTimeslot.datetimeFrom, datetimeTo: orderTimeslot.datetimeTo }],
      });
  });*/

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
  await fs.writeFile(`./data/successUpdated${ENV}run3.json`, successData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("success JSON data saved");
  });

  const failData = JSON.stringify({ failedCalls });
  await fs.writeFile(`./data/failedToUpdate${ENV}run3.json`, failData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log("fail JSON data saved");
  });

  console.log("Script finished successfully");
}
main();

const failedList = {
  failedCalls: [
    {
      dtoIn: {
        order: { id: "62b08adc0ddb050028e0aca3", createdBy: "8534-2917-1", ownedBy: "8534-2917-1" },
        orderTimeslots: [{ product: "60f926e92615810027e48f21", datetimeFrom: "2022-07-05T08:00:00.000Z", datetimeTo: "2022-07-05T09:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629f3d8b83215a0028a58800", createdBy: "23-7037-1", ownedBy: "23-7037-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-10-19T12:00:00.000Z", datetimeTo: "2022-10-19T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629f3d8a83215a0028a587f6", createdBy: "23-7037-1", ownedBy: "23-7037-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-10-05T12:00:00.000Z", datetimeTo: "2022-10-05T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629f3d8983215a0028a587ee", createdBy: "23-7037-1", ownedBy: "23-7037-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-09-21T12:00:00.000Z", datetimeTo: "2022-09-21T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629f3d8883215a0028a587e4", createdBy: "23-7037-1", ownedBy: "23-7037-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-09-07T12:00:00.000Z", datetimeTo: "2022-09-07T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629f3d8783215a0028a587dc", createdBy: "23-7037-1", ownedBy: "23-7037-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-24T12:00:00.000Z", datetimeTo: "2022-08-24T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629f3d6b83215a0028a586c7", createdBy: "23-7037-1", ownedBy: "23-7037-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-10T12:00:00.000Z", datetimeTo: "2022-08-10T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038e83215a00289e9f14", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-30T12:00:00.000Z", datetimeTo: "2022-08-30T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038d83215a00289e9f0c", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-23T12:00:00.000Z", datetimeTo: "2022-08-23T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038c83215a00289e9ef4", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-16T12:00:00.000Z", datetimeTo: "2022-08-16T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038b83215a00289e9ece", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-09T12:00:00.000Z", datetimeTo: "2022-08-09T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038a83215a00289e9ea8", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-02T12:00:00.000Z", datetimeTo: "2022-08-02T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038a83215a00289e9e8a", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-26T12:00:00.000Z", datetimeTo: "2022-07-26T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038983215a00289e9e7c", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-19T12:00:00.000Z", datetimeTo: "2022-07-19T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038883215a00289e9e74", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-12T12:00:00.000Z", datetimeTo: "2022-07-12T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "629e038883215a00289e9e6c", createdBy: "23-7037-1", ownedBy: "1170-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-05T12:00:00.000Z", datetimeTo: "2022-07-05T13:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "6299fb8d83215a002887fa04", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-08-30T11:00:00.000Z", datetimeTo: "2022-08-30T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "6299fb6283215a002887f887", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-08-16T11:00:00.000Z", datetimeTo: "2022-08-16T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "6299fb3283215a002887f72b", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-08-02T11:00:00.000Z", datetimeTo: "2022-08-02T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "628cb0616142380028c513b2", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-07-26T11:00:00.000Z", datetimeTo: "2022-07-26T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "628cb0606142380028c5139c", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-07-19T11:00:00.000Z", datetimeTo: "2022-07-19T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "628cb05f6142380028c51394", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-07-12T11:00:00.000Z", datetimeTo: "2022-07-12T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "628cb05e6142380028c5138c", createdBy: "374-3084-1", ownedBy: "7880-2015-1" },
        orderTimeslots: [{ product: "60f926d02615810027e48ee0", datetimeFrom: "2022-07-05T11:00:00.000Z", datetimeTo: "2022-07-05T12:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "6278b768c6de7800284a1ef8", createdBy: "3963-8899-1", ownedBy: "3963-8899-1" },
        orderTimeslots: [{ product: "60e42e0a79eb210027e31691", datetimeFrom: "2022-07-12T11:30:00.000Z", datetimeTo: "2022-07-12T13:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62752d83c6de78002839c9e8", createdBy: "3963-8899-1", ownedBy: "3963-8899-1" },
        orderTimeslots: [{ product: "60e42e0a79eb210027e31691", datetimeFrom: "2022-07-05T11:30:00.000Z", datetimeTo: "2022-07-05T13:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62617bf752df900027eacf11", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-08T13:00:00.000Z", datetimeTo: "2022-08-08T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62617bf652df900027eacf07", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-01T13:00:00.000Z", datetimeTo: "2022-08-01T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62617bf552df900027eaceff", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-25T13:00:00.000Z", datetimeTo: "2022-07-25T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62617bf452df900027eacef3", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-18T13:00:00.000Z", datetimeTo: "2022-07-18T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62617bf352df900027eaceeb", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-11T13:00:00.000Z", datetimeTo: "2022-07-11T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "62617bf252df900027eacedf", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-04T13:00:00.000Z", datetimeTo: "2022-07-04T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "626179d052df900027eabede", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-11T13:00:00.000Z", datetimeTo: "2022-08-11T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "626179cf52df900027eabec9", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-08-04T13:00:00.000Z", datetimeTo: "2022-08-04T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "626179ce52df900027eabea8", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-28T13:00:00.000Z", datetimeTo: "2022-07-28T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "626179cd52df900027eabe9b", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-21T13:00:00.000Z", datetimeTo: "2022-07-21T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "626179cd52df900027eabe89", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-14T13:00:00.000Z", datetimeTo: "2022-07-14T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "626179cc52df900027eabe81", createdBy: "21-3320-1", ownedBy: "20-374-1" },
        orderTimeslots: [{ product: "60f926df2615810027e48f06", datetimeFrom: "2022-07-07T13:00:00.000Z", datetimeTo: "2022-07-07T14:00:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "61f7cd38bba46d0027367bc0", createdBy: "21-3768-1", ownedBy: "21-3768-1" },
        orderTimeslots: [{ product: "60f95f7d2615810027e49f7d", datetimeFrom: "2022-11-28T14:00:00.000Z", datetimeTo: "2022-11-28T16:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "61f7cd19bba46d0027367b1d", createdBy: "21-3768-1", ownedBy: "21-3768-1" },
        orderTimeslots: [{ product: "60e42e0a79eb210027e31693", datetimeFrom: "2022-11-28T14:00:00.000Z", datetimeTo: "2022-11-28T16:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "61f7cc87bba46d0027367716", createdBy: "21-3768-1", ownedBy: "21-3768-1" },
        orderTimeslots: [{ product: "60e42e0a79eb210027e31693", datetimeFrom: "2022-10-17T13:00:00.000Z", datetimeTo: "2022-10-17T15:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "61f7cc6cbba46d002736766d", createdBy: "21-3768-1", ownedBy: "21-3768-1" },
        orderTimeslots: [{ product: "60f95f7d2615810027e49f7d", datetimeFrom: "2022-10-17T13:00:00.000Z", datetimeTo: "2022-10-17T15:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "61f7cc0fbba46d002736741d", createdBy: "21-3768-1", ownedBy: "21-3768-1" },
        orderTimeslots: [{ product: "60f95f7d2615810027e49f7d", datetimeFrom: "2022-09-19T13:00:00.000Z", datetimeTo: "2022-09-19T15:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
    {
      dtoIn: {
        order: { id: "61f7cbf4bba46d002736733b", createdBy: "21-3768-1", ownedBy: "21-3768-1" },
        orderTimeslots: [{ product: "60e42e0a79eb210027e31693", datetimeFrom: "2022-09-19T13:00:00.000Z", datetimeTo: "2022-09-19T15:30:00.000Z" }],
      },
      error: {
        message: "Request failed with status code 500",
        uuAppErrorMap: { "uu-appg01/server/internalServerError": { type: "error", message: "Cannot read properties of undefined (reading 'price')" } },
      },
    },
  ],
};
