import orderList from "./orderList.json";
import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

//import * as fs from 'fs';
async function main() {
  const { itemList } = orderList;
  let resultList = itemList.filter((item) => (item.cancelledBy && item.ownedBy !== item.cancelledBy ));
  resultList = resultList.map((item)=>item.cancelledBy);
  console.log(resultList.length)
  resultList = [...new Set(resultList)];
  const data = JSON.stringify({ itemList: resultList });
  await fs.writeFile("hackedOrders.json", data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data saved");
  });
}

main();
