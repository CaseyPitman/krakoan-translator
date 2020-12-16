//Object containing reference to each character

const characters = {
  C: { id: "C", src: "../images/krakoan-characters/C.jpg", alt: "C character" },
  A: { id: "A", src: "../images/krakoan-characters/A.jpg", alt: "A character" },
  S: { id: "S", src: "../images/krakoan-characters/S.jpg", alt: "S character" },
  E: { id: "E", src: "../images/krakoan-characters/E.jpg", alt: "E character" },
  S: { id: "Y", src: "../images/krakoan-characters/Y.jpg", alt: "Y character" },
  
};

function imageLoader() {
  return characters;
}

export default imageLoader;
