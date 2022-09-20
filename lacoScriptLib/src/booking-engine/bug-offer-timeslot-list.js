import { get, post, getFullList, TokenService } from "../common/helpers.js";
import { bookingEngineUrl, uuBtUrl } from "../common/urls.js";

const ENV = "productionEBC";
const DEVELOPMENT = false;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  let offerTimeslots;
  try {
    const token = await tokenService.getToken();
    offerTimeslots = await post(
      bookingEngineUrl[ENV],
      "offer/timeslot/list",
      {
        productFeatures: [{ capacity: "15", comparisonType: "gte" }, { workplaceType: "meetingRoom" }],
      },
      token
    );
  } catch (e) {
    console.error(e);
  }



  let productList = offerTimeslots.itemList.map((item) => item.product);
  const uniqueProductList = [...new Set(productList)];
  let productListFromBE;
  try {
    const token = await tokenService.getToken();
    productListFromBE = await post(bookingEngineUrl[ENV], "product/list", { ids: uniqueProductList }, token);
  } catch (e) {
    console.error(e);
  }
  console.log();
}
main();
