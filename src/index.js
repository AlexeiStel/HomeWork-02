import rainy from "./assets/rainy-bg.jpg";
import summer from "./assets/summer-bg.jpg";
import winter from "./assets/winter-bg.jpg";
import rain from "./assets/icons/cloud-rain.svg";
import snow from "./assets/icons/cloud-snow.svg";
import sun from "./assets/icons/sun.svg";
import pause from "./assets/icons/pause.svg";
import audio_rain from "./assets/sounds/rain.mp3";
import audio_sun from "./assets/sounds/summer.mp3";
import audio_snow from "./assets/sounds/winter.mp3";
import createVolume from "./components/volume";
import createDiv from "./components/div_tag";
import renderDivItem from "./components/div_item";

import "./index.css";

createDiv("content", "", document.body);
document.body.style.backgroundImage = `url(${summer})`;
createDiv("title", "Weather sounds", document.querySelector(".content"));
createDiv("content-image", "", document.querySelector(".content"));

createVolume();
renderDivItem("summer", summer, sun, audio_sun, ".summer", pause);
renderDivItem("rainy", rainy, rain, audio_rain,".rainy", pause);
renderDivItem("winter", winter, snow, audio_snow,".winter", pause);
