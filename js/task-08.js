const logForm = document.querySelector('.login-form');

logForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please, fill in all fields!');

    return;
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.log('userInfo: ', userInfo);

  event.currentTarget.reset();
}
