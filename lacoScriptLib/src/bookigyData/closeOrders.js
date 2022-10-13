import { get, post, grantToken } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import Common from "./common.js";

const ENV = "productionEBC";
const DEVELOPMENT = false;
async function main() {
  const token = await grantToken(DEVELOPMENT);
  let response;
  try {
    response = await get(bookingEngineUrl[ENV], "order/list", { datetimeFrom: "2022-07-13T00:00:00Z", createdBy: "11-9524-1" }, token);
  } catch (e) {
    console.error(e);
  }

  try {
    for (let order of response.itemList) {
      response = await post(bookingEngineUrl[ENV], "order/cancelByExecutive", { id: order.id }, token);
    }
  } catch (e) {
    console.error(e);
  }
  console.log("Script finished successfully");
}

main();
