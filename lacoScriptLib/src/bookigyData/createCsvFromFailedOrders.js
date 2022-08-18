import { get, post, grantToken, getPersonByUuId } from "../common/helpers.js";
import { bookingEngineUrl, bookigyUrl } from "../common/urls.js";
import fs from "fs";
import { createObjectCsvWriter } from "csv-writer";
import _ from "lodash";

const ENV = "productionEBC";
const DEVELOPMENT = false;

async function main() {
  const nextUpdateToken = new Date();
  nextUpdateToken.setMinutes(nextUpdateToken.getMinutes() + 5);
  let token = await grantToken(DEVELOPMENT);
  let uuBookingEngineOrders, orderTimeslots;
  try {
    const response1 = await get(
      bookigyUrl[ENV],
      "area/list",
      {
        pageInfo: { pageSize: 25000 },
      },
      token
    );

    const response2 = await get(
      bookigyUrl[ENV],
      "area/list",
      {
        pageInfo: { pageSize: 25000 },
      },
      token
    );

    const orderList = [];
    for (let id of idList) {
      let response3 = await get(bookingEngineUrl[ENV], "order/load", { id: id }, token);
      response3.owner = await getPersonByUuId(response3.createdBy, token);
      orderList.push(response3);
    }

    console.log();

    const csvWriter = createObjectCsvWriter({
      fieldDelimiter:";",
      path: "./data/failedOrders.csv",
      header: [
        { id: "id", title: "bookingEngineOrderId" },
        { id: "datetimeFrom", title: "datetimeFrom" },
        { id: "datetimeTo", title: "datetimeTo" },
        { id: "createdBy", title: "createdBy" },
        { id: "createdByName", title: "createdByName" },
        { id: "createdBySurname", title: "createdBySurname" },
        { id: "ownedBy", title: "ownedBy" },
        { id: "state", title: "state" },
        { id: "createTime", title: "createTime" },
        { id: "nameOfOrder", title: "nameOfOrder" },
      ],
    });

    const records = orderList.map((item) => ({
      ..._.pick(item, ["datetimeFrom", "datetimeTo", "id", "createdBy", "ownedBy", "createTime", "state"]),
      createdByName: item?.owner?.first_name?.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      createdBySurname: item?.owner?.surname?.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      nameOfOrder: item?.data?.name?.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ?? "",
    }));

    csvWriter
      .writeRecords(records) // returns a promise
      .then(() => {
        console.log("...Done");
      });
  } catch (e) {
    console.error(e);
  }
}

main();

const idList = [
  "62b08adc0ddb050028e0aca3",
  "629f3d8b83215a0028a58800",
  "629f3d8a83215a0028a587f6",
  "629f3d8983215a0028a587ee",
  "629f3d8883215a0028a587e4",
  "629f3d8783215a0028a587dc",
  "629f3d6b83215a0028a586c7",
  "629e038e83215a00289e9f14",
  "629e038d83215a00289e9f0c",
  "629e038c83215a00289e9ef4",
  "629e038b83215a00289e9ece",
  "629e038a83215a00289e9ea8",
  "629e038a83215a00289e9e8a",
  "629e038983215a00289e9e7c",
  "629e038883215a00289e9e74",
  "629e038883215a00289e9e6c",
  "6299fb8d83215a002887fa04",
  "6299fb6283215a002887f887",
  "6299fb3283215a002887f72b",
  "628cb0616142380028c513b2",
  "628cb0606142380028c5139c",
  "628cb05f6142380028c51394",
  "628cb05e6142380028c5138c",
  "6278b768c6de7800284a1ef8",
  "62752d83c6de78002839c9e8",
  "62617bf752df900027eacf11",
  "62617bf652df900027eacf07",
  "62617bf552df900027eaceff",
  "62617bf452df900027eacef3",
  "62617bf352df900027eaceeb",
  "62617bf252df900027eacedf",
  "626179d052df900027eabede",
  "626179cf52df900027eabec9",
  "626179ce52df900027eabea8",
  "626179cd52df900027eabe9b",
  "626179cd52df900027eabe89",
  "626179cc52df900027eabe81",
  "61f7cd38bba46d0027367bc0",
  "61f7cd19bba46d0027367b1d",
  "61f7cc87bba46d0027367716",
  "61f7cc6cbba46d002736766d",
  "61f7cc0fbba46d002736741d",
  "61f7cbf4bba46d002736733b",
];
