import axios from "axios";

const token = "eyJraWQiOiI2YmI4OThkYjVlNmI0Y2FlOTU5NDFlNjgwM2Y5Mjc4MTczMjNmYzg4NWUwYTRlMzliZTZlZGZmMGI0ODM0MzIiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiVUpwd2tXM3J4OFZrSmFjdlJYNUxLSHFuaE40TDQ4UTdGTWNRWF9Wa19QUSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJzbmNoY2tnc3VvIiwiY2xpZW50X3V1aWRlbnRpdHkiOiIzMTk2LTMyODctMTc5MC0xIiwiYWNyIjoic3RhbmRhcmQiLCJhdWQiOlsiYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJodHRwczpcL1wvIiwiaHR0cDpcL1wvbG9jYWxob3N0Il0sImNsaWVudF91dWlkZW50aXR5X25hbWUiOiJBV0lEIGE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwibmJmIjoxNjUxMjQzNTExLCJ1dWlkZW50aXR5X3R5cGUiOiJ1dVBlcnNvbiIsImF1dGhfdGltZSI6MTY1MTIyNDQ0OCwibmFtZSI6IkxhZGlzbGF2IEthxaHFoWEiLCJleHAiOjE2NTEyNDUzMTEsImlhdCI6MTY1MTI0MzUxMSwianRpIjoiOTc1ZjRkZmFhOGY2NDJhODkwYjdhZTgyZGQ3YjI2MDUifQ.YJdZb0-uqyc-ejpmekifVkpRsb9BOQDsOYChL9tBXFPlKRGB9Y0AvU29p9YFgdZJ6f6qgiynQR5r4XfSTQTtIQcTrml9NEBAjIy_Y-_KlozTFM80wBOEY99A_x8YmyIjElJo88ogc13VjEeOkHfY8fGWWH_wtDXgMga22_yzcoaK9poWL2F0HOx0ccDp0gpOifMKbFciLJqr_KEtQ5JTOAXjD_n--fHQmzu8qL47Xvah5o1LYcxoD7imVv8vOBI6Kut4jGBShypMJjKvmyJ4NxFmR-h2I3dEA9ZESYQSLeBbtdM5KGQ-94riEMApetRlDISJZMJAAWJCipyiOQf0qA";

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
    awid: "72a7e1987f6f4414a2a7041f3954a744"
  };

  const productList = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/list");

  let { data: { itemList } } = (await axios.get(
    productList,
    config({ pageInfo: { pageSize: 1000 } })
  ));

  const idList = itemList.map((item) => item.id);

  const removeTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/remove");
  try {
    await axios.post(
      removeTimeslots,
      {idList},
      { headers }
    );
  } catch (e) {
    console.error(e);
  }
  console.log("Script finished successfully");

}

main();
