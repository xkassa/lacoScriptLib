import fs from "fs";

async function main(){
  const today = new Date("2022-07-20T08:00:00Z");
  const tomorrow = new Date(today.getTime() + 86400000);
  let tomorrowMorning = new Date(tomorrow.setHours(1, 0, 0));
  let tomorrowNight = new Date(tomorrow.setHours(25, 0, 0));
  let timeslotList=[];
  for (let i=0; i<40;i++){
    timeslotList.push({
      product:"{{product}}",
      datetimeFrom: tomorrowMorning,
      datetimeTo: tomorrowNight,
      price: 0,
    })
    tomorrowMorning = new Date(tomorrowMorning.getTime() + 86400000);
    tomorrowNight = new Date(tomorrowNight.getTime() + 86400000);
  }
  const data= JSON.stringify({timeslotList});
  await fs.writeFile('fortyAdvancedTimeslots.json', data, (err) =>{
    if (err) {
      throw err;
    }
    console.log("JSON data saved")
  });

  console.log(timeslotList);
  console.log(timeslotList.length);
}
main()
