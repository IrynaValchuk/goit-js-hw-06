const formLogin = document.querySelector('.login-form');

const onEnterDataForm = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {
    email: email.value,
    password: password.value,
  };

  if (email.value === '' || password.value === '') {
    alert('Please make sure all fields are filled ');
  }
  console.log(formData);
  formLogin.reset();
};

formLogin.addEventListener('submit', onEnterDataForm);