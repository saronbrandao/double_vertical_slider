//VARIABLES
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
const seconds = 5;

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

//FUNCTIONS
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  console.log(sliderHeight);

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }
  if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

const sliderInit = () => {
  setInterval(() => {
    changeSlide('up');
  }, seconds * 1000);
};

//EVENT LISTENERS
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

//FUNCTION CALLS
sliderInit();
