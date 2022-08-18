import axios from "axios";

const token = "eyJraWQiOiIwNWVhNWI2ODUwMmY0NTgyODFhMDRlZGU1YjRhMDBiZTE5M2I3YTdkNzA0OTQ1ZmJiODkwZDBlNjc5YTczMjEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiVUpwd2tXM3J4OFZrSmFjdlJYNUxLSHFuaE40TDQ4UTdGTWNRWF9Wa19QUSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJ2dmEya2o2cXJsOCIsImNsaWVudF91dWlkZW50aXR5IjoiMzE5Ni0zMjg3LTE3OTAtMSIsImFjciI6InN0YW5kYXJkIiwiYXVkIjpbImE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwiaHR0cHM6XC9cLyIsImh0dHA6XC9cL2xvY2FsaG9zdCJdLCJjbGllbnRfdXVpZGVudGl0eV9uYW1lIjoiQVdJRCBhOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsIm5iZiI6MTY1MTI0MzkwMSwidXVpZGVudGl0eV90eXBlIjoidXVQZXJzb24iLCJhdXRoX3RpbWUiOjE2NTEyMjQ0NDgsIm5hbWUiOiJMYWRpc2xhdiBLYcWhxaFhIiwiZXhwIjoxNjUxMjQ1NzAxLCJpYXQiOjE2NTEyNDM5MDEsImp0aSI6Ijc5MTgwNmQxNDJmNTRmOWNiZmIzMTkxNTk2MmVjY2I4In0.LGklo94NWWWdmbr_loNWj8p7DhdLa8yDn5hGm1l4Cj-PMrnAzytxkoaHrl46kHIs64bSuxvhnq0wWksNLAhZk54YuM4DGJe1QnXjxVCUBIlt0trIlrBSvVF_kmtM0wWbvGFBzRVBt9K1TbmHcEdbX3rWLY0asINZNXHEZNBIWChsQFXPf_lE7O5qJfERR9RS2fhocCo7mTD4dxm-2gotm8spN3SatOHT7kQtWZA1ukjt3fl21Hq8UAZQQeL8FDHhgMToCozbh9GmIKqvxViZHr7pQDGa-ST5Yx7UBRx2fyCvM2dkhUjTvUIbvx6UKI0ApHk77YFQED6gMjzKoaJ3bQ";

function getBaseUrl({ host, contextPath, awid }) {
  return host + "/" + contextPath + "/" + awid;
}

function setUseCase(baserUrl, useCase) {
  return baserUrl + "/" + useCase;
}

const headers = { Authorization: `Bearer ${token}` };

const config = (dtoIn) => ({
  headers,
  params: dtoIn
});

function create40Timeslots(preInitialDate) {
  const today = new Date(preInitialDate);
  const tomorrow = new Date(today.getTime() + 86400000);
  let tomorrowMorning = new Date(tomorrow.setUTCHours(0, 0, 0));
  let tomorrowNight = new Date(tomorrow.setUTCHours(24, 0, 0));
  let timeslotList = [];
  for (let i = 0; i < 40; i++) {
    timeslotList.push({
      datetimeFrom: tomorrowMorning,
      datetimeTo: tomorrowNight,
      price: 0
    });
    if(i===39)console.log(tomorrowMorning.toISOString())
    tomorrowMorning = new Date(tomorrowMorning.getTime() + 86400000);
    tomorrowNight = new Date(tomorrowNight.getTime() + 86400000);

  }

  return timeslotList;
}

async function main() {
  const offer = "626bf9b752df90002723251f";
  let timeslotList = create40Timeslots("2022-04-29T08:00:00Z");
  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "72a7e1987f6f4414a2a7041f3954a744"
  };

  const productList = setUseCase(getBaseUrl(bookingEngineUrl), "product/list");

  let { data: { itemList } } = (await axios.get(
    productList,
    config({ pageInfo: { pageSize: 400 } })
  ));

  const productIds =  itemList.map((item) => item.id)
  const bodyList = productIds.map(product => ({
    offer,
    timeslotList: timeslotList.map(timeslot => ({ ...timeslot, product }))
  }));

  const createTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/addTimeSlots");
  try {
    let i = 0;
    console.log(timeslotList)
    for (let body of bodyList) {
      i++;
      try{

      await axios.post(
        createTimeslots,
        body,
        { headers }
      );
      }catch(e){
        console.error(e);
      }
      console.log(`${i} timeslots added`);
    }

  } catch (e) {
    console.error(e);
  }
  console.log("Script finished successfully");

}

main();
