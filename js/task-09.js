const buttonChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

const onBtnChangeColorClick = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = document.body.style.backgroundColor;
};

buttonChangeColor.addEventListener('click', onBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
