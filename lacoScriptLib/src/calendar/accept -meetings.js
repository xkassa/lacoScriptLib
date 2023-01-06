import { get, post, TokenService } from "../common/helpers.js";
import { myTerritoryUrl } from "../common/urls.js";

const uuBtUrl = "https://uuapp.plus4u.net/uu-businessterritory-maing01/b28f6ee4381d465dac036a8298a3c629";
const DEVELOPMENT = false;
const MATCH_STRINGS = ["HRADUBICE"];
const DATE_FROM= "2022-12-20T00:00:00.000Z"
const DATE_TO= "2023-11-08T22:00:00.000Z"
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    const res = await get(myTerritoryUrl, "uuDwRecord/listActiveRecords", { dateFrom: DATE_FROM, dateTo:DATE_TO, pageInfo: { pageSize: 4000 } }, token);
    let filteredRes = res.uuDwRecordList.filter((item) => MATCH_STRINGS.some((matchString) => item.name.match(matchString)));
    filteredRes = filteredRes.filter((item) => !item.rejected);
    console.log(filteredRes.length + " are total activities to accept");
    let i = 1;
    for (let activity of filteredRes) {
      const token = await tokenService.getToken();
      try {
        await post(
          uuBtUrl,
          "uuArtifactIfc/activity/elementary/setState",
          { elementaryActivity: activity.tileProps.elementaryActivity, elementaryActivityState: "accepted", id: activity.sourceArtifact },
          token
        );
        console.log(`${i} activity accepted name: ${activity.name}`);
        i++;
      } catch (e) {

          console.log(`activity failed to accept : ${activity.name}`);
      }
    }
  } catch (e) {
    console.log();
  }
}
main();
