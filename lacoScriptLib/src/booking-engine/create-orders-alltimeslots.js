import { get, post, getFullList, TokenService } from "../common/helpers.js";
import { bookingEngineUrl, uuBtUrl } from "../common/urls.js";

const ENV = "localhost";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  let offerTimeslots;
  try {
    const token = await tokenService.getToken();
    offerTimeslots = await post(bookingEngineUrl[ENV], "offer/timeslot/list", {}, token);
  } catch (e) {
    console.error(e);
  }
  const dtoIn = {
    clientType: "person",
    clientContact: {
      name: "Luca",
      surname: "Giustiniano",
      email: "xxxxxx@yyyyyy.com",
      phoneNumber: "+420123456789",
      address: {
        streetAndNumber: "XXXXX YYYYY 1111",
        city: "XXXXXYYYYY",
        zipCode: "111 11",
        countryCode: "XXX",
      },
    },
  };
  try {
    const token = await tokenService.getToken();
    for (let timeslot of offerTimeslots.itemList) {
      await post(bookingEngineUrl[ENV], "offer/timeslot/update", { id: timeslot.id, price: 0 }, token);
    }
    for (let timeslot of offerTimeslots.itemList) {
      await post(bookingEngineUrl[ENV], "order/create", { ...dtoIn, timeslotList: [{ offerTimeslotId: timeslot.id }] }, token);
    }
  } catch (e) {
    console.error(e);
  }
  console.log("all timeslots in DB removed");
}
main();
