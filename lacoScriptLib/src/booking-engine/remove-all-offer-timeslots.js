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

  try {
    const token = await tokenService.getToken();
    await post(bookingEngineUrl[ENV], "offer/timeslot/remove", { idList: offerTimeslots.itemList.map((item) => item.id) }, token);
  } catch (e) {
    console.error(e);
  }
  console.log("all timeslots in DB removed");
}
main();
