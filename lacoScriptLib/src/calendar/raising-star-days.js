import { post, TokenService } from "../common/helpers.js";
import { uuSpecialistUrl } from "../common/urls.js";

const DEVELOPMENT = false;

async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);
  let token;
  let timesheetItemList = [];
  const yearMonthList = ["202301", "202302", "202303"];
  try {
    token = await tokenService.getToken();
    for (let yearMonth of yearMonthList) {
      const response = await post(uuSpecialistUrl, "listWorkerTimesheetItemsByMonth", { yearMonth }, token);
      timesheetItemList.push(...response.timesheetItemList.filter((item) => item.category === "STAR"));
    }
    let totalHours = 0;
    timesheetItemList.forEach((item) => {
      const from = new Date(item.datetimeFrom);
      const to = new Date(item.datetimeTo);
      const duration = (to.getTime() - from.getTime()) / (1000 * 60 * 60);
      totalHours += duration;
    });
    console.log("Total hours spent in Raising star is " + totalHours);
  } catch (e) {
    console.error(e);
  }
}
main();
