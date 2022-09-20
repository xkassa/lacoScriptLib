import { get, post, grantToken } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import Common from "./common.js";

const ENV = "productionAis";
const DEVELOPMENT = false;

async function main() {
  const token = await grantToken(DEVELOPMENT);
  const numberOfTimeslotsInAdvance = 1;
  let timeslotList = Common.createTimeslots("2022-09-15T08:00:00Z", numberOfTimeslotsInAdvance, 10, 21);
  let uuBookingEngineOffer, productList;
  try {
    uuBookingEngineOffer = (await get(bookigyUrl[ENV], "main/get", {}, token)).uuBookingEngineOffer;
    productList = (await get(bookingEngineUrl[ENV], "product/list", { pageInfo: { pageSize: 3000 } }, token)).itemList;
  } catch (e) {
    console.error(e);
  }

  let bodyList = productList.map((product) => ({
    offer: uuBookingEngineOffer,
    timeslotList: timeslotList.map((timeslot) => ({ ...timeslot, product: product.id })),
  }));
  try {
    let i = 0;
    console.log(`${productList.length * numberOfTimeslotsInAdvance} are total timeslots to add, in total of ${productList.length} products`);
    for (let body of bodyList) {
      i++;
      try {
        await post(bookingEngineUrl[ENV], "offer/timeslot/addTimeSlots", body, token);
        console.log(`${i * numberOfTimeslotsInAdvance} timeslots already generated`);
      } catch (e) {
        console.error(e?.response?.statusText);
      }
    }
  } catch (e) {
    console.error(e);
  }
  console.log("Script finished successfully");
}

main();
