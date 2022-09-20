import { grantToken, post } from "../common/helpers.js";
const token = await grantToken(false);

async function main() {
  const uuBtUrl = "https://uuapp.plus4u.net/uu-businessterritory-maing01/c580e8880fe441d1a09195f928871755";

  const groupList = [
    "630f44c8e3b4331e222bb57a",
    "630f44ca75c95034af863de8",
    "630f44cb5f4b6d73e6433a1f",
    "630f44cd66c5d9738b1fe3fe",
    "630f44ceb4b13a3327cba26f",
    "630f44cf66c5d9738b1fe40e",
    "630f44cf75c95034af863e03",
    "630f44d0e3b4331e222bb5a4",
    "630f44d207c5f9060e6bfd21",
    "630f44d275c95034af863e1e",
    "630f44d3b4b13a3327cba29d",
    "630f44d475c95034af863e33",
    "630f44d520d4881aec9cd8f5",
    "630f44d620d4881aec9cd903",
  ];

  const failedAddedCasts = [];
  for (let group of groupList) {
    const dtoIn = {
      id: group,
      sideBCode: "unit-ais-groups-allWithSubordinates",
    };
    try {
      await post(uuBtUrl, "uuRoleGroupIfc/removeCast", dtoIn, token);
    } catch (e) {
      failedAddedCasts.push(dtoIn);
    }
  }

  console.log(`number of fail casts : ${failedAddedCasts.length}`);
  console.log("script finished successfully");
}

main();
