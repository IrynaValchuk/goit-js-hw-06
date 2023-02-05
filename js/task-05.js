const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const onEnterDataInput = event => {
  outputName.textContent = event.currentTarget.value.trim();
  if (!outputName.textContent) {
    outputName.textContent = 'Anonymous';
  }
};

inputName.addEventListener('input', onEnterDataInput);
