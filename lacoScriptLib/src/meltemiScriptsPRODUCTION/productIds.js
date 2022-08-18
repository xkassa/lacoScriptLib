import axios from "axios";

import fs from "fs";

const token = "eyJraWQiOiJlMmI4ZjNiNTE0ZDI0Njc2YjY4MDZjY2NhMDk0ZjUwMTI4ZTM4ZGU5Yjk3ZjQ0NWI4MjBlOTVhMTI4Yjk3YmUiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiVUpwd2tXM3J4OFZrSmFjdlJYNUxLSHFuaE40TDQ4UTdGTWNRWF9Wa19QUSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiIxajZrdnBpMXFiIiwiY2xpZW50X3V1aWRlbnRpdHkiOiIzMTk2LTMyODctMTc5MC0xIiwiYWNyIjoic3RhbmRhcmQiLCJhdWQiOlsiYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJodHRwczpcL1wvIiwiaHR0cDpcL1wvbG9jYWxob3N0Il0sImNsaWVudF91dWlkZW50aXR5X25hbWUiOiJBV0lEIGE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwibmJmIjoxNjUxMjI2NDM3LCJ1dWlkZW50aXR5X3R5cGUiOiJ1dVBlcnNvbiIsImF1dGhfdGltZSI6MTY1MTIyNDQ0OCwibmFtZSI6IkxhZGlzbGF2IEthxaHFoWEiLCJleHAiOjE2NTEyMjgyMzcsImlhdCI6MTY1MTIyNjQzNywianRpIjoiYmFkODFkZjdhNjU5NDA1NDhkZjJlNDAwODJjNGNjYmIifQ.Oxhd1ddqF9Gop44OlZ4KFsyXxnGkLojT_1Q_V6HV1e-NkOqpmpMvTHUVTodILIrXx0uJWIKM6vJf4Kg2Fm-afhAqAIy63j2tHJfta_Gsag8R6LQ3_BKMxPNvpwc2OOJSGNReZdJ4iy_n7roVgC_9OVSY_kZ1DaEpQn3Rax-LI0ThD4_-FvWZaAQInSM7UXk2zTCz6NwDs8YkDsQ_rjiRaD5d23D3JwTtFOLLboR6NX9I5ZP4JO4lYh-aq_Vf1pn7Iiff6ZP_QEa2rRVUpA9hotf7UUOed9Ud400ByR4BH-uq8FQknM39NpbhGi1JkH9vbsJSibC59YFwvPdy20iuvg";

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

//import * as fs from 'fs';
async function main() {
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

  const productIdList =  itemList.map((item) => item.id)

}

main();
