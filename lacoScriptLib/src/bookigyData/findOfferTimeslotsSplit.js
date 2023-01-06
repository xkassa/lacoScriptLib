import { get, getFullList, post, TokenService } from "../common/helpers.js";
import { bookingEngineUrl } from "../common/urls.js";
const ENV = "productionEBC";
const DEVELOPMENT = false;

async function main() {
  const tokenService = new TokenService(DEVELOPMENT);

  let failTimeslotList = [];
  try {
    let token = await tokenService.getToken();
    let productList = await get(bookingEngineUrl[ENV], "product/list", { pageInfo: { pageIndex: 0, pageSize: 3000 } }, token);
    productList = productList.itemList.map((product) => product.id);
    productLoop: for (let i = 0; i < productList.length; i++) {
      console.log("product number: " + i);
      try {
        token = await tokenService.getToken();

        let offerTimeslotList = (
          await getFullList(
            bookingEngineUrl[ENV],
            "offer/timeslot/list",
            {
              datetimeFrom: "2022-11-01T00:00:00.000Z",
              productList: [productList[i]],
              state: "available",
            },
            token,
            1000,
            "post"
          )
        ).itemList
          .sort((a, b) => (a.datetimeFrom > b.datetimeFrom ? 1 : -1))
          .map(({ id, datetimeFrom, datetimeTo }) => ({
            id,
            datetimeFrom,
            datetimeTo,
          }));

        for (let index in offerTimeslotList) {
          if (offerTimeslotList[parseInt(index)].datetimeTo === offerTimeslotList[parseInt(index) + 1]?.datetimeFrom) {
            const failTimeslot = offerTimeslotList[parseInt(index)];
            failTimeslotList.push(failTimeslot);
            console.log(`notConsistentTimeslot number ${failTimeslotList.length} found`);

            /* let tmpDatetimeTo = new Date(failTimeslot.datetimeTo);
            tmpDatetimeTo.setMinutes(tmpDatetimeTo.getMinutes() - 5);
            await axios.post(
              updateOfferTimeslot,
              {
                id: failTimeslot.id,
                datetimeTo: tmpDatetimeTo.toISOString(),
              },
              { headers }
            );

            await axios.post(
              updateOfferTimeslot,
              {
                id: failTimeslot.id,
                datetimeTo: failTimeslot.datetimeTo,
              },
              { headers }
            );*/
            i = i - 1;
            continue productLoop;
          }
        }
      } catch (e) {
        console.log("error");
      }
    }
  } catch (e) {
    console.error(e);
  }
  failTimeslotList = failTimeslotList.map((item) => ({
    id: item.id,
    datetimeFrom: item.datetimeFrom,
    datetimeTo: item.datetimeTo,
  }));
  failTimeslotList = [...new Set(failTimeslotList)];
  console.log(`number of fail timeslots : ${failTimeslotList.length}`);
  console.log("script finished successfully");
}

main();
