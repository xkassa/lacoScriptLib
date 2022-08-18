import { grantToken, post } from "../common/helpers.js";
const token = await grantToken(true);

async function main() {
  const uuBtUrl = {
    host: "https://uuapp-dev.plus4u.net/",
    contextPath: "uu-businessterritory-maing01",
    awid: "00000bd7196e438494ece601a43154bc",
  };

  const groupList = [
    "62da634bb559b070ba683573",
    "62da634bb559b070ba683578",
    "62da634ca6c98121c90155da",
    "62da634ca6c98121c90155e1",
    "62da634db559b070ba68358e",
    "62da634da6c98121c90155ec",
    "62da634ea6c98121c90155f1",
    "62da634ea6c98121c90155fb",
    "62da634fb559b070ba68359d",
    "62da634fa6c98121c9015606",
    "62da6350a6c98121c901560c",
    "62da6350b559b070ba6835b2",
    "62da6351b559b070ba6835b7",
    "62da6351a6c98121c901561d",
    "62da6352a6c98121c9015622",
    "62da6352a6c98121c9015628",
    "62da6353b559b070ba6835cd",
    "62da6353b559b070ba6835d3",
    "62da6354b559b070ba6835d9",
    "62da6354b559b070ba6835df",
    "62da6355a6c98121c9015643",
    "62da6355b559b070ba6835ea",
    "62da6356a6c98121c901564f",
    "62da6356b559b070ba6835f4",
    "62da6357b559b070ba6835ff",
    "62da6357b559b070ba683604",
    "62da6358b559b070ba683609",
    "62da6358a6c98121c9015663",
    "62da6358b559b070ba683618",
    "62da6359b559b070ba68361d"
  ]

  const failedAddedCasts = [];
  for (let group of groupList) {
    const dtoIn = {
      id: group,
      sideBCode: "unit-baReception-groups-leaders",
    };
    try {
      await post(uuBtUrl, "uuRoleGroupIfc/addCast", dtoIn, token);
    } catch (e) {
      failedAddedCasts.push(dtoIn);
    }
  }

  console.log(`number of fail timeslots : ${failedAddedCasts.length}`);
  console.log("script finished successfully");
}

main();
