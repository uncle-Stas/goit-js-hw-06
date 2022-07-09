let counterValue = 0;
const showValue = document.querySelector('#value');
const buttonDecriment = document.querySelector('[data-action="decrement"]');
const buttonIncriment = document.querySelector('[data-action="increment"]');

buttonDecriment.addEventListener('click', () => {
  counterValue -= 1;
  showValue.textContent = counterValue;
});

buttonIncriment.addEventListener('click', () => {
  counterValue += 1;
  showValue.textContent = counterValue;
});
