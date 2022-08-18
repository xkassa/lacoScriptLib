import offerTimeslotList from "./productList.json";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

//import * as fs from 'fs';
async function main() {
  const {itemList} = offerTimeslotList;
  console.log(itemList.map((item)=>item.id))

  const data = JSON.stringify({ itemList: itemList.map((item)=>item.id) });
  await fs.writeFile("productIds.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data saved");
  });
}

main();
