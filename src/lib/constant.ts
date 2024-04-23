//importing all the images in the public folder via this function

import { link } from "fs";
import { title } from "process";

export const clients = [...new Array(10)].map((clients, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: " Moonbeam",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: " Cursor",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: " Rogue",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: " Editorially",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: " Editrix AI",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: " Pixel Perfect",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: "Algochurn",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://moonbeam.network/",
    thumbnail: "/p1.png",
  },
];
