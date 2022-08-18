import axios from "axios";

async function main() {
  const token = "eyJraWQiOiIwOTU1NWYxMjNhZTY0MmM4YTU0ODBmYTlmMjczOTRhZGYzYjg0ZmNlYmQyMTQ0MGY4ZGZhNGVjZGM4MThhYTUiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiWndFNUZhZnd3THRhQ0lQb0dHMURrV3VtVWpjR0twZE5ScGVHX21pVGdVUSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJ2bGtsNWQ5ZWppZyIsImNsaWVudF91dWlkZW50aXR5IjoiMzE5Ni0zMjg3LTE3OTAtMSIsImFjciI6InN0YW5kYXJkIiwiYXVkIjpbImE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwiaHR0cHM6XC9cLyIsImh0dHA6XC9cL2xvY2FsaG9zdCJdLCJjbGllbnRfdXVpZGVudGl0eV9uYW1lIjoiQVdJRCBhOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsIm5iZiI6MTY0OTY3ODczMCwidXVpZGVudGl0eV90eXBlIjoidXVQZXJzb24iLCJhdXRoX3RpbWUiOjE2NDk2Nzg3MjgsIm5hbWUiOiJMYWRpc2xhdiBLYcWhxaFhIiwiZXhwIjoxNjQ5NjgwNTMwLCJpYXQiOjE2NDk2Nzg3MzAsImp0aSI6IjczNjg1ZDVkMmRkYzQwMjVhMzI0YjczOTIzNGIwNTBhIn0.OAIgZ-FWn8ig8eGMZaVn0iZr9loejGTcjiOGnGmf_BJrLrbb2UW2dmfzYXsEtwN6MamSLUb7Nf2WKV_NeVATzy8gBvKgmdAJgPIepdLofT1AelxDLGZBxEPAVPtymQl8Ke9BmMphAvNOEICGxm4eipZpndleYPRvkwbX-CYW2Akm1cWgo7p34zijT_UZrqPNEnzZ76p0snU3pFZQto6-ZFChnTVzPVAu9B5EhYXPTzd5MfWaQtL4dtV8i3Wb2gFJulc8zbqiXIrij-cGvgk249YFtELrRltE9xwg7POhoUH009gY2LH_slsrLpq16sOg8O4_hKhA9IobTFhcKsICBA";

  const bookingEngineUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookingengine-maing01",
    awid: "fbb5deca28474226a0b86db88a8a84df"
  };

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

  const listMyOrders = setUseCase(getBaseUrl(bookingEngineUrl), "order/listMyOrders");
  let myOrders;
  try {
    myOrders = (await axios.get(
      listMyOrders,
      config({
        state: "completed"
      })
    )).data.itemList;
  } catch (e) {
    console.error(e);
  }
  myOrders = myOrders.map(({ id }) => id);

  const cancelOrder = setUseCase(getBaseUrl(bookingEngineUrl), "order/cancelByExecutive");
  try {
    for (let id of myOrders) {
      await axios.post(
        cancelOrder,
        {
          id
        },
        { headers }
      );
      console.log("cancelled order:" + id);
    }

  } catch (e) {
    console.error(e);
  }

}

main();
