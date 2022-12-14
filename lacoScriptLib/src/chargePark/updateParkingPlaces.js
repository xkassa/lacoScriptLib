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

      let res;
      try {
        res = await post(
          chargeParkOperatorUrl[ENV],
          "parkingPlace/update",
          {
            ...parkingPlace,
            location: { ...parkingPlace.location, pointCoordinates: { latitude: parkingPlace.location.pointCoordinates.longitude, longitude: parkingPlace.location.pointCoordinates.latitude } },
          },
          token
        );
      } catch (e) {
        console.log(e.code);
      }
      console.log(`updated place ${parkingPlace.basicInformation.name.en}`);
    }
    console.log();
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();
