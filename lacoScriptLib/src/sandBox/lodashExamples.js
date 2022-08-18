import _ from "lodash";
function main() {
  const deepPick = (paths, obj) => _.fromPairs(paths.map((p) => [_.last(p.split(".")), _.get(obj, p)]));

  const images = [
    {
      sizes: {
        thumbnail: { height: 300, width: 300, url: "http://example.com/wp-content/uploads/2017/04/web-300x300.jpg", orientation: "landscape" },
        medium: { height: 267, width: 400, url: "http://example.com/wp-content/uploads/2017/04/web-400x267.jpg", orientation: "landscape" },
        large: { height: 441, width: 660, url: "http://example.com/wp-content/uploads/2017/04/web-1024x684.jpg", orientation: "landscape" },
        full: { url: "http://example.com/wp-content/uploads/2017/04/web.jpg", height: 1200, width: 1796, orientation: "landscape" },
      },
      mime: "image/jpeg",
      type: "image",
      subtype: "jpeg",
      id: 3589,
      url: "http://example.com/wp-content/uploads/2017/04/web.jpg",
      alt: "",
      link: "http://example.com/web/",
      caption: "",
    },
  ];

  const result = images.map((image) => deepPick(["alt", "caption", "id", "sizes.thumbnail.url"], image));

  console.log(result);
}

main();
