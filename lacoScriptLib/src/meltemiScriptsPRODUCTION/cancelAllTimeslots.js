import productIds from "./productIds.json";
import axios from "axios";

const token = "eyJraWQiOiIxODdiMmNlNGE2NDY0ZjIwODMwYWNkODAwYTk5ZThmYmFkZGU0Y2VlNzE0NDQ5MDViMWYyMjk3M2Y4YjI4MzEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiYmliZHJFaGVyaHp3YXFpYmgwbmRocVZFNXI0c1pTS1JPNjJOVGtPTnpvNCIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJibjNnZWlmZWxsIiwiY2xpZW50X3V1aWRlbnRpdHkiOiIzMTk2LTMyODctMTc5MC0xIiwiYWNyIjoic3RhbmRhcmQiLCJhdWQiOlsiYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJodHRwczpcL1wvIiwiaHR0cDpcL1wvbG9jYWxob3N0Il0sImNsaWVudF91dWlkZW50aXR5X25hbWUiOiJBV0lEIGE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwibmJmIjoxNjQ5MDgxNDcwLCJ1dWlkZW50aXR5X3R5cGUiOiJ1dVBlcnNvbiIsImF1dGhfdGltZSI6MTY0OTA4MTQ2OCwibmFtZSI6IkxhZGlzbGF2IEthxaHFoWEiLCJleHAiOjE2NDkwODMyNzAsImlhdCI6MTY0OTA4MTQ3MCwianRpIjoiOTY0MjA4ZDgyZmM3NDJjN2EwZWI5ZWVjNTViMTJiMjcifQ.XBlKa-2KD3lKp5RfZGRYOmiJDSz9uft6DiSSpyyo11b9iWMpcOV4wcqTohf67Oy6oIPPKHol1Z34O71t4jnd5jcsEabNha7zG_VhjSyniC_JcqXNwdpP6unTnOIKchxH9Q5jWJOPZHhqOLpx6mjv2uMZPuFBZVKvbSaAOZo2ztZ2mscTYcDiJvkWuB0UuCtrtJS-RgccfHhrZKcm6OLRZB-c6SPWJmCWSVlwsgT3LxnLwlboTpnWMsfYlalqKEtuQlA-LXut8EMc0254YH1ncy6K2Io8Ud8Httg1JkkobCRujdpkyj-00ymRdCa_tbFIEtmGDpdiWRyVNR-TV4-4hg";

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

async function main() {

  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "fbb5deca28474226a0b86db88a8a84df"
  };

  const listTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/list");
  const removeTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/remove");
  let offerTimeslots;

  try {
    offerTimeslots = await axios.get(
      listTimeslots,
      config({
        "datetimeFrom": "2022-04-04T00:00:00.000Z",
        "pageInfo": {
          "pageIndex": 0,
          "pageSize": 7000
        }
      })
    );
    console.log(`timeslots loaded`);
  } catch (e) {
    console.error(e);
  }

  offerTimeslots = offerTimeslots.data.itemList.map(item=>item.id)
   try {
     for (let i = 0; i < 8; i++) {
       await axios.post(
         removeTimeslots,
         { idList: offerTimeslots.splice(i * 1000, (i + 1) * 1000) },
         { headers }
       );
       console.log(`${i} timeslots removed`);
     }

   } catch (e) {
     console.error(e)
  ;
}

console.log("Script finshed successfully");

}

main();
