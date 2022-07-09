const inputText = document.querySelector('#validation-input');
const textLength = parseInt(inputText.dataset.length);

inputText.addEventListener('blur', event => {
  const text = event.currentTarget.value;

  if (text.length !== textLength) {
    inputText.classList.add('invalid');
    inputText.classList.remove('valid');
  } else {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  }
});
