//Object containing reference to each character

const characters = [
  { id: "C", src: "../images/krakoan-characters/C.jpg", alt: "C character" },
  { id: "A", src: "../images/krakoan-characters/A.jpg", alt: "A character" },
  { id: "S", src: "../images/krakoan-characters/S.jpg", alt: "S character" },
  { id: "E", src: "../images/krakoan-characters/E.jpg", alt: "E character" },
  { id: "Y", src: "../images/krakoan-characters/Y.jpg", alt: "Y character" },
];

function imageLoader() {
  return characters;
}

export default imageLoader;
