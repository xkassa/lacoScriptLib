const mapyCzString = "48.1362356N, 17.1143983E 48.1362475N, 17.1145272E 48.1362500N, 17.1146397E";

function main() {
  let arr1 = mapyCzString.split("E ");
  let arr2 = arr1.map((item) => {
    const [lat, lng] = item.split("N, ");
    return {
      type: "chargingStation",
      position: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
    };
  });
  console.log(arr2);
}

main();
