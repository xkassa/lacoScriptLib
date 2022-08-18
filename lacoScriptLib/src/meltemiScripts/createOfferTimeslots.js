import axios from "axios";

const token = "";

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
      datetimeFrom: tomorrowMorning.toISOString(),
      datetimeTo: tomorrowNight.toISOString(),
      price: 0
    });
    if(i===39)console.log(tomorrowMorning.toISOString())
    tomorrowMorning = new Date(tomorrowMorning.getTime() + 86400000);
    tomorrowNight = new Date(tomorrowNight.getTime() + 86400000);

  }

  return timeslotList;
}

async function main() {
  const offer = "62023009e374e1002702aae0";
  let timeslotList = create40Timeslots("2022-10-21T08:00:00Z");
  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "fbb5deca28474226a0b86db88a8a84df"
  };
  const listProducts = setUseCase(getBaseUrl(bookingEngineUrl), "product/list");
  const productList = (await axios.get(listProducts, config({ pageInfo: { pageSize: 2000 } }))).data.itemList;
  const bodyList = productList.map(product => ({
    offer,
    timeslotList: timeslotList.map(timeslot => ({ ...timeslot, product:product.id }))
  }));

  const createTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/addTimeSlots");
  try {
    let i = 0;
    console.log(timeslotList)
    for (let body of bodyList) {
      i++;
      await axios.post(
        createTimeslots,
        body,
        { headers }
      );
      console.log(`${i} timeslots added`);
    }

  } catch (e) {
    console.error(e);
  }
  console.log("Script finshed successfully");

}

main();
