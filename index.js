class BtnMarks {
  constructor() {
    this.engMain = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', ' '];
    this.engAbove = ['~', '!', '@', '#', '$', '%', ':', '?', '', '(', ')', '_', '+', '/'];
    this.ruMain = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', ' '];
    this.ruAbove = ['', '!', '"', '№', ';', '%', '^', '&', '', '(', ')', '_', '+', '/'];
    this.cntrlBtn = ['Backspace', 'Tab', 'DEL', 'Caps Lock', 'ENTER', 'Shift', 'Ʌ', 'Shift', 'Ctrl', 'Win', 'Alt', 'Alt', 'Ctrl', '<', 'V', '>'];
    this.engMainOnlyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'Space'];
    this.ruMainOnlyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'];
    this.allValueCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Period', 'Comma', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
    this.aboveOnlyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backslash'];
  }
}

const item = new BtnMarks();

const body = document.querySelector('body');
const sectionText = document.createElement('section');
const screen = document.createElement('textarea');
const sectionKeyboard = document.createElement('section');
const block = document.createElement('div');

sectionText.className = 'top';
body.appendChild(sectionText);
screen.className = 'input__text';
sectionText.appendChild(screen);

sectionKeyboard.className = 'bottom';
body.appendChild(sectionKeyboard);
block.className = 'keyboard';
sectionKeyboard.appendChild(block);

block.className = 'block';

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

const btnSet = Array.from(document.querySelectorAll('.keyboard__btn'));
const mainBtn = btnSet.filter((key, i) => i < 13 || (i > 14 && i < 28)
|| (i > 29 && i < 41) || (i > 42 && i < 54) || i === 59);
const upperBtn = btnSet.filter((key, i) => i < 13 || i === 27);
const optnlBtn = btnSet.filter((key, i) => i === 13 || i === 14
|| i === 28 || i === 29 || i === 41 || i === 42 || (i >= 54 && i !== 59));

