const inputNumber = document.querySelector('input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

const createBoxes = amount => {
  const boxes = [];
  amount = Number(inputNumber.value);
  boxes.length = amount;
  boxes.fill('').map((value, index) => {
    value = document.createElement('div');
    value.style.width = 30 + index * 10 + 'px';
    value.style.height = 30 + index * 10 + 'px';
    value.style.backgroundColor = getRandomHexColor();
    boxes.push(value);
  });
  return containerBoxes.append(...boxes);
};

const destroyBoxes = () => {
  containerBoxes.innerHTML = '';
  inputNumber.value = '';
};

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
