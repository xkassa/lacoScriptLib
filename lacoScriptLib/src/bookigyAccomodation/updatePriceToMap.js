import axios from "axios";

const token =
  "eyJraWQiOiI0MjlhNTE0ZjRmZjI0OWY2ODg2MWM3NmVlY2E3MTRmMWZkZjBmZDE2MjI5NTRkMzNhODYwMzA3YWNhZDIwYzIiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiS0EwUFEtcm9qRHUwWjhjUDdydDJKclJoRDVGMDF6NkN6TVFacEVqc3ZZMCIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJvOHY3MGI4ZmJqIiwiY2xpZW50X3V1aWRlbnRpdHkiOiIzMTk2LTMyODctMTc5MC0xIiwiYWNyIjoic3RhbmRhcmQiLCJhdWQiOlsiYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJodHRwczpcL1wvIiwiaHR0cDpcL1wvbG9jYWxob3N0Il0sImNsaWVudF91dWlkZW50aXR5X25hbWUiOiJBV0lEIGE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwibmJmIjoxNjUyNzEzNjg0LCJ1dWlkZW50aXR5X3R5cGUiOiJ1dVBlcnNvbiIsImF1dGhfdGltZSI6MTY1MjcxMzY4MywibmFtZSI6IkxhZGlzbGF2IEthxaHFoWEiLCJleHAiOjE2NTI3MTU0ODQsImlhdCI6MTY1MjcxMzY4NCwianRpIjoiODY4YjE5ZWYyOGIwNGVmM2FmNzJhNjczYmM3NjY1MTgifQ.QtRF0sQawPrefDRKWwnXZimVrtNJtoDAHbLGEPjVWnWTSLompUyDnus9CaEgwKZWn7MZfOhTdg9HGZzmgCcYiku087-ojtILgZTvWwG49vkJ2RqwiKg30y2wdgTb6L9LmvH1W9_fmCmDFTYh2APPKW-2qqRRfDi08yboj1eB1c5DK-FOzZpV6Y-a6lK3k5djAVhF4rYkve96ufI7-KZNj6UKL1zKoD2hkANrHuCTs_BhULkNvwtaYXd14R9Uu4wR3s9SEgbbU8wTQlLV_b3LumEB_3ER8ExARdSzeShZWw6Leylzr0pFpK5bVMBD6bZ5N0iU70QJoGG71fgMxa06LA";

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
    awid: "22fe98292c6a43dcabc2e470073b00f5",
  };

  const listTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/list");
  const updateOfferTimeslot = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/update");
  let offerTimeslots;
  try {
    offerTimeslots = (await axios.get(listTimeslots, config({ state: "available", datetimeTo: "2022-08-31T08:00:00.000Z", pageInfo: { pageSize: 10000 } }))).data.itemList.map(({ id, price }) => ({
      id,
      price,
    }));
  } catch (e) {}
  try {
    let i = 0;
    for (let offerTimeslot of offerTimeslots) {
      i++;
      if (typeof offerTimeslot.price === "number") {
        const body = {
          id: offerTimeslot.id,
          price: [
            { price: offerTimeslot.price, currency: "EUR" },
            { price: offerTimeslot.price * 25, currency: "CZK" },
          ],
        };
        console.log(`updated timeslot ${i}`);
        await axios.post(updateOfferTimeslot, body, { headers });
      }
    }
  } catch (e) {
    console.error(e);
  }
  console.log("Script finshed successfully");
}

main();
