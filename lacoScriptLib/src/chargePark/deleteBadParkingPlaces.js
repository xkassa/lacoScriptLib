import { getFullList, post, TokenService } from "../common/helpers.js";
import { chargeParkOperatorUrl } from "../common/urls.js";

const ENV = "swfDev";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    console.log();
    let places = [];

    places.push(...(await getFullList(chargeParkOperatorUrl[ENV], "parkingPlace/list", {}, token)).itemList);

    for (let index in places) {
      let parkingPlace = places[index];
      if (!parkingPlace) continue;
      if (typeof parkingPlace.basicInformation.name === "object") continue;

      let res;
      try {
        res = await post(chargeParkOperatorUrl[ENV], "parkingPlace/setState", { id: parkingPlace.id, state: "deleted" }, token);
      } catch (e) {
        console.log(e.code);
      }
      console.log(`deleted place ${parkingPlace.basicInformation.name ?? parkingPlace.basicInformation.name.en}`);
    }
    console.log();
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();
