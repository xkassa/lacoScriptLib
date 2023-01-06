import { post, getFullList, TokenService, wait } from "../common/helpers.js";
import { bookingEngineUrl, uuBtUrl } from "../common/urls.js";

const ENV = "termsProduction";
const DEVELOPMENT = false;

async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);
  const newHomeFolderId = "63b4378e206459001beb441a";
  let token = await tokenService.getToken();

  let orderList;
  try {
    ({ itemList: orderList } = await getFullList(bookingEngineUrl[ENV], "order/list", { state: "completed" }, token));
  } catch (e) {
    console.error(e);
  }
  const beforeDate = "2023-01-01T00:00:00.000Z";
  orderList = orderList.filter((order) => order.datetimeTo < beforeDate);
  try {
    let i = 0;
    console.log(`${orderList.length} are total orders to move`);
    for (let order of orderList) {
      i++;
      try {
        let token = await tokenService.getToken();
        await post(uuBtUrl[ENV], "uuArtifactIfc/setHomeFolder", { id: order.artifactId, folder: newHomeFolderId }, token);
        await wait(100);
        console.log(`${i} orders already moved`);
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
