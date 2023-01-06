import { post, getFullList, TokenService, wait } from "../common/helpers.js";
import { bookingEngineUrl } from "../common/urls.js";

const ENV = "termsProduction";
const DEVELOPMENT = false;

async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);
  let token = await tokenService.getToken();

  let cancelledOrders;
  try {
    ({ itemList: cancelledOrders } = await getFullList(bookingEngineUrl[ENV], "order/list", { state: "cancelled" }, token));
  } catch (e) {
    console.error(e);
  }

  try {
    let i = 0;
    console.log(`${cancelledOrders.length} are total orders to delete`);
    for (let order of cancelledOrders) {
      i++;
      try {
        let token = await tokenService.getToken();
        await post(bookingEngineUrl[ENV], "order/delete", { id: order.id }, token);
        await wait(100);
        console.log(`${i} orders already deleted`);
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
