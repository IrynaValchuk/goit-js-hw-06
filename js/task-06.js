const inputName = document.querySelector('#validation-input');
const correctDataLength = Number(inputName.getAttribute('data-length'));

const onInputBlur = event => {
  const inputDataLength = event.currentTarget.value.trim().length;

  inputName.classList.remove('valid', 'invalid');
  const validationInput =
    inputDataLength === correctDataLength
      ? inputName.classList.add('valid')
      : inputName.classList.add('invalid');
};

inputName.addEventListener('blur', onInputBlur);
