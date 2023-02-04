let counterValue = 0;

const valueEl = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const onDecrementButtonClick = el => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementButtonClick = el => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);
