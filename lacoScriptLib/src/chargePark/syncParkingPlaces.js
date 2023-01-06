import { getFullList, post, TokenService } from "../common/helpers.js";
import { chargeParkAggregatorUrl, chargeParkOperatorUrl } from "../common/urls.js";

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
          chargeParkAggregatorUrl[ENV],
          "parkingPlace/processChange",
          {
            eventBrokerData: {
              uuAppEvent: {
                data: {
                  parkingPlaceId: parkingPlace.id,
                  operatorAwid: chargeParkOperatorUrl[ENV].awid,
                },
              },
            },
          },
          token
        );
        console.log(res);
      } catch (e) {
        console.log(e.code);
      }
      console.log(`${index} synced place ${parkingPlace.basicInformation.name.en}`);
    }
    console.log();
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();
