// class BtnMarks {
//   constructor() {
//     this.engMain = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/'];
//     this.engAdd = ['~', '!', '@', '#', '$', '%', ':', '?', '', '(', ')', '_', '+', '/'];
//     this.ruMain = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/'];
//     this.ruAdd = ['', '!', '"', '№', ';', '%', '^', '&', '', '(', ')', '_', '+', '/'];
//   }
// }

const language = localStorage.getItem('language') || 'en';
const body = document.querySelector('body');
// const wrapper = document.createElement("div");
const sectionText = document.createElement('section');
const screen = document.createElement('textarea');
const sectionKeyboard = document.createElement('section');
const block = document.createElement('div');

sectionText.className = 'top';
body.appendChild(sectionText);
screen.className = 'input__text';
if (language === 'en') {
  screen.placeholder = 'Press SHIFT + CTRL to change language';
} else {
  screen.placeholder = 'Для смены языка нажмите SHIFT + CTRL';
}
sectionText.appendChild(screen);

sectionKeyboard.className = 'bottom';
body.appendChild(sectionKeyboard);
block.className = 'keyboard';
sectionKeyboard.appendChild(block);

block.className = 'block';
// sectionText.appendChild(block);

// create buttons
const createBtn = (value) => {
  const btn = document.createElement('button');
  btn.className = 'keyboard__btn';
  btn.innerText = value || null;
  return btn;
};

for (let i = 0; i < 65; i += 1) {
  const btn = createBtn();
  block.appendChild(btn);
  if (
    i === 0 || i === 13
    || i === 14
    || i === 28
    || i === 29
    || i === 41
    || i === 42
    || (i >= 54 && i <= 58)
    || (i >= 60 && i <= 64)
  ) {
    btn.className = 'keyboard__btn control_keys';
  }
  if (i === 13 || i === 29 || i === 41 || i === 42) {
    btn.style = 'width: 13%';
  } else if (i === 14) {
    btn.style = 'width: 8%';
  } else if (i === 28 || i === 55 || i === 57 || i === 58) {
    btn.style = 'width: 6.5%';
  } else if (i === 56 || i === 61) {
    btn.style = 'width: 9.5%;';
  } else if (i === 59) {
    btn.style = 'width: 37.5%;';
  }
}
