import { Viewer } from "@photo-sphere-viewer/core";
const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";
new Viewer({
    container: "viewer",
    panorama: "./DJI_0601.JPG",
    caption: "PBCUM | 360",
    defaultPitch: -2,
    defaultZoomLvl: 0,
    fisheye: true,
  });
  
