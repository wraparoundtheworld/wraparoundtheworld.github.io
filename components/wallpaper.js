import { createGlobalStyle } from "@xstyled/styled-components";

const WallpaperStyle = createGlobalStyle`
  body {
    /* background-color: #d9d2ca; */
    background-color: #7d818c;
    /* background-color: #5c6681; */
    /* background-color: #000; */
    /* background: url("/image/sky.png") no-repeat center center fixed; */
    background-size: cover;
  }
  `;

export default function Wallpaper() {
  return <WallpaperStyle />;
}
