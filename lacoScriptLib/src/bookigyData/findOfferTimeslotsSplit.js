import axios from "axios";

const token =
  "eyJraWQiOiI2NWRiNGVmNzJiZjU0Y2U2OTczMTZiNWI3NmJkM2MzZDEyODIwYzAxMDYyODQwMjk4MDc0MjlhZmE3ZGJhMDMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoibzVGQS0xM2VjWXhyVDdrV0ZVaGpLcTI3elc4RElHRldybGtRSU1Od1FNdyIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJsMW4wMHZ1bWtxbyIsImNsaWVudF91dWlkZW50aXR5IjoiMzE5Ni0zMjg3LTE3OTAtMSIsImFjciI6InN0YW5kYXJkIiwiYXVkIjpbImE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwiaHR0cHM6XC9cLyIsImh0dHA6XC9cL2xvY2FsaG9zdCJdLCJjbGllbnRfdXVpZGVudGl0eV9uYW1lIjoiQVdJRCBhOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsIm5iZiI6MTY1MjA5NzA1OSwidXVpZGVudGl0eV90eXBlIjoidXVQZXJzb24iLCJhdXRoX3RpbWUiOjE2NTIwOTYxOTksIm5hbWUiOiJMYWRpc2xhdiBLYcWhxaFhIiwiZXhwIjoxNjUyMDk4ODU5LCJpYXQiOjE2NTIwOTcwNTksImp0aSI6IjczZTM5Nzk0YjA1ODRjZDU4NmYwNjE0Zjg0YWQ1ZjM5In0.QNgCi9fNdta6MQDTcLn9CKSV1DRi96nHAoIUWXM258E1nmu6ErgoHxPTOoEHF_emLdkj4ohlyNoiU0XQgp2gs5o1P1UmyY7pTjhR5waxtFkDBEVoc9o7LY08aiixUgYQfKw_BBtBh42YEYrXOT3RFyzDPFEJuQi-TC3DxKbeWiCEIPDQji7pq0UHAG3S-SyvYq7ndSdpiwbMLYz0hmhlnnXMO5aa7mbrytTBGDSR6jkWf_N-z1MGOl99AxPrME1XRvDBhyDpsFRUuJa4tGzrfnIXbVqDkpVdMRHNY1gkd_WO6x7LSU8P7FO8mCAHAwhQB0EXjttkGXmTFiGgY9vHlQ";

function getBaseUrl({ host, contextPath, awid }) {
  return host + "/" + contextPath + "/" + awid;
}

function setUseCase(baserUrl, useCase) {
  return baserUrl + "/" + useCase;
}

const headers = { Authorization: `Bearer ${token}` };

const config = (dtoIn) => ({
  headers,
  params: dtoIn,
});

async function main() {
  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "f9b369d7d31449f8810597a84984c7b8",
  };

  const listTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/list");
  const listProduct = setUseCase(getBaseUrl(bookingEngineUrl), "product/list");
  const updateOfferTimeslot = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/update");
  let failTimeslotList = [];
  try {
    let productList = await axios.get(listProduct, config({ pageInfo: { pageSize: 2000 } }));
    productList = productList.data.itemList.map((product) => product.id);
    productLoop: for (let i = 0; i < productList.length; i++) {
      try {
        let offerTimeslotList = (
          await axios.post(
            listTimeslots,
            {
              datetimeFrom: "2022-05-05T00:00:00.000Z",
              productList: [productList[i]],
              state: "available",
              pageInfo: { pageSize: 10000 },
            },
            { headers }
          )
        ).data.itemList
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

           let tmpDatetimeTo = new Date(failTimeslot.datetimeTo);
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
           );
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
