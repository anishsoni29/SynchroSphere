//importing all the images in the public folder via this function

export const clients = [...new Array(10)].map((clients, index) => ({
  href: `/${index + 1}.png`,
}));
