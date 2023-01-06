import { get, post, TokenService, wait } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import Common from "./common.js";

const ENV = "productionCSP";
const DEVELOPMENT = false;

async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);
  let token = await tokenService.getToken();

  const numberOfTimeslotsInAdvance = 365;
  let timeslotList = Common.createTimeslots("2023-01-05T08:00:00Z", numberOfTimeslotsInAdvance, 2, 22);
  let uuBookingEngineOffer, areaList;
  try {
    uuBookingEngineOffer = (await get(bookigyUrl[ENV], "main/get", {}, token)).uuBookingEngineOffer;
    areaList = (await get(bookigyUrl[ENV], "area/list", { pageInfo: { pageSize: 10000 } }, token)).itemList;
  } catch (e) {
    console.error(e);
  }

  let newAreaIds = newAreaList;
  if (typeof newAreaIds === "string") {
    newAreaIds = newAreaIds.split("\n");
    newAreaIds = newAreaIds.filter((item) => item.length > 10);
  }
  areaList = areaList.filter((item) => newAreaIds.includes(item.id));
  let bookingEngineProducts = areaList.map((item) => item.bookingEngineProduct);
  let bodyList = Common.getAddTimeslotsBodyList(timeslotList, bookingEngineProducts, uuBookingEngineOffer);

  try {
    let i = 0;
    console.log(`${bodyList.reduce((sum, item) => sum + item.timeslotList.length, 0)} are total timeslots to add, in total of ${bookingEngineProducts.length} products`);
    for (let body of bodyList) {
      i += body.timeslotList.length;
      try {
        let token = await tokenService.getToken();
        await post(bookingEngineUrl[ENV], "offer/timeslot/addTimeSlots", body, token);
        await wait(100);
        console.log(`${i} timeslots already generated`);
      } catch (e) {
        console.error(e?.response?.statusText);
      }
    }
  } catch (e) {
    console.error(e);
  }
  console.log("Script finished successfully");
}

main();

const newAreaList = `
63b5c2a4b063860036cc8398
63b5c2a5b063860036cc839c
63b5c2a6b063860036cc839f
63b5c2a677c0cb003613a45d
63b5c2a7fbf7ff0036a66007
63b5c2a877c0cb003613a463
63b5c2a8fbf7ff0036a6600a
63b5c2a8618949003640f4cf
63b5c2a977c0cb003613a467
63b5c2aab063860036cc83a5
63b5c2aa77c0cb003613a46a
63b5c2aafbf7ff0036a6600d
63b5c2abfbf7ff0036a66010
63b5c2ab618949003640f4d4
63b5c2abb063860036cc83a8
63b5c2abfbf7ff0036a66013
63b5c2ac618949003640f4d7
63b5c2acfbf7ff0036a66016
63b5c2ac618949003640f4da
63b5c2acb063860036cc83ac
63b5c2ac77c0cb003613a46d
63b5c2adb063860036cc83af
63b5c2ad618949003640f4dd
63b5c2ad618949003640f4e0
63b5c2adb063860036cc83b2
63b5c2ad77c0cb003613a470
63b5c2aefbf7ff0036a66019
63b5c2aeb063860036cc83b5
63b5c2aeb063860036cc83b8
63b5c2aefbf7ff0036a6601c
63b5c2ae77c0cb003613a476
63b5c2affbf7ff0036a66020
63b5c2af77c0cb003613a47a
63b5c2affbf7ff0036a66024
63b5c2af618949003640f4e5
63b5c2afb063860036cc83bb
63b5c2b077c0cb003613a47f
63b5c2b0618949003640f4e8
63b5c2b0b063860036cc83be
63b5c2b0b063860036cc83c1
63b5c2b1618949003640f4eb
63b5c2b177c0cb003613a483
63b5c61277c0cb003613a820
63b5c612b063860036cc874b
63b5c61277c0cb003613a823
63b5c61277c0cb003613a826
63b5c613fbf7ff0036a663a3
63b5c2b2618949003640f4f3
63b5c2b2b063860036cc83c8
63b5c2b277c0cb003613a48d
63b5c2b3fbf7ff0036a66032
63b5c2b3fbf7ff0036a66035
63b5c2b3618949003640f4f6
63b5c2b3fbf7ff0036a66038
63b5c2b4b063860036cc83cb
63b5c2b4b063860036cc83ce
63b5c2b4b063860036cc83d1
63b5c2b4618949003640f4f9
63b5c2b477c0cb003613a491
63b5c2b577c0cb003613a494
63b5c2b5b063860036cc83d4
63b5c2b5618949003640f4fd
63b5c2b5618949003640f500
63b5c2b5fbf7ff0036a6603e
63b5c2b6b063860036cc83d7
63b5c2b677c0cb003613a497
63b5c2b6fbf7ff0036a66041
63b5c2b6b063860036cc83da
63b5c2b6fbf7ff0036a66044
63b5c2b7b063860036cc83dd
63b5c2b777c0cb003613a49a
63b5c2b7fbf7ff0036a66047
63b5c2b777c0cb003613a49f
63b5c2b8618949003640f508
63b5c2b877c0cb003613a4a2
63b5c2b877c0cb003613a4a5
63b5c2b8fbf7ff0036a6604a
63b5c2b8fbf7ff0036a6604d
63b5c2b9618949003640f50b
63b5c2b9b063860036cc83e2
63b5c2b9b063860036cc83e5
63b5c2b9fbf7ff0036a66050
63b5c2b9618949003640f50e
63b5c2bab063860036cc83ea
63b5c2ba618949003640f513
63b5c2ba77c0cb003613a4a9
63b5c2ba618949003640f517
63b5c2bb618949003640f51a
63b5c2bbfbf7ff0036a66055
63b5c2bbb063860036cc83ed
63b5c2bb77c0cb003613a4ac
63b5c2bbfbf7ff0036a66058
63b5c2bc77c0cb003613a4b0
63b5c2bc618949003640f51e
63b5c2bc77c0cb003613a4b4
63b5d466fbf7ff0036a66edc
63b5d46677c0cb003613b37d
63b5d467fbf7ff0036a66edf
63b5d467b063860036cc9294
63b5d46861894900364103ae
63b5d46afbf7ff0036a66ee4
63b5d46afbf7ff0036a66ee7
63b5d46a61894900364103b6
63b5d46b61894900364103b9
63b5d46b61894900364103bd
63b5d46b77c0cb003613b388
63b5d46b61894900364103c0
`;
