import { get, post, TokenService } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import Common from "./common.js";

const ENV = "productionAis";
const DEVELOPMENT = false;

async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);
  let token = await tokenService.getToken();
  const numberOfTimeslotsInAdvance = 1;
  let timeslotList = Common.createTimeslots("2022-09-15T08:00:00Z", numberOfTimeslotsInAdvance, 10, 21);
  let uuBookingEngineOffer, productList;
  try {
    uuBookingEngineOffer = (await get(bookigyUrl[ENV], "main/get", {}, token)).uuBookingEngineOffer;
    productList = (await get(bookingEngineUrl[ENV], "product/list", { pageInfo: { pageSize: 3000 } }, token)).itemList;
  } catch (e) {
    console.error(e);
  }

  const bodyList = getAddTimeslotsBodyList(timeslotList, productList, uuBookingEngineOffer);

  try {
    let i = 0;
    console.log(`${productList.length * numberOfTimeslotsInAdvance} are total timeslots to add, in total of ${productList.length} products`);
    for (let body of bodyList) {
      i++;
      try {
        token = await tokenService.getToken();
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

function getAddTimeslotsBodyList(timeslotList, productList, uuBookingEngineOffer) {
  let bodyList = [
    {
      offer: uuBookingEngineOffer,
      timeslotList: [],
    },
  ];
  for (let product of productList) {
    for (let timeslot of timeslotList) {
      if (bodyList.at(-1).timeslotList.length >= 40) {
        bodyList.push({
          offer: uuBookingEngineOffer,
          timeslotList: [],
        });
      }
      bodyList.at(-1).timeslotList.push({ ...timeslot, product });
    }
  }

  return bodyList;
}

main();
