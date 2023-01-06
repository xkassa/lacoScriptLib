import axios from "axios";
import open from "open";

function wait(time = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done!");
    }, time);
  });
}

async function main() {
  let response;
  let i = 0;
  while (true) {
    try {
      response = await axios.get(
        "https://ecm.coopculture.it/index.php?option=com_snapp&task=event.getEventsCalendar&format=raw&id=D7E12B2E-46C4-074B-5FC5-016ED579426D&month=11&year=2022&lang=en&_=1666027518862"
      );
    } catch (e) {
      console.log(e);
    }
    const match =
      response.data.match('day-number available active" data-date="18/10/2022') ||
      response.data.match('class="day-number available active" data-date="19/10/2022"') ||
      response.data.match('class="day-number available active" data-date="20/10/2022"') ||
      response.data.match('class="day-number available active" data-date="21/10/2022"');
    if (match) {
      console.log("found free ticket :)");
      await open("https://www.youtube.com/watch?v=hHuyS2jWvGU");
      await open("https://ecm.coopculture.it/index.php?option=com_snapp&view=event&id=D7E12B2E-46C4-074B-5FC5-016ED579426D&catalogid=DDDA3AB3-47BC-0A49-7752-0174490F632A&lang=en");
      break;
    }
    console.log("not found free ticket :(" + i);
    i++;
    await wait(3000);
  }

  console.log();
}
main();
