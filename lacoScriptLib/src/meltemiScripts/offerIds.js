import offerTimeslotList from "./offerTimeslotList.json";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

//import * as fs from 'fs';
async function main() {
  const { itemList } = offerTimeslotList;
  const data = JSON.stringify({ idList: itemList.map((item) => item.id).slice(6000, 7000) });
  await fs.writeFile("offerTimeslotIds.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data saved");
    console.log(itemList.length);
  });
}

main();
