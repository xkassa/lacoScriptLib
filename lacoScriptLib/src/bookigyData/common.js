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
      price: 0,
    });
    if (i === 39) console.log(tomorrowMorning.toISOString());
    tomorrowMorning = new Date(tomorrowMorning.getTime() + 86400000);
    tomorrowNight = new Date(tomorrowNight.getTime() + 86400000);
  }
  return timeslotList;
}

function createTimeslots(preInitialDate, numberOfTimeslots = 1, utcHourFrom = 0, utcHourTo = 24, minFrom = 0, minTo = 0) {
  const today = new Date(preInitialDate);
  const tomorrow = new Date(today.getTime() + 86400000);
  let tomorrowMorning = new Date(tomorrow.setUTCHours(utcHourFrom, minFrom, 0));
  let tomorrowNight = new Date(tomorrow.setUTCHours(utcHourTo, minTo, 0));
  let timeslotList = [];
  for (let i = 0; i < numberOfTimeslots; i++) {
    timeslotList.push({
      datetimeFrom: tomorrowMorning.toISOString(),
      datetimeTo: tomorrowNight.toISOString(),
      price: 0,
    });
    if (i === 39) console.log(tomorrowMorning.toISOString());
    tomorrowMorning = new Date(tomorrowMorning.getTime() + 86400000);
    tomorrowNight = new Date(tomorrowNight.getTime() + 86400000);
  }
  return timeslotList;
}

function getAddTimeslotsBodyList(timeslotList, productList, uuBookingEngineOffer) {
  let bodyList = [
    {
      offer: uuBookingEngineOffer,
      timeslotList: [],
    },
  ];
  for (let product of productList) {
    for (let timeslot of timeslotList) {
      if (bodyList.at(-1).timeslotList.length >= 40) {
        bodyList.push({
          offer: uuBookingEngineOffer,
          timeslotList: [],
        });
      }
      bodyList.at(-1).timeslotList.push({ ...timeslot, product });
    }
  }

  return bodyList;
}

export { createTimeslots, create40Timeslots, getAddTimeslotsBodyList };
export default { createTimeslots, create40Timeslots, getAddTimeslotsBodyList };
