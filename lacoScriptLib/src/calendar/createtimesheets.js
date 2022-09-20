import { get, post, getFullList, TokenService } from "../common/helpers.js";
import { myTerritoryUrl } from "../common/urls.js";

const DEVELOPMENT = false;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    for (let i = 5000; i < 20000; i++) {
      const token = await tokenService.getToken();
      const startTime = new Date(dtoIn.startTime);
      startTime.setDate(startTime.getDate() + i);
      const endTime = new Date(dtoIn.endTime);
      endTime.setDate(endTime.getDate() + i);
      try {
        await post(myTerritoryUrl, "uuDwRecord/createByOwner", { ...dtoIn, code: dtoIn.code + i, startTime: startTime.toISOString(), endTime: endTime.toISOString() }, token);
      } catch (e) {
        try {
          await post(myTerritoryUrl, "uuDwRecord/createByOwner", { ...dtoIn, code: dtoIn.code + i, startTime: startTime.toISOString(), endTime: endTime.toISOString() }, token);
          console.error("failed but then succeed");
        } catch (e) {
          console.error("double failed something may be wrong ...");
        }
      }
      console.log(`${i} timesheet created start: ${startTime.toISOString()} end: ${endTime.toISOString()}`);
    }
  } catch (e) {
    console.error(e);
  }
}
main();

const dtoIn = {
  code: "281e9f389dff94193a4cdd0a47e3a86e",
  sourceAppBaseUri: "https://uuapp.plus4u.net/uu-myterritory-dwg01/b71c506c307e4bda987fddd881c68aec",
  sourceAppKey: "uu-myterritory-dwg01/64bf4911cd1a4a8a8b104dff8739c116-b71c506c307e4bda987fddd881c68aec",
  sourceAwidName: "Ladislav Kašša - Digital Workspace",
  originAppKey: "uu-myterritory-dwg01/64bf4911cd1a4a8a8b104dff8739c116-b71c506c307e4bda987fddd881c68aec",
  originAppAwidName: "Ladislav Kašša - Digital Workspace",
  setAsRead: true,
  recipient: true,
  sender: true,
  senderUuIdentity: "6399-5018-1",
  showInDiary: "timeBlock",
  name: "lunch",
  startTime: "2022-09-20T09:00:00.000Z",
  endTime: "2022-09-20T10:00:00.000Z",
  tileIfcMap: {
    setFinal: {
      name: "Finish record",
    },
    update: {
      name: "Update record",
    },
    cancel: {
      name: "Cancel record",
    },
  },
  appTagMap: {
    private: {
      colorSchema: "brown",
      name: {
        cs: "Osobní",
        en: "Private",
      },
    },
  },
};
