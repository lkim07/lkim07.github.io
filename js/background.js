// Random background image
const images = [
    "0.jpg",
    "1.jpg",

    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg", 
    "painting.webp",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `img/${randomImg}`;

document.body.appendChild(background);