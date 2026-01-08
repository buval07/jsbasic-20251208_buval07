function initCarousel() {
  // ваш код...

  /**
   * @param {offsetWidth}  - свойство для получения ширины элемента
   * @param {elem.style.transform = 'translateX(-300px)'}  - переключение на ширину слайда
   */
  //получаем элемент со слайдами
  let carouselInner = document.querySelector(".carousel__inner");

  //получаем размер слайда
  let slideWith = carouselInner.offsetWidth;

  //получаем элементы кнопок l/R
  let buttonRight = document.querySelector(".carousel__arrow_right");
  let buttonLeft = document.querySelector(".carousel__arrow_left");

  let i = 0;

  //получаем количество слайдов в элементе
  const slidesCount = carouselInner.children.length;

  //скрыть в начале левую кнопку
  buttonLeft.style.display = "none";

  //Правая кнопка
  buttonRight.addEventListener("click", () => {
    //увеличивать на клик если меньше 4
    if (i < slidesCount - 1) i++;

    //если количество сладов достигнуто, скрыть кнопку
    if (i === slidesCount - 1) {
      buttonRight.style.display = "none";
    } else {
      buttonRight.style.display = "";
    }

    //показывать левую кнопку при движении слайда в лево
    if (i === 0) {
      buttonLeft.style.display = "none";
    } else {
      buttonLeft.style.display = "";
    }

    carouselInner.style.transform = `translateX(-${slideWith * i}px)`;
  });

  //Левая кнопка
  buttonLeft.addEventListener("click", () => {
    if (i > 0) i--;

    if (i === 0) {
      buttonLeft.style.display = "none";
    } else {
      buttonLeft.style.display = "";
    }

    if (i === slidesCount - 1) {
      buttonRight.style.display = "none";
    } else {
      buttonRight.style.display = "";
    }

    carouselInner.style.transform = `translateX(-${slideWith * i}px)`;
  });
}
