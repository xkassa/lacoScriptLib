import { post, TokenService, oneWord, lorem } from "../common/helpers.js";
import { chargeParkOperatorUrl } from "../common/urls.js";

const ENV = "swfDev";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  const tariffList = [];
  try {
    //  const token = await tokenService.getToken();
    console.log();
    for (let i = 0; i < 30; i++) {
      const tariffName = oneWord();
      const tariffDescription = lorem({ count: Math.floor(Math.random() * 4 + 1) });
      tariffList.push({
        name: { en: "tariff " + tariffName, cs: "tarifa " + tariffName },
        description: { en: tariffDescription, cs: tariffDescription },
      });
    }

    for (let tariff of tariffList) {
      const token = await tokenService.getToken();
      await post(chargeParkOperatorUrl[ENV], "tariff/create", { ...baseDtoIn, ...tariff }, token);
      console.log("tariff  " + tariff.name.en + "  successfuly created")
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
