function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Create boxes function

function createBox(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    document.querySelector('#boxes').appendChild(div);
  }
}

// Delete boxes function

function deleteBox() {
  let boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const controls = document.querySelector('#controls');
const createData = controls.querySelector('[data-create]');
const destroyData = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

createData.addEventListener('click', () => {
  createBox(input.value);
});

destroyData.addEventListener('click', () => {
  deleteBox();
});
