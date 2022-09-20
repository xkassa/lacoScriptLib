import { get, uafGet, getFullList, TokenService } from "../common/helpers.js";
import { bookigyUrl, uuBtUrl } from "../common/urls.js";

const ENV = "productionEBC";
const DEVELOPMENT = false;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);
  const token = await tokenService.getToken();
  const res = await get(uuBtUrl[ENV], "uuGroupIfc/listAccessRoleCasts?id=60bf36972e800400541ace9b&pageInfo.pageSize=1000&pageInfo.pageIndex=1", {}, token);
  const res2 = await getFullList(uuBtUrl[ENV], "uuGroupIfc/listAccessRoleCasts", { code: "unit-bookigyebc1-groups-allWithSubordinates" }, token, 1000, "uafGet");
  console.log();
}
main();
