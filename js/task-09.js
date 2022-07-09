function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorInfo = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorInfo.textContent = color;
});
