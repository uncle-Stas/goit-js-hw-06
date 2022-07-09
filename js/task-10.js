function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputNum = document.querySelector('input');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amountBoxes = parseInt(inputNum.value);
  createBoxes(amountBoxes);
});

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.marginLeft = 'auto';
    box.style.marginRight = 'auto';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);

    width += 10;
    height += 10;
  }
}

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
