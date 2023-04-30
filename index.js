// backSpace = optnlBtn[0];
// tab = optnlBtn[1];
// delete = optnlBtn[2];
// capsLock = optnlBtn[3];
// enter = optnlBtn[4];
// shiftLeft = optnlBtn[5];
// cursorTop = optnlBtn[6];
// shiftRight = optnlBtn[7];
// ctrlLeft = optnlBtn[8];
// cursorLeft = optnlBtn[13];
// cursorBottom = optnlBtn[14];
// cursorRight = optnlBtn[15];

class BtnMarks {
  constructor() {
    this.engMain = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', ' '];
    this.engAbove = ['~', '!', '@', '#', '$', '%', ':', '?', '', '(', ')', '_', '+', '/'];
    this.ruMain = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', ' '];
    this.ruAbove = ['', '!', '"', '№', ';', '%', '^', '&', '', '(', ')', '_', '+', '/'];
    this.cntrlBtn = ['Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift', 'Ʌ', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '<', 'V', '>'];
    this.engMainOnlyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'Space'];
    this.ruMainOnlyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'];
    this.allValueCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    this.aboveOnlyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash'];
  }
}

const language = localStorage.getItem('language') || 'en';
const body = document.querySelector('body');
const sectionText = document.createElement('section');
const screen = document.createElement('textarea');
const sectionKeyboard = document.createElement('section');
const block = document.createElement('div');

sectionText.className = 'top';
body.appendChild(sectionText);
screen.className = 'input__text';
if (language === 'en') {
  screen.placeholder = 'Attention please, the keyboard was created in Windows.\nPress SHIFT + CTRL to change language.';
} else {
  screen.placeholder = 'Внимание, клавиатура создана в Windows.\nДля смены языка нажмите SHIFT + CTRL.';
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
  } else if (i === 28 || i === 57 || i === 58) {
    btn.style = 'width: 6.5%';
  } else if (i === 56 || i === 61) {
    btn.style = 'width: 9.5%;';
  } else if (i === 59) {
    btn.style = 'width: 37.5%;';
  }
}

// BUTTON MARKS
function addSign() {
  const item = new BtnMarks();

  const btnSet = Array.from(document.querySelectorAll('.keyboard__btn'));
  const mainBtn = btnSet.filter((key, i) => i < 13 || (i > 14 && i < 28)
|| (i > 29 && i < 41) || (i > 42 && i < 54) || i === 59);
  const upperBtn = btnSet.filter((key, i) => i < 13 || i === 27);
  const optnlBtn = btnSet.filter((key, i) => i === 13 || i === 14
|| i === 28 || i === 29 || i === 41 || i === 42 || i >= 54);

  mainBtn.forEach((key, i) => {
    const button = key;
    if (language === 'en') button.innerText = item.engMain[i];
    else button.innerText = item.ruMain[i];
  });
  upperBtn.forEach((key, i) => {
    // console.log(1);
    const button = key;
    const upperSpace = document.createElement('span');
    upperSpace.className = 'btn_up';
    button.appendChild(upperSpace);
    if (language === 'en') upperSpace.innerText = item.engAbove[i];
    else upperSpace.innerText = item.ruAbove[i];
  });
  optnlBtn.forEach((key, i) => {
    const button = key;
    button.innerText = item.cntrlBtn[i];
  });
}
addSign();

// USE MOUSE INPUT
function print(textarea, text) {
  const message = textarea;
  const endWith = message.value.substring(0, message.selectionStart)
  + text + message.value.substring(message.selectionEnd);
  message.value = endWith;
  message.focus();
  message.selectionEnd = message.selectionStart === message.selectionEnd
    ? message.selectionEnd + text.length : message.selectionEnd;
}

function deletePrint(textarea) {
  const message = textarea;
  const endWith = message.value.substring(0, message.selectionStart)
    + message.value.substring(message.selectionEnd + 1);
  message.value = endWith;
  message.focus();
  message.selectionEnd = message.selectionStart === message.selectionEnd
    ? message.selectionStart : message.selectionEnd;
}

function backspacePrint(textarea) {
  const message = textarea;
  const endWith = message.value.substring(0, message.selectionStart - 1)
    + message.value.substring(message.selectionEnd);
  message.value = endWith;
  message.focus();
  message.selectionEnd = message.selectionStart !== 0
    ? message.selectionEnd - 1 : message.selectionStart;
}

const item = new BtnMarks();
const btnSet = Array.from(document.querySelectorAll('.keyboard__btn'));
const mainBtn = btnSet.filter((key, i) => i < 13 || (i > 14 && i < 28)
|| (i > 29 && i < 41) || (i > 42 && i < 54) || i === 59);
const optnlBtn = btnSet.filter((key, i) => i === 13 || i === 14
|| i === 28 || i === 29 || i === 41 || i === 42 || i >= 54);

mainBtn.forEach((key, i) => key.addEventListener('click', () => {
  if (language === 'en') {
    if (optnlBtn[3].classList.contains('btn-active') && (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active'))) {
      print(screen, item.engMain[i]);
    } else if (item.aboveOnlyCode.indexOf(key.code) !== -1 && ((optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
      print(screen, item.engMain[i]);
    } else if ((optnlBtn[3].classList.contains('btn-active') || optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active'))) {
      print(screen, item.engMain[i].toLocaleUpperCase());
    } else (print(screen, item.engMain[i]));
  } else if (language === 'ru') {
    if (optnlBtn[3].classList.contains('btn-active') && (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active'))) {
      print(screen, item.ruMain[i]);
    } else if (item.extraCode.indexOf(key.code) !== -1 && ((optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
      print(screen, item.ruMain[i]);
    } else if ((optnlBtn[3].classList.contains('btn-active') || optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active'))) {
      print(screen, item.ruMain[i].toLocaleUpperCase());
    } else (print(screen, item.ruMain[i]));
  }
}));

optnlBtn.forEach((key) => key.addEventListener('click', (el) => {
  if (el.target === optnlBtn[2]) {
    deletePrint(screen);
  }
  if (el.target === optnlBtn[0]) {
    backspacePrint(screen);
  }
  if (el.target === optnlBtn[1]) {
    print(screen, '    ');
  }
  if (el.target === optnlBtn[13]) {
    print(screen, String.fromCharCode(8592));
  }
  if (el.target === optnlBtn[6]) {
    print(screen, String.fromCharCode(8593));
  }
  if (el.target === optnlBtn[15]) {
    print(screen, String.fromCharCode(8594));
  }
  if (el.target === optnlBtn[14]) {
    print(screen, String.fromCharCode(8595));
  }
  if (el.target === optnlBtn[4]) {
    print(screen, '\n');
  }
  if (el.target === optnlBtn[3] || el.target === optnlBtn[5] || el.target === optnlBtn[7]) {
    el.target.classList.toggle('btn-active');
  }
  if (el.target === optnlBtn[8] && optnlBtn[5].classList.contains('btn-active')) {
    if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
      addSign();
      optnlBtn[5].classList.remove('button-active');
    } else {
      localStorage.setItem('language', 'ru');
      addSign();
      optnlBtn[5].classList.remove('button-active');
    }
  }
}));
