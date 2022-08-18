import axios from "axios";

const token =
  "eyJraWQiOiI2NDlkYWNhN2YwOTg0Y2I2OWU0MGI2NjRhMTFlZGU0NWZhYTQ2ZDdmODBlZTRlMjViMjA4MGU3ZTMyNzVkYmMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoidUdKazhGOFFoc0xoV2NmSTI2TXVQejh3WEgxMlpKMmtqTnR5U1NkM0tzUSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJoaTBzYW9nODBtIiwiY2xpZW50X3V1aWRlbnRpdHkiOiIzMTk2LTMyODctMTc5MC0xIiwiYWNyIjoic3RhbmRhcmQiLCJhdWQiOlsiYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJodHRwczpcL1wvIiwiaHR0cDpcL1wvbG9jYWxob3N0Il0sImNsaWVudF91dWlkZW50aXR5X25hbWUiOiJBV0lEIGE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwibmJmIjoxNjUzOTkwOTg1LCJ1dWlkZW50aXR5X3R5cGUiOiJ1dVBlcnNvbiIsImF1dGhfdGltZSI6MTY1Mzk5MDk4NCwibmFtZSI6IkxhZGlzbGF2IEthxaHFoWEiLCJleHAiOjE2NTM5OTI3ODUsImlhdCI6MTY1Mzk5MDk4NSwianRpIjoiMmMzZTQ3MmY5OWI1NDFiZmEwZjgxNmMwYzUwMjIwZDQifQ.MIb8SZKwyNdT2tKE8JdHpYh-VOsuqaRAA19llXOrotFEF-g43zOB1vadI7wZS2RBXZO2YEZIuabjWBXaIjYTpmKr8M5lq54Z0h7lEfa3BKZnh43lRmV0Du0bUW5BrOhQ9Yu9xwszj3dEcoEjsipmZkzhjgeprdKmgXNaeTPEeArzGMjW2SNxJwBSsRxoz-S1Y3X28gZs5NVrycqfNB1qVRPddj1gzU0mBeveLYpbslx1T-Q7iPVAXfvIMRKDVOZjxCsxMZYrujvEaCNBt7PnJbWCQYEqlaPCC1dlb1vhsr6RV4VqB9Euc5HOlZgRpEKI_19Z4xHVkOY4-UdXrWKzpA";

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
  const bookigyUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookigy-workplaceg01",
    awid: "318ed371ee79457f8cf9c2019e8c67a3",
  };

  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "435952cf8c274529800fa14c9e8051a8",
  };

  let response;
  let itemList = [];
  const listTimeslots = setUseCase(getBaseUrl(bookingEngineUrl), "offer/timeslot/list");
  const listProducts = setUseCase(getBaseUrl(bookingEngineUrl), "product/list");
  const listAreas = setUseCase(getBaseUrl(bookigyUrl), "area/list");

  try {
    const body = {
      datetimeFrom: "2022-07-01T00:00:00.000Z",
      datetimeTo: "2022-07-02T00:00:00.000Z",

      pageInfo: {
        pageIndex: 0,
        pageSize: 10000,
      },
    };

    response = await axios.get(listTimeslots, config(body));
    itemList.push(...response.data.itemList);
  } catch (e) {
    console.error(e);
  }
  //console.log(response);
  console.log(itemList.length);

  let productsWithTimeslots = [...new Set(itemList.map((item) => item.product))];
  try {
    response = await axios.get(
      listAreas,
      config({
        pageInfo: {
          pageIndex: 0,
          pageSize: 10000,
        },
      })
    );
  } catch (e) {
    console.error(e);
  }
  let productList = response.data.itemList.filter((item) => item.areaType === "workplace" && item.state === "active").map((item) => item.bookingEngineProduct);

  const areasWithTimeslots = productsWithTimeslots.map((product) => response.data.itemList.find((item) => product === item.bookingEngineProduct));
  const productsWithoutTimeslots = productList.filter((product) => !productsWithTimeslots.includes(product));
  const areaTypesWithTimeslots = [...new Set(areasWithTimeslots.map((item) => item.workplaceType))];
  //itemList = itemList.sort((a, b) => a.sys.cts > b.sys.cts ? 1 : -1);
  let revBad = itemList.find((item) => item.sys.rev === 1);
  console.log("rev bad = 0");

  /*itemList=itemList.sort((a,b)=>a.datetimeFrom > b.datetimeFrom ? 1 : -1);*/
  console.log(itemList.length);
  console.log("Script finshed cuccessfully");
}

main();
