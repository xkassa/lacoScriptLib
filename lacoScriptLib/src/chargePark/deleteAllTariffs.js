import { getFullList, post, TokenService, oneWord, lorem } from "../common/helpers.js";
import { chargeParkOperatorUrl } from "../common/urls.js";

const ENV = "swfDev";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    const { itemList: tariffList } = await getFullList(chargeParkOperatorUrl[ENV], "tariff/list", {}, token);
    for (let tariff of tariffList) {
      const token = await tokenService.getToken();
      try {
        await post(chargeParkOperatorUrl[ENV], "tariff/setState", { id: tariff.id, state: "deleted" }, token);
        console.log("tariff  " + tariff.name.en + "  successfuly deleted");
      } catch (e) {
        console.log("tariff " + tariff.name.en + " couldnt be deleted");
      }
    }
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();

const baseDtoIn = {
  groups: [
    {
      free: 1,
      hourlyFee: 2.4,
      dailyFee: 10,
      maxDailyFee: 10,
      dayPartList: [
        {
          from: 9,
          to: 12,
          hourlyFee: 3.7,
          firstHour: 2,
          free: 1,
        },
      ],
      lengthOfStayList: [
        {
          from: 0,
          to: 24,
          hourlyFee: 2.0,
          fixedPrice: 2.0,
        },
      ],
      dayType: ["WORKDAY", "SATURDAY"],
      features: ["DISABLED_PERSON", ">3500"],
    },
  ],
  currency: "EUR",
};
