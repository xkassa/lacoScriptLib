import { get, post, getFullList, TokenService } from "../common/helpers.js";
import { myTerritoryUrl } from "../common/urls.js";

const uuBtUrl = "https://uuapp.plus4u.net/uu-businessterritory-maing01/b28f6ee4381d465dac036a8298a3c629";
const DEVELOPMENT = false;
const MATCH_STRINGS = ["Team", "F3", "uuBill", "SWF.F4"];
//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    const res = await get(myTerritoryUrl, "uuDwRecord/listActiveRecords", { dateFrom: "2022-09-19T22:00:00.000Z", dateTo: "2023-04-29T22:00:00.000Z", pageInfo: { pageSize: 4000 } }, token);
    let filteredRes = res.uuDwRecordList.filter((item) => MATCH_STRINGS.some((matchString) => item.name.match(matchString)));
    console.log(filteredRes.length + " are total activiteis to reject");
    let i = 1;
    for (let activity of filteredRes) {
      const token = await tokenService.getToken();
      await post(
        uuBtUrl,
        "uuArtifactIfc/activity/elementary/setState",
        { elementaryActivity: activity.tileProps.elementaryActivity, elementaryActivityState: "rejected", id: activity.sourceArtifact },
        token
      );
      console.log(`${i} activity rejected name: ${activity.name}`);
      i++;
    }
  } catch (e) {
    console.log();
  }
}
main();
