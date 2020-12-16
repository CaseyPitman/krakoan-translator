//Object containing reference to each character

const characters = {
  C: { id: "C", src: "../images/krakoan-characters/C.jpg", alt: "C character" },
  A: { id: "A", src: "../images/krakoan-characters/A.jpg", alt: "A character" },
};

function imageLoader() {
  return characters;
}

export default imageLoader;
