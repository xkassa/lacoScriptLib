import helpers from "../common/helpers.js";

//const token =
  //"eyJraWQiOiI3ZGViOTFhMmY4OTk0YzhmOGM3ODJjNzU0NWU3YWM5OWI3OTk1NGY5YjUyOTQ4NTU4NDBjZjZhODczMGM5YzkiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MDY1NzlmNWY0MDNjZDAwMzUzNjU1MTUiLCJ1dWlkZW50aXR5IjoiNjM5OS01MDE4LTEiLCJjbGllbnRfdXJpIjoidXJuOnV1b2lkY2NsaWVudDp1dS1pZGVudGl0eW1hbmFnZW1lbnQtbWFpbmcwMVwvNmQ3YzMxN2FmYzk5NDQ1NWIyOTQ4YTk3NjM0NjJiZWUtYTliMTA1YWZmMjc0NDc3MWJlNGRhYTgzNjE5NTQ2NzciLCJhdXRoX2lkIjoiYm80ZEgxU1VUZzlqM1pHc2ZfdmpXdEJnWmc4ZV82SnFka1M4QnF3bXFZQSIsImNsaWVudF91dWFwcGtleSI6InV1LWlkZW50aXR5bWFuYWdlbWVudC1tYWluZzAxXC82ZDdjMzE3YWZjOTk0NDU1YjI5NDhhOTc2MzQ2MmJlZS1hOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsImNsaWVudF9hY3IiOiJsb3ciLCJpc3MiOiJodHRwczpcL1wvdXVpZGVudGl0eS5wbHVzNHUubmV0XC91dS1vaWRjLW1haW5nMDJcL2JiOTc3YTk5ZjRjYzRjMzdhMmFmY2UzZmQ1OTlkMGE3XC9vaWRjIiwiY2xpZW50X3V1aWRlbnRpdHlfdHlwZSI6InV1QXdpZEVlIiwibm9uY2UiOiJobmJxcXIzaDljbyIsImNsaWVudF91dWlkZW50aXR5IjoiMzE5Ni0zMjg3LTE3OTAtMSIsImFjciI6InN0YW5kYXJkIiwiYXVkIjpbImE5YjEwNWFmZjI3NDQ3NzFiZTRkYWE4MzYxOTU0Njc3IiwiaHR0cHM6XC9cLyIsImh0dHA6XC9cL2xvY2FsaG9zdCJdLCJjbGllbnRfdXVpZGVudGl0eV9uYW1lIjoiQVdJRCBhOWIxMDVhZmYyNzQ0NzcxYmU0ZGFhODM2MTk1NDY3NyIsIm5iZiI6MTY1NzU1MDAxMywidXVpZGVudGl0eV90eXBlIjoidXVQZXJzb24iLCJhdXRoX3RpbWUiOjE2NTc1NDcxNzEsIm5hbWUiOiJMYWRpc2xhdiBLYcWhxaFhIiwiZXhwIjoxNjU3NTUxODEzLCJpYXQiOjE2NTc1NTAwMTMsImp0aSI6IjFhODI5OTA1YzYwMTQ3ODRiYjQ2NmUzMzk2MzJjNDQ2In0.CF0xUtJ8bD1tIsCuvVMIym75tFkiox0-zKQJAIfvBwjJI2uCpDPvtAnhxqLL4RE7mhk0k8ovniPJMv5UWliwvDQ59GPuhAw7gDi6VpeveW3Ci5sr42wBicUS0BX7_9XHVMA8asmLl2975Rd3vc62Ul9K-ShjTMO7Ceu6q3zpw4G-Y_Ww9bHC_MK4yt51QOA-waVMVRKiP8oL9Au89FW0rw4xAwkC7u7LNpJslsZzw6ZgEQyY1KI6w3-cLJg_fFAdu-sw5NQJvlYJPLMgIjUXJw_1zaBUglWpAQ_Y99gHpqTpWP1BPwRN165faO-Vv532Jrhby7040ktpqPOBPu76yw";
async function main() {
  const bookigyUrl = {
    host: "https://uuappg01-eu-w-1.plus4u.net",
    contextPath: "uu-bookigy-workplaceg01",
    awid: "233db614b83248919f128bc0e2d93857",
  };

  const areaList = [
    "61dc98e0940e71001b7f244f",
  ];

  const createBooking = "workplaceBooking/createBulk";
  const failedCalls = [];
  const dateArray = [];
  let date = new Date();
  for (let index = 0; index < 100; index++) {
    date.setDate(date.getDate() + 1);
    const datetimeFrom = new Date(date);
    datetimeFrom.setUTCHours(6, 0, 0, 0);
    const datetimeTo = new Date(date);
    datetimeTo.setUTCHours(12, 0, 0, 0);
    dateArray.push({ datetimeFrom: datetimeFrom.toISOString(), datetimeTo: datetimeTo.toISOString() });
  }
  let i = 0;
  for (let date of dateArray) {
    i++;
    for (let area of areaList) {
      const dtoIn = {
        bookingList: [{ ...date, area, owner: { btUnit: "62cbfa3583ab88074e772399", uuIdentity: "6399-5018-1" } }],
      };
      try {
        await helpers.post(bookigyUrl, createBooking, dtoIn, token);
      } catch (e) {
        failedCalls.push(dtoIn);
      }
    }
  }

  console.log(`number of fail timeslots : ${failedCalls.length}`);
  console.log("script finished successfully");
}

main();
