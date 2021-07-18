const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const handleTextChange = () =>
  (textRef.style.fontSize = `${fontSizeControlRef.value}px`);

// console.log(`${fontSizeControlRef.value}px`);
// console.dir(textRef);

fontSizeControlRef.addEventListener('input', handleTextChange);

const fontSize = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue('font-size')
    .match(/\d+/)[0],
);
const fontSize2 = window.getComputedStyle(document.body);
// .getPropertyValue('font-size');
// .match(/\d+/)[0];

console.dir(fontSize2);
