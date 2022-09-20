import { post, TokenService } from "../common/helpers.js";
import { chargeParkOperatorUrl } from "../common/urls.js";

const ENV = "localhost";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    //  const token = await tokenService.getToken();
    console.log();
    for (let parkingPlace of places.itemList) {
      if (!parkingPlace) continue;
      let res;
      try {
        parkingPlace?.basicInformation?.payment?.paymentTypes && (parkingPlace.basicInformation.payment.paymentTypes = [parkingPlace.basicInformation.payment.paymentTypes]);
        parkingPlace?.spaces?.length &&
          parkingPlace.spaces.forEach((space) => {
            space.floor ??= "1";
          });
        res = await post(chargeParkOperatorUrl[ENV], "parkingPlace/create", parkingPlace, token);
      } catch (e) {
        console.log();
      }
      console.log(`created place ${parkingPlace.basicInformation.name + res.id}`);
    }
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();

const places = {
  itemList: [
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "carefour parking",
        description: {
          en: "parking in front of carefour mall",
          cs: "parkovani pred carefourem",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 26,
        availableFloors: [],
        availableFloorsNum: 32,
        timezone: "gmt+2",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "this is your template",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 0,
          longitude: 0,
        },
        address: {
          address1: "Carefour Osuskeho",
          address2: "mall",
          city: "Bratislava",
          country: "Slovakia",
          zipCode: "831 01",
          streetNumber: "23",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        },
        imageList: [
          {
            binaryId: "993d8daf11579b36740b85f5cbc74ffa5b588b1dfe282cda7efba089da61673b",
          },
          {
            binaryId: "902d07b81f47779ffc0a654ed4ee756bddb5df263fefec4af225909d697dc6eb",
          },
          {
            binaryId: "627c397862674e4a6a85a328fef6a4095db299dd4ebed5d45760329c4ed6d754",
          },
          {
            binaryId: "bf0e69d2acabb552c17afbd4f20b2d9d0ce4441eb0bd79ae525037b1d63a16ed",
          },
          {
            binaryId: "a5c46a9db4a3ec78c4e550110e2ab172cf828a8f7c6a672871fd4e82095b14f5",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://dobruchut.aktuality.sk/recept/19478/fotorecept-fasirky/",
          description: {
            en: "desc en",
            cs: "desc csq",
          },
        },
        externalIdentifier: "external identifier",
      },
      spaces: [
        {
          propertyMap: {},
          name: "space210",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0",
        },
        {
          propertyMap: {},
          name: "space211",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_1",
        },
        {
          propertyMap: {},
          name: "space212",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_2",
        },
        {
          state: "active",
          code: "space21_0_0",
          propertyMap: {},
          name: "space2100",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
        },
        {
          propertyMap: {},
          name: "space2101",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_1",
        },
        {
          propertyMap: {},
          name: "space2102",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_2",
        },
        {
          propertyMap: {},
          name: "space2103",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_3",
        },
        {
          propertyMap: {},
          name: "space2104",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_4",
        },
        {
          propertyMap: {},
          name: "space2105",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_5",
        },
        {
          propertyMap: {},
          name: "space2106",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_6",
        },
        {
          propertyMap: {},
          name: "space2100",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_0",
        },
        {
          propertyMap: {},
          name: "space2101",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_1",
        },
        {
          propertyMap: {},
          name: "space2102",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_2",
        },
        {
          propertyMap: {},
          name: "space2103",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_3",
        },
        {
          propertyMap: {},
          name: "space2104",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_4",
        },
        {
          state: "active",
          code: "space21_0_5",
          propertyMap: {},
          name: "space2105",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
        },
        {
          propertyMap: {},
          name: "space2106",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_6",
        },
        {
          propertyMap: {},
          name: "space2107",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_7",
        },
        {
          propertyMap: {},
          name: "space2108",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_8",
        },
        {
          propertyMap: {},
          name: "space2109",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_9",
        },
        {
          propertyMap: {},
          name: "space2100",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_0",
        },
        {
          propertyMap: {},
          name: "space2101",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_1",
        },
        {
          propertyMap: {},
          name: "space2102",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_2",
        },
        {
          propertyMap: {},
          name: "space2103",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_3",
        },
        {
          propertyMap: {},
          name: "space2104",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_4",
        },
        {
          propertyMap: {},
          name: "space2105",
          iotDeviceList: [
            {
              deviceId: "966d491a81bc469686fa05b5885d7321",
            },
            {
              deviceId: "776961b718d14488874d6e5cacd2b901",
            },
          ],
          floor: "34",
          location: {
            pointCoordinates: {
              latitude: 2,
              longitude: 34,
            },
          },
          code: "space21_0_5",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T06:45:50.181Z",
        mts: "2022-09-13T11:05:24.340Z",
        rev: 137,
      },
      id: "63183e1e0ceb41002a89ff14",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "parking tesco",
        description: {
          en: "parking bratislava tesco",
          cs: "parkovani v bratislave u tesca",
        },
        accessControlled: true,
        layout: "field",
        spacesTotal: 3,
        availableFloors: [],
        availableFloorsNum: 3,
        timezone: "gmt+3",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "template this sms",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 0,
          longitude: 0,
        },
        address: {
          address1: "Bratislava Mytna2",
          address2: "treti poschodi",
          city: "Bratislava",
          country: "Slovakia",
          zipCode: "83101",
          streetNumber: "34",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        },
        imageList: [
          {
            binaryId: "58d42c4b63c2dd539bb9b09d26c2cfd547f836565f7f9e1a51615fbcf4b06063",
          },
          {
            binaryId: "f4d7925f9c3f563c12434ca3d7ddc783ecdbcab90c6e5545dfa5c2f0e74828b0",
          },
          {
            binaryId: "f08c9c6b7d154edd99828d529f2c2592009ae9436457c1125564dcc7723f4234",
          },
          {
            binaryId: "e257de653b78681fe05e87f41927ae400a640d40dc8e35ee8b61fd8b98032ee5",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://uuapp.plus4u.net/uu-myterritory-maing01/7762936dc1cf4706b6785dd4d8ff5509/userGate/calendar?code=uuDigitalWorkspace",
          description: {
            en: "desc en",
            cs: "desc cs",
          },
        },
        externalIdentifier: "external id",
      },
      spaces: [
        {
          state: "active",
          code: "spc1",
          propertyMap: {},
          name: "new space",
          iotDeviceList: [],
          location: {
            pointCoordinates: {
              latitude: 34,
              longitude: 23,
            },
          },
        },
        {
          state: "active",
          code: "spc1_0",
          propertyMap: {},
          name: "new space0",
          iotDeviceList: [],
          location: {
            pointCoordinates: {
              latitude: 34,
              longitude: 23,
            },
          },
        },
        {
          state: "active",
          code: "spc1_1",
          propertyMap: {},
          name: "new space1",
          iotDeviceList: [],
          location: {
            pointCoordinates: {
              latitude: 34,
              longitude: 23,
            },
          },
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T12:06:07.202Z",
        mts: "2022-09-13T06:32:18.603Z",
        rev: 27,
      },
      id: "6318892f84758d002a1c19f5",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Bear Plains Spire2",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        timezone: "CEST",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "1c2420de2a9b064ae030ef7cd9fa5b3a9944607ce15733022f67d6cc9a5f788d",
          },
          {
            binaryId: "1c22a99aec74fe774591fc6514f144c7c66462d5d66e58ff011019bdaaeca742",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:25:56.161Z",
        mts: "2022-09-12T13:48:30.535Z",
        rev: 4,
      },
      id: "63189be484758d002a1c1abc",
    },
    null,
    null,
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Purity Spire",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "7a245eba4b4d0556b435d9da605dea3a4acf987113643ab9e07f95490bf70d62",
          },
          {
            binaryId: "4f286f019691f7cbabb5864a925071ddd0481dcc5ad3d4b73ff211f20cabf6ca",
          },
          {
            binaryId: "84e4c99c91209e4cc8d68bc2d6dd307c56836d12131a38d7a0cd0cfa4c622b72",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:23.162Z",
        mts: "2022-09-13T06:39:15.152Z",
        rev: 18,
      },
      id: "63189bff84758d002a1c1ac6",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Memorial Spire",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "612d0b651f2fce8606f583ec8ca60e6d1cc85bb798a6c8408313ab5595359f3d",
          },
          {
            binaryId: "dd6c5d1c0d47e13b16ecfe70bbedfd61ae5de8b3ee8c46222d328369e070b032",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:23.315Z",
        mts: "2022-09-13T06:40:48.501Z",
        rev: 13,
      },
      id: "63189bff84758d002a1c1ac9",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Memorial Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "031524fe4a95fd2a97e760f42b4add2418c526057070510eda9cbb166d9492fe",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:23.467Z",
        mts: "2022-09-13T05:51:12.205Z",
        rev: 2,
      },
      id: "63189bff84758d002a1c1acc",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Innocence Obelisk",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 10,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "f3fd5f09e9f1669caf0ec22e731641f9e912a2f0b4b78730fa4414c1fd258bf2",
          },
          {
            binaryId: "ba5de3a9258aac187aa9e15dff47144eba75509c42b9de02a20cefb2f4611570",
          },
          {
            binaryId: "89473e134b5f6b05e4bc03ac51e042882d55efe8f5a27d9c2268f4952614cbd3",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
        {
          name: "ZHMU018",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_8",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:23.621Z",
        mts: "2022-09-13T05:44:16.356Z",
        rev: 4,
      },
      id: "63189bff84758d002a1c1acf",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Sky Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 5,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:23.749Z",
        mts: "2022-09-07T14:15:16.233Z",
        rev: 1,
      },
      id: "63189bff84758d002a1c1ad2",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "North Grove Lookout",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:23.906Z",
        mts: "2022-09-07T14:15:16.384Z",
        rev: 1,
      },
      id: "63189bff84758d002a1c1ad5",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Sanguine Lagoon Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        timezone: "CEST",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          state: "active",
          code: "plc2",
          propertyMap: {},
          name: "place2",
          iotDeviceList: [],
          floor: "3rd",
          location: {
            pointCoordinates: {
              latitude: 3,
              longitude: 3,
            },
          },
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.061Z",
        mts: "2022-09-07T14:15:16.507Z",
        rev: 2,
      },
      id: "63189c0084758d002a1c1ad8",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Wolf Cavern Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.225Z",
        mts: "2022-09-07T14:15:16.637Z",
        rev: 1,
      },
      id: "63189c0084758d002a1c1adb",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Immortal Slope Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 10,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
        {
          name: "ZHMU018",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_8",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.402Z",
        mts: "2022-09-07T14:15:16.752Z",
        rev: 1,
      },
      id: "63189c0084758d002a1c1ade",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Bear Plains Spire1",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        timezone: "CEST",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.521Z",
        mts: "2022-09-08T07:05:54.882Z",
        rev: 2,
      },
      id: "63189c0084758d002a1c1ae1",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Bear Plains Spire",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 11,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
        {
          name: "ZHMU018",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_8",
          state: "active",
        },
        {
          name: "ZHMU019",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_9",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.689Z",
        mts: "2022-09-07T14:15:17.066Z",
        rev: 1,
      },
      id: "63189c0084758d002a1c1ae4",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "UNICORN PARKING CENTER",
        description: {
          en: "Parking place with sensors, near UNI center",
          cs: "Parkovací místo se senzory, v blízkosti UNI centra",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 3,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "c3e51e116755d640e1c26eb01bbf8710e8124f4357c9ff0aae31adc430d1d89c",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.840Z",
        mts: "2022-09-07T14:15:17.221Z",
        rev: 1,
      },
      id: "63189c0084758d002a1c1ae7",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "UNICORN parking center",
        spacesTotal: 101,
        availableFloors: ["0", "1", "2"],
        layout: "field",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Lucia",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "27bf60df851d0765dc86e4e71adfd79db16a7d66b6e7e9b76bbefa658ce30a92",
          },
          {
            binaryId: "a447e772f9a503ac24eeedcdcbcf4d15233a62831bf3f7bc1f50ec66b2f8be07",
          },
          {
            binaryId: "1e6adcd1bce1b868867ce676915391d92f5d386a5621b9021616f2f8927aaacc",
          },
          {
            binaryId: "e50e91a928bb3c23dbaa00fba64e2d001b1fb1c229f948b956407a8baeba110b",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:24.986Z",
        mts: "2022-09-07T13:26:24.986Z",
        rev: 0,
      },
      id: "63189c0084758d002a1c1aea",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Purity Spire",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 5,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:25.136Z",
        mts: "2022-09-07T14:15:18.813Z",
        rev: 1,
      },
      id: "63189c0184758d002a1c1aed",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Memorial Spire",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:25.293Z",
        mts: "2022-09-07T14:15:18.933Z",
        rev: 1,
      },
      id: "63189c0184758d002a1c1af0",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Memorial Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 7,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:25.412Z",
        mts: "2022-09-07T14:15:19.085Z",
        rev: 1,
      },
      id: "63189c0184758d002a1c1af3",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Innocence Obelisk",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:25.561Z",
        mts: "2022-09-13T05:56:48.447Z",
        rev: 3,
      },
      id: "63189c0184758d002a1c1af6",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Sky Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 10,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
        {
          name: "ZHMU018",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_8",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:25.714Z",
        mts: "2022-09-07T14:15:19.422Z",
        rev: 1,
      },
      id: "63189c0184758d002a1c1af9",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "North Grove Lookout",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:25.877Z",
        mts: "2022-09-07T14:15:19.577Z",
        rev: 1,
      },
      id: "63189c0184758d002a1c1afc",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Sanguine Lagoon Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 3,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:26.033Z",
        mts: "2022-09-07T14:15:19.730Z",
        rev: 1,
      },
      id: "63189c0284758d002a1c1aff",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Wolf Cavern Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:26.191Z",
        mts: "2022-09-07T14:15:19.893Z",
        rev: 1,
      },
      id: "63189c0284758d002a1c1b02",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Immortal Slope Tower",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 7,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:26.343Z",
        mts: "2022-09-07T14:15:20.054Z",
        rev: 1,
      },
      id: "63189c0284758d002a1c1b05",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Bear Plains Spire3",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        timezone: "CEST",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:26:26.493Z",
        mts: "2022-09-08T07:06:14.507Z",
        rev: 2,
      },
      id: "63189c0284758d002a1c1b08",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Funy",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:42.581Z",
        mts: "2022-09-07T14:15:20.359Z",
        rev: 1,
      },
      id: "63189e2e84758d002a1c1b22",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "M2solutions",
        description: {
          en: "Parking place with sensors, near UNI center",
          cs: "Parkovací místo se senzory, v blízkosti UNI centra",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "c3e51e116755d640e1c26eb01bbf8710e8124f4357c9ff0aae31adc430d1d89c",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:42.710Z",
        mts: "2022-09-07T14:15:20.479Z",
        rev: 1,
      },
      id: "63189e2e84758d002a1c1b25",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Sun Country Homes",
        spacesTotal: 101,
        availableFloors: ["0", "1", "2"],
        layout: "field",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Lucia",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "27bf60df851d0765dc86e4e71adfd79db16a7d66b6e7e9b76bbefa658ce30a92",
          },
          {
            binaryId: "a447e772f9a503ac24eeedcdcbcf4d15233a62831bf3f7bc1f50ec66b2f8be07",
          },
          {
            binaryId: "1e6adcd1bce1b868867ce676915391d92f5d386a5621b9021616f2f8927aaacc",
          },
          {
            binaryId: "e50e91a928bb3c23dbaa00fba64e2d001b1fb1c229f948b956407a8baeba110b",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:42.863Z",
        mts: "2022-09-07T13:35:42.863Z",
        rev: 0,
      },
      id: "63189e2e84758d002a1c1b28",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Olympia Waldorf School",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.009Z",
        mts: "2022-09-07T14:15:21.816Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b2b",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Progressive Architecture Engineering Llc",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 5,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.164Z",
        mts: "2022-09-07T14:15:21.973Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b2e",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Start Me Up",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 7,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.277Z",
        mts: "2022-09-07T14:15:22.129Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b31",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Diep Bui Five",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 3,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.430Z",
        mts: "2022-09-07T14:15:22.251Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b34",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Mary Kay Larson",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.589Z",
        mts: "2022-09-07T14:15:22.406Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b37",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Philip Sartori",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.740Z",
        mts: "2022-09-07T14:15:22.554Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b3a",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Wolf Source",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 11,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
        {
          name: "ZHMU018",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_8",
          state: "active",
        },
        {
          name: "ZHMU019",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_9",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:43.887Z",
        mts: "2022-09-07T14:15:22.670Z",
        rev: 1,
      },
      id: "63189e2f84758d002a1c1b3d",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Yanjun Wu",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 5,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.007Z",
        mts: "2022-09-07T14:15:22.790Z",
        rev: 1,
      },
      id: "63189e3084758d002a1c1b40",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Espinoza Flooring",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 6,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.164Z",
        mts: "2022-09-07T14:15:22.949Z",
        rev: 1,
      },
      id: "63189e3084758d002a1c1b43",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "The Newsouth Corporation Inc",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 7,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.313Z",
        mts: "2022-09-07T14:15:23.076Z",
        rev: 1,
      },
      id: "63189e3084758d002a1c1b46",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Frank T. Brown",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 9,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
        {
          name: "ZHMU017",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_7",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.441Z",
        mts: "2022-09-07T14:15:23.226Z",
        rev: 1,
      },
      id: "63189e3084758d002a1c1b49",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Alexander Building Corporation",
        description: {
          en: "Parking place with sensors, near UNI center",
          cs: "Parkovací místo se senzory, v blízkosti UNI centra",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "c3e51e116755d640e1c26eb01bbf8710e8124f4357c9ff0aae31adc430d1d89c",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.594Z",
        mts: "2022-09-07T14:15:23.346Z",
        rev: 1,
      },
      id: "63189e3084758d002a1c1b4c",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Fuzzy Donut Productions",
        spacesTotal: 101,
        availableFloors: ["0", "1", "2"],
        layout: "field",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Lucia",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
        imageList: [
          {
            binaryId: "27bf60df851d0765dc86e4e71adfd79db16a7d66b6e7e9b76bbefa658ce30a92",
          },
          {
            binaryId: "a447e772f9a503ac24eeedcdcbcf4d15233a62831bf3f7bc1f50ec66b2f8be07",
          },
          {
            binaryId: "1e6adcd1bce1b868867ce676915391d92f5d386a5621b9021616f2f8927aaacc",
          },
          {
            binaryId: "e50e91a928bb3c23dbaa00fba64e2d001b1fb1c229f948b956407a8baeba110b",
          },
        ],
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.745Z",
        mts: "2022-09-07T13:35:44.745Z",
        rev: 0,
      },
      id: "63189e3084758d002a1c1b4f",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Brandon Gohsman",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 5,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:44.860Z",
        mts: "2022-09-07T14:15:24.603Z",
        rev: 1,
      },
      id: "63189e3084758d002a1c1b52",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "District Council Of Carpenters",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 4,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:45.018Z",
        mts: "2022-09-07T14:15:24.753Z",
        rev: 1,
      },
      id: "63189e3184758d002a1c1b55",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "B & R Development Inc",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 8,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
        {
          name: "ZHMU014",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_4",
          state: "active",
        },
        {
          name: "ZHMU015",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_5",
          state: "active",
        },
        {
          name: "ZHMU016",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_6",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:45.181Z",
        mts: "2022-09-07T14:15:24.913Z",
        rev: 1,
      },
      id: "63189e3184758d002a1c1b58",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "The Laskey Company",
        description: {
          en: "Nejaky dsc",
          cs: "Something",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 5,
        availableFloors: ["1", "2", "3"],
        availableFloorsNum: 4,
        payment: {
          paymentTypes: "sms",
          smsTemplate: "BA %plate_number% C1",
        },
        timezone: "CEST",
      },
      location: {
        pointCoordinates: {
          latitude: 18.850713572754785,
          longitude: 48.590428086455404,
        },
        address: {
          address1: "Námestie Matice Slovenskej",
          address2: "Hotel Luna",
          city: "Žiar nad Hronom",
          country: "Slovakia",
          zipCode: "965 01",
          streetNumber: "2",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
        },
      },
      integration: {
        urlLink: {
          address: "https://foreign-domain.eu/ziar-nad-hronom/parkingPlaceId=5cf1317d6081590009789f31",
          description: {
            en: "Detailed link to Ziar nad Hronom - Hotel Luna",
            cs: "Podrobný odkaz na Ziar nad Hronom - Hotel Luna",
          },
        },
        externalIdentifier: "UNI123",
      },
      spaces: [
        {
          name: "ZHMU01",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01",
          state: "active",
        },
        {
          name: "ZHMU010",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_0",
          state: "active",
        },
        {
          name: "ZHMU011",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_1",
          state: "active",
        },
        {
          name: "ZHMU012",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_2",
          state: "active",
        },
        {
          name: "ZHMU013",
          availableChargingStations: [
            {
              code: "123443456",
              EVSEID: "CZ*PRE*E1S0001*1",
            },
          ],
          floor: "1st",
          iotDeviceList: [
            {
              deviceId: "32ed065ab6165971e9388a53",
            },
          ],
          location: {
            pointCoordinates: {
              latitude: 18.850713572754785,
              longitude: 48.590428086455404,
            },
          },
          propertyMap: {
            spaceForPersonsWithDisabilities: true,
            spaceWithCharingStation: true,
            spaceWithVacuumCleaner: true,
            spaceNearExit: true,
          },
          code: "ZHMU01_3",
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-07T13:35:45.332Z",
        mts: "2022-09-07T14:15:25.077Z",
        rev: 1,
      },
      id: "63189e3184758d002a1c1b5b",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "Parking Aupark",
        description: {
          en: "parking at aupark",
          cs: "parkovani pred auparkem",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 4,
        availableFloors: [],
        availableFloorsNum: 3,
        timezone: "gmt+2",
        payment: {
          paymentTypes: "card",
          smsTemplate: "this is your templaet",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 0,
          longitude: 0,
        },
        address: {
          address1: "Einsteinova 34",
          city: "Bratislava",
          country: "Slovakia",
          zipCode: "83101",
          streetNumber: "23",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        },
      },
      integration: {
        urlLink: {
          description: {},
        },
        externalIdentifier: "external id",
      },
      state: "active",
      sys: {
        cts: "2022-09-08T06:55:26.945Z",
        mts: "2022-09-08T06:55:26.945Z",
        rev: 0,
      },
      id: "631991de84758d002a1c2462",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "new space",
        description: {
          en: "sdf",
          cs: "dwf",
        },
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 25,
        availableFloors: [],
        availableFloorsNum: 23,
        timezone: "gmt+2",
        payment: {
          paymentTypes: "sms",
          smsTemplate: "template",
        },
      },
      location: {
        pointCoordinates: {
          latitude: 0,
          longitude: 0,
        },
        address: {
          address1: "Bratislava 32",
          city: "Bratislava",
          country: "Slovakia",
          zipCode: "831 01",
          streetNumber: "32",
        },
      },
      visualization: {
        boundingBox: {
          northEast: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
          southWest: {
            pointCoordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        },
      },
      integration: {
        urlLink: {
          description: {},
        },
        externalIdentifier: "extenrnalId",
      },
      spaces: [
        {
          code: "P01",
          propertyMap: {},
          name: "Park01",
          iotDeviceList: [
            {
              deviceId: "62f36f7c756f5d00361d5a89",
            },
          ],
          floor: "23",
          location: {
            pointCoordinates: {
              latitude: 23,
              longitude: 23,
            },
          },
          state: "active",
        },
      ],
      state: "active",
      sys: {
        cts: "2022-09-08T07:46:45.680Z",
        mts: "2022-09-08T07:46:45.680Z",
        rev: 0,
      },
      id: "63199de584758d002a1c24f7",
    },
    {
      awid: "8fe8c3c7af95f6142a4c3ea2e2b69774",
      basicInformation: {
        name: "new space",
        accessControlled: true,
        layout: "openSpace",
        spacesTotal: 1,
        availableFloorsNum: 0,
        timezone: "gmt+2",
        payment: {
          paymentTypes: ["sms", "card"],
        },
        availableFloors: [],
      },
      location: {
        pointCoordinates: {
          latitude: 0,
          longitude: 0,
        },
        address: {
          address1: "Tupolevova 15",
          address2: "updated",
          city: "Bratislava",
          country: "Slovakia",
          zipCode: "342 23",
          streetNumber: "34",
        },
      },
      state: "active",
      sys: {
        cts: "2022-09-13T12:23:16.903Z",
        mts: "2022-09-13T12:56:08.966Z",
        rev: 4,
      },
      visualization: {
        imageList: [
          {
            binaryId: "7e2f13095ed48ab2e5c6819b946e06a80a482ed0d56002dd393a39a7d7dabf0b",
          },
        ],
      },
      spaces: [
        {
          state: "active",
          propertyMap: {},
          name: "first space",
          iotDeviceList: [],
          floor: "3",
          location: {
            pointCoordinates: {
              latitude: 3,
              longitude: 3,
            },
          },
          id: "63207de817b8a83ead3094f1",
        },
        {
          state: "active",
          propertyMap: {},
          name: "first space",
          iotDeviceList: [],
          floor: "3",
          location: {
            pointCoordinates: {
              latitude: 3,
              longitude: 3,
            },
          },
          id: "63207ddc17b8a83ead3094f0",
        },
      ],
      id: "63207634270027002a5350ed",
    },
  ],
  pageInfo: {
    pageIndex: 0,
    pageSize: 1000,
    total: 53,
  },
  uuAppErrorMap: {},
};
