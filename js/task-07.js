const text = document.querySelector('#text');
const range = document.querySelector('#font-size-control');
range.setAttribute('value', range.min);
let rangeNum = range.min;

range.addEventListener('change', event => {
  rangeNum = event.currentTarget.value;
  text.style.fontSize = rangeNum + 'px';
});