// BUTTON MARKS
function addSign() {
  const language = localStorage.getItem('language') || 'en';
  if (language === 'en') {
    screen.placeholder = 'Attention please, the keyboard was created in Windows.\nPress SHIFT + CTRL to change language.';
  } else {
    screen.placeholder = 'Внимание, клавиатура создана в Windows.\nДля смены языка нажмите SHIFT + CTRL.';
  }

  screen.focus();
  mainBtn.forEach((key, i) => {
    const button = key;
    if (language === 'en') button.innerText = item.engMain[i];
    else button.innerText = item.ruMain[i];
  });
  upperBtn.forEach((key, i) => {
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
  const textStart = message.selectionStart;
  const textEnd = message.selectionEnd;
  const endWith = message.value.substring(0, textStart) + text + message.value.substring(textEnd);
  message.value = endWith;
  message.focus();
  if (textStart === textEnd) message.selectionEnd = textEnd + text.length;
  else message.selectionEnd = textEnd;
}
function backspacePrint(textarea) {
  const message = textarea;
  const textStart = message.selectionStart;
  const textEnd = message.selectionEnd;
  const endWith = message.value.substring(0, textStart - 1) + message.value.substring(textEnd);
  message.value = endWith;
  message.focus();
  if (textStart !== 0) message.selectionEnd = textEnd - 1;
  else message.selectionEnd = textStart;
}

function deletePrint(textarea) {
  const message = textarea;
  const textStart = message.selectionStart;
  const textEnd = message.selectionEnd;
  const endWith = message.value.substring(0, textStart) + message.value.substring(textEnd + 1);
  message.value = endWith;
  message.focus();
  if (textStart === textEnd) message.selectionEnd = textStart;
  else message.selectionEnd = textEnd;
}

optnlBtn.forEach((el) => el.addEventListener('click', (key) => {
  if (key.target === optnlBtn[2]) {
    deletePrint(screen);
  }
  if (key.target === optnlBtn[0]) {
    backspacePrint(screen);
  }
  if (key.target === optnlBtn[1]) {
    print(screen, '    ');
  }
  if (key.target === optnlBtn[13]) {
    print(screen, String.fromCharCode(8592));
  }
  if (key.target === optnlBtn[6]) {
    print(screen, String.fromCharCode(8593));
  }
  if (key.target === optnlBtn[15]) {
    print(screen, String.fromCharCode(8594));
  }
  if (key.target === optnlBtn[14]) {
    print(screen, String.fromCharCode(8595));
  }
  if (key.target === optnlBtn[4]) {
    print(screen, '\n');
  }
  if (key.target === optnlBtn[3]
    || key.target === optnlBtn[5] || key.target === optnlBtn[7]) {
    key.target.classList.toggle('btn-active');
  }
  if (key.target === optnlBtn[8] && optnlBtn[5].classList.contains('btn-active')) {
    if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
      addSign();
      optnlBtn[5].classList.remove('btn-active');
    } else {
      localStorage.setItem('language', 'ru');
      addSign();
      optnlBtn[5].classList.remove('btn-active');
    }
  }
}));

mainBtn.forEach((el, i) => el.addEventListener('click', () => {
  const language = localStorage.getItem('language') || 'en';

  if (language === 'en') {
    if (optnlBtn[3].classList.contains('btn-active') && ((optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
      if (upperBtn.indexOf(el) === -1) {
        print(screen, item.engMain[i].toLowerCase());
      }
    } else if (optnlBtn[3].classList.contains('btn-active')) {
      print(screen, item.engMain[i].toLocaleUpperCase());
    } else if (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')) {
      if (upperBtn.indexOf(el) === -1) {
        print(screen, item.engMain[i].toLocaleUpperCase());
      }
    } else (print(screen, item.engMain[i].toLocaleLowerCase()));
  } else if (language === 'ru') {
    if (optnlBtn[3].classList.contains('btn-active') && ((optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
      if (upperBtn.indexOf(el) === -1) {
        print(screen, item.ruMain[i].toLowerCase());
      }
    } else if (optnlBtn[3].classList.contains('btn-active')) {
      print(screen, item.ruMain[i].toLocaleUpperCase());
    } else if (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')) {
      if (upperBtn.indexOf(el) === -1) {
        print(screen, item.ruMain[i].toLocaleUpperCase());
      }
    } else (print(screen, item.ruMain[i].toLocaleLowerCase()));
  }
}));

upperBtn.forEach((el, i) => el.addEventListener('click', () => {
  const language = localStorage.getItem('language') || 'en';
  if (language === 'en') {
    if (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')) {
      print(screen, item.engAbove[i]);
    }
  } else if (language === 'ru') {
    if (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')) {
      print(screen, item.ruAbove[i]);
    }
  }
}));
// PHYSICAL KEYBOARD INPUT
document.addEventListener('keydown', (key) => {
  const language = localStorage.getItem('language') || 'en';

  screen.focus();
  if (item.engMainOnlyCode.indexOf(key.code) !== -1) {
    key.preventDefault();
    if (language === 'en') {
      if ((optnlBtn[3].classList.contains('btn-active') && (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
        print(screen, item.engMain[item.engMainOnlyCode.indexOf(key.code)].toLowerCase());
      } else if (item.aboveOnlyCode.indexOf(key.code) !== -1 && ((optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
        print(screen, item.engAbove[item.aboveOnlyCode.indexOf(key.code)]);
      } else if (item.aboveOnlyCode.indexOf(key.code) === -1 && (optnlBtn[3].classList.contains('btn-active') || (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
        print(screen, item.engMain[item.engMainOnlyCode.indexOf(key.code)]);
      } else (print(screen, item.engMain[item.engMainOnlyCode.indexOf(key.code)].toLowerCase()));
    } else if (language === 'ru') {
      if ((optnlBtn[3].classList.contains('btn-active') && (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
        print(screen, item.ruMain[item.ruMainOnlyCode.indexOf(key.code)].toLowerCase());
      } else if (item.aboveOnlyCode.indexOf(key.code) !== -1 && ((optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
        print(screen, item.ruAbove[item.aboveOnlyCode.indexOf(key.code)]);
      } else if (item.aboveOnlyCode.indexOf(key.code) === -1 && (optnlBtn[3].classList.contains('btn-active') || (optnlBtn[5].classList.contains('btn-active') || optnlBtn[7].classList.contains('btn-active')))) {
        print(screen, item.ruMain[item.ruMainOnlyCode.indexOf(key.code)]);
      } else (print(screen, item.ruMain[item.ruMainOnlyCode.indexOf(key.code)].toLowerCase()));
    }
  } else if (key.code === 'Tab') {
    key.preventDefault();
    print(screen, '    ');
  } else if (key.code === 'AltLeft' || key.code === 'AltRight') {
    key.preventDefault();
  }
  item.allValueCode.forEach((code, i) => {
    if (code === key.code && code !== 'CapsLock') {
      if (key.code === 'Period' && language === 'ru') {
        btnSet[i + 1].classList.add('btn-active');
      } else if (key.code === 'Comma' && language === 'ru') {
        btnSet[i - 1].classList.add('btn-active');
      } else {
        btnSet[i].classList.add('btn-active');
      }
    }
    if (code === key.code && code === 'CapsLock') {
      btnSet[i].classList.toggle('btn-active');
    }

    if (btnSet[42].classList.contains('btn-active') && key.code === 'ControlLeft') {
      if (localStorage.getItem('language') === 'ru') {
        localStorage.setItem('language', 'en');
        addSign();
      } else {
        localStorage.setItem('language', 'ru');
        addSign();
      }
    }
  });
});

document.addEventListener('keyup', (key) => {
  const language = localStorage.getItem('language') || 'en';

  item.allValueCode.forEach((val, i) => {
    if (val === key.code && val !== 'CapsLock') {
      if (key.code === 'Period' && language === 'ru') {
        btnSet[i + 1].classList.remove('btn-active');
      } else if (key.code === 'Comma' && language === 'ru') {
        btnSet[i - 1].classList.remove('btn-active');
      } else {
        btnSet[i].classList.remove('btn-active');
      }
    }
  });
});
