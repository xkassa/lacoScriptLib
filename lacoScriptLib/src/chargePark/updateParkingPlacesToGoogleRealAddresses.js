import { uafGet, getFullList, post, TokenService } from "../common/helpers.js";
import { chargeParkOperatorUrl } from "../common/urls.js";

const ENV = "swfDev";
const DEVELOPMENT = true;

//import * as fs from 'fs';
async function main() {
  const tokenService = new TokenService(DEVELOPMENT, 1);

  try {
    const token = await tokenService.getToken();
    console.log();
    let places = [];
    let googleSuggestions;
    let chargingStations;
    try {
      places.push(...(await getFullList(chargeParkOperatorUrl[ENV], "parkingPlace/list", {}, token)).itemList);
      chargingStations = await post("https://app.chargeup.cz", "chargingPlace/listWithinPolygon", {
        northEast: {
          lat: 47.5292494,
          lng: 21.6284931,
        },
        southWest: {
          lat: 51.3332025,
          lng: 12.3660525,
        },
      });
      chargingStations = chargingStations.chargingPlaces.itemList
        .map((item) => ({
          name: item.chargingStations?.[0]?.name,
          lat: item.chargingStations?.[0]?.location?.coordinates[1],
          lng: item.chargingStations?.[0]?.location?.coordinates[0],
        }))
        .filter((item) => !item.name.match("uu5string") && item.name.length > 25);

      let reducedChargingStations = [];
      for (let index = 0; index < places.length; index++) {
        reducedChargingStations.push(chargingStations.splice(Math.floor(Math.random() * chargingStations.length), 1)[0]);
      }
      chargingStations = reducedChargingStations;
      let promises = [];
      for (let chargingStation of chargingStations) {
        promises.push(
          uafGet("https://maps.googleapis.com", "maps/api/place/nearbysearch/json", {
            location: chargingStation.lng + "," + chargingStation.lat,
            key: "AIzaSyChTcMUCY9Zw3j00st0uKkqTz0RGlOpea8",
            type: "point_of_interest",
            radius: 5000,
          })
        );
      }
      googleSuggestions = await Promise.all(promises);
      const googleDetailIds = googleSuggestions.map(({ results }) => results[Math.floor(Math.random() * results.length)].place_id);
      promises = [];
      for (let place_id of googleDetailIds) {
        promises.push(
          uafGet("https://maps.googleapis.com", "maps/api/place/details/json", {
            place_id,
            key: "AIzaSyChTcMUCY9Zw3j00st0uKkqTz0RGlOpea8",
            fields: "geometry,name,formatted_address,address_component",
          })
        );
      }
      let googleDetails = await Promise.all(promises);
      googleDetails = googleDetails.map((item) => item.result);
      chargingStations = chargingStations.map((station, index) => ({ ...station, ...googleDetails[index] }));
    } catch (e) {
      console.log();
    }

    for (let index in places) {
      let parkingPlace = places[index];
      if (!parkingPlace) continue;
      let chargingStation = chargingStations[index];
      parkingPlace = { id: parkingPlace.id, basicInformation: parkingPlace.basicInformation };
      let res;
      try {
        parkingPlace.basicInformation.name = { en: chargingStation.name };
        let street, streetNumber, city, country, zipCode;
        for (let component of chargingStation.address_components) {
          if (["street_number", "premise"].some((type) => component.types.includes(type))) streetNumber = component.long_name;
          if (["route", "neighborhood"].some((type) => component.types.includes(type))) street = component.long_name;
          if (component.types.includes("locality")) city = component.long_name;
          if (component.types.includes("country")) country = component.long_name;
          if (component.types.includes("postal_code")) zipCode = component.long_name;
        }
        //const address = { address1: "" + (street ?? "") + (streetNumber ?? ""), city, country, zipCode };
        const addressArray = chargingStation.formatted_address.split(", ");
        const address = { address1: addressArray[0], city: addressArray[addressArray.length - 2].trim(), country: addressArray[addressArray.length - 1] };

        if (addressArray.length > 3) {
          address.address2 = addressArray[1];
        }
        parkingPlace.location = { pointCoordinates: { latitude: chargingStation.lat, longitude: chargingStation.lng }, address };
        parkingPlace.visualization = {
          boundingBox: {
            northEast: { pointCoordinates: { latitude: chargingStation.geometry.viewport.northeast.lat, longitude: chargingStation.geometry.viewport.northeast.lng } },
            southWest: { pointCoordinates: { latitude: chargingStation.geometry.viewport.southwest.lat, longitude: chargingStation.geometry.viewport.southwest.lng } },
          },
        };
        res = await post(chargeParkOperatorUrl[ENV], "parkingPlace/update", parkingPlace, token);
      } catch (e) {
        console.log(e.code);
      }
      console.log(`updated place ${parkingPlace.basicInformation.name}`);
    }
    console.log();
  } catch (e) {
    console.log(e);
  }
  console.log();
}
main();
