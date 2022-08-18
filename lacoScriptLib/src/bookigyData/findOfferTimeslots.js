import { get, post, grantToken } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import Common from "./common.js";


async function main() {
  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "435952cf8c274529800fa14c9e8051a8"
  };

  const plus4uPeopleUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-plus4upeople-maing01",
    awid: "56ac93ddb0034de8b8e4f4b829ff7d0f"
  };
  let response;
  let itemList = [];
  const createTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/list");
  try {
    const bodyMap = [];
    for (let iteration = 0; iteration < 3; iteration++) {
      bodyMap.push({
        "datetimeFrom": "2022-01-01T03:45:00.000Z",
        "datetimeTo": "2022-04-10T03:45:00.000Z",

        "pageInfo": {
          "pageIndex": iteration,
          "pageSize": 10000
        }
      });
    }
    let i = 0;
    for (let body of bodyMap) {
      console.log(`iteration ${i}`);
      response = (await axios.get(
        createTimeslots,
        config(body)
      ));
      itemList.push(...response.data.itemList);
      i++;
    }

  } catch (e) {
    console.error(e);
  }
  //console.log(response);
  console.log(itemList.length);
  itemList = itemList.filter(item => !item.orderTimeslotList);
  //itemList = itemList.sort((a, b) => a.sys.cts > b.sys.cts ? 1 : -1);
let revBad = itemList.find(item=>item.sys.rev === 1);
  console.log("rev bad = 0");
 console.log(revBad);



  /*itemList=itemList.sort((a,b)=>a.datetimeFrom > b.datetimeFrom ? 1 : -1);*/
  console.log(itemList.length);
  console.log("Script finshed cuccessfully");

}

main();
