import { uafGet, getFullList, post, TokenService } from "../common/helpers.js";
import { chargeParkOperatorUrl } from "../common/urls.js";

const ENV = "swfDev";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    //  const token = await tokenService.getToken();
    console.log();
    let places;
    try {
      places = await getFullList(chargeParkOperatorUrl[ENV], "parkingPlace/list", {}, token);
    } catch (e) {
      console.log();
    }
    for (let index in places.itemList) {
      let parkingPlace = places.itemList[index];
      if (!parkingPlace) continue;
      if (parkingPlace.state === "deleted") continue;
      let res;
      if (index % 2) {
        try {
          const dtoIn = {
            parkingPlaceName: parkingPlace.basicInformation.name,
            vacantSpaces: Math.floor(Math.random() * 15 + 10),
          };
          res = await post(chargeParkOperatorUrl[ENV], "occupancy/updateStatus", dtoIn, token);
        } catch (e) {
          console.log();
        }
      }
      console.log(`updated occupancy of place ${parkingPlace.basicInformation.name + res?.id}`);
    }
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();
