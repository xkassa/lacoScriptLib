import { uafGet, getFullList, post, TokenService } from "../common/helpers.js";
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
    try {
      places.push(...(await getFullList(chargeParkOperatorUrl[ENV], "parkingPlace/list", {}, token)).itemList);
    } catch (e) {
      console.log();
    }
    let uniqueNameList = [];
    function getUniqueName(name, iteration = 0) {
      if (uniqueNameList.includes(name)) {
        return getUniqueName(iteration === 0 ? name + " " + iteration : name.slice(0, -1) + iteration, iteration + 1);
      } else {
        uniqueNameList.push(name);
        return name;
      }
    }
    for (let parkingPlace of places) {
      if (!parkingPlace) continue;
      let res;
      try {
        if (typeof parkingPlace?.basicInformation?.payment?.paymentTypes === "string") {
          parkingPlace.basicInformation.payment.paymentTypes = [parkingPlace.basicInformation.payment.paymentTypes];
        }
        parkingPlace.basicInformation.name = getUniqueName(parkingPlace.basicInformation.name);
        delete parkingPlace.spaces;

        parkingPlace.basicInformation.accessControlled ??= false;
        parkingPlace.basicInformation.availableFloorsNum ??= 1;
        if (parkingPlace.integration?.urlLink) {
          parkingPlace.integration.urlLink.address ??= "https://google.com";
          parkingPlace.integration.urlLink.description = { cs: "desc", en: "desc" };
        }
        res = await post(chargeParkOperatorUrl[ENV], "parkingPlace/update", parkingPlace, token);
      } catch (e) {
        console.log(e.code);
      }
      console.log(`updated place ${parkingPlace.basicInformation.name}`);
    }
    console.log();
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();
