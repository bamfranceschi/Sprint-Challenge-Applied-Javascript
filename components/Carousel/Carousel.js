/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let img1 = new Image();
img1.src = "./assets/carousel/mountains.jpeg";
let img2 = new Image();
img2.src = "./assets/carousel/computer.jpeg";
let img3 = new Image();
img3.src = "./assets/carousel/trees.jpeg";
let img4 = new Image();
img4.src = "./assets/carousel/turntable.jpeg";

const currentIndex = [img1, img2, img3, img4];

//Carousel Component

function createCarousel(img1, img2, img3, img4) {
  const newCarousel = document.createElement("div");
  newCarousel.classList.add("carousel");

  const leftBtn = document.createElement("div");
  leftBtn.classList.add("left-button");
  leftBtn.addEventListener("click", () => {
    leftBtn.animate();
  });
  newCarousel.appendChild(leftBtn);

  const firstImg = document.createElement("img");
  firstImg.src = img1;
  newCarousel.appendChild(firstImg);

  const secondImg = document.createElement("img");
  secondImg.src = img2;
  newCarousel.appendChild(secondImg);

  const thirdImg = document.createElement("img");
  thirdImg.src = img3;
  newCarousel.appendChild(thirdImg);

  const fourthImg = document.createElement("img");
  fourthImg.src = img4;
  newCarousel.appendChild(fourthImg);

  const rightBtn = document.createElement("div");
  rightBtn.classList.add("right-button");
  newCarousel.appendChild(rightBtn);

  return newCarousel;
}
