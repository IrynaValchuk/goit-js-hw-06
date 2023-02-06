const buttonChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

const onBtnChangeColorClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
};

buttonChangeColor.addEventListener('click', onBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
