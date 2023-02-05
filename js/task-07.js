const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.setAttribute('value', inputEl.getAttribute('min'));

const onChangeRange = event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputEl.addEventListener('input', onChangeRange);
