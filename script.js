const container = document.querySelector('.container');
const border = 'solid 1px black';
const idColorPalette = '#color-palette';
const getDraw = [];

const checkLocalStorage = () => {
  const isNullLocalStorage = JSON.parse(localStorage.getItem('pixelBoard'));
  const getClassPixel = document.querySelectorAll('.pixel');
  for (let index2 = 0; index2 < getClassPixel.length; index2 += 1) {
    getClassPixel[index2].style.backgroundColor = isNullLocalStorage[index2];
  }
};

const saveDrawLocalStorage = () => {
  const getClassPixel = document.querySelectorAll('.pixel');
  getDraw.length = 0;
  for (let index = 0; index < getClassPixel.length; index += 1) {
    getDraw.push(getClassPixel[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(getDraw));
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const genColorRadom = () => {
  const getColorClass = document.querySelectorAll('.color');
  for (let index = 1; index < getColorClass.length; index += 1) {
    getColorClass[index].style.backgroundColor = randomColor();
    if (getColorClass[index].style.backgroundColor === 'rgb(255, 255, 255)') {
      getColorClass[index].style.backgroundColor = randomColor();
    }
  }
};

const createTitle = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  title.style.fontFamily = '"VT323"';
  title.style.fontSize = '70px';
  container.appendChild(title);
};

const createPaletteColors = () => {
  const sectionCreate = document.createElement('section');
  sectionCreate.id = 'color-palette';
  container.appendChild(sectionCreate);
};

const createDivsPaletteColors = () => {
  const getIdPai = document.querySelector(`${idColorPalette}`);
  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.style.display = 'inline-block';
    createDiv.className = 'color';
    createDiv.style.width = '40px';
    createDiv.style.height = '40px';
    createDiv.style.border = `${border}`;
    getIdPai.appendChild(createDiv);
  }
};

const setClassDivBlack = () => {
  const getIdPai = document.querySelector(`${idColorPalette}`);
  getIdPai.firstChild.className = 'color selected';
  getIdPai.firstChild.style.display = 'inline-block';
  getIdPai.firstChild.style.backgroundColor = 'black';
  getIdPai.firstChild.style.width = '40px';
  getIdPai.firstChild.style.height = '40px';
  getIdPai.firstChild.style.border = `${border}`;
};

const createDivListBtns = () => {
  const createDiv = document.createElement('div');
  createDiv.id = 'list-btns';
  container.appendChild(createDiv);
};

const createBtnColorGeneration = () => {
  const getPai = document.querySelector('#list-btns');
  const createBtn = document.createElement('button');
  createBtn.id = 'button-random-color';
  createBtn.innerText = 'Cores aleatórias';
  getPai.appendChild(createBtn);
};

const clickBtn = () => {
  const getIdBtn = document.querySelector('#button-random-color');
  getIdBtn.addEventListener('click', () => {
    genColorRadom();
    const getClassColors = document.querySelectorAll('.color');
    const colorPalette = [];

    for (let index = 1; index < 4; index += 1) {
      const color = getClassColors[index].style.backgroundColor;
      colorPalette[0] = 'black';
      colorPalette.push(color);
    }
    localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
  });
};

const savePaletteLocalStorage = () => {
  const colors = document.querySelectorAll('.color');
  const savePalette = [];
  for (let index = 1; index < 4; index += 1) {
    const color = colors[index].style.backgroundColor;
    savePalette[0] = 'black';
    savePalette.push(color);
  }
  if (localStorage.length === 0) {
    localStorage.setItem('colorPalette', JSON.stringify(savePalette));
  } else {
    const saved = JSON.parse(localStorage.getItem('colorPalette'));
    for (let indice = 1; indice < 4; indice += 1) {
      colors[indice].style.backgroundColor = saved[indice];
    }
  }
};

const createTagTable = () => {
  const createTr = document.createElement('tr');
  createTr.id = 'pixel-board';
  container.appendChild(createTr);
};

const createPixelTable = () => {
  const getPai = document.querySelector('#pixel-board');

  for (let index = 0; index < 5; index += 1) {
    const createTr = document.createElement('tr');
    createTr.id = 'pixel-board';
    getPai.appendChild(createTr);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const createTd = document.createElement('td');
      createTd.className = 'pixel';
      createTd.style.backgroundColor = 'white';
      createTd.style.width = '40px';
      createTd.style.height = '40px';
      createTd.style.border = `${border}`;
      createTr.appendChild(createTd);
    }
  }
};

const getCorPalette = () => {
  const getIdCor = document.querySelector(`${idColorPalette}`);
  getIdCor.addEventListener('click', (event) => {
    const selectCorPalette = document.querySelector('.selected');
    selectCorPalette.className = 'color';
    const { target } = event;
    target.className = 'color selected';
  });
};

const getPixelBoard = () => {
  const getIdPixel = document.querySelector('#pixel-board');
  getIdPixel.addEventListener('click', (event) => {
    const selectCorPixel = document.querySelector('.selected');
    const { target } = event;
    target.style.backgroundColor = selectCorPixel.style.backgroundColor;
    saveDrawLocalStorage();
  });
};

const btnResetColors = () => {
  const getPai = document.querySelector('#list-btns');
  const createBtnReset = document.createElement('button');

  createBtnReset.id = 'clear-board';
  createBtnReset.innerText = 'Limpar';
  getPai.appendChild(createBtnReset);
};

const btnClickResetColors = () => {
  const getIdBtnReset = document.querySelector('#clear-board');

  getIdBtnReset.addEventListener('click', () => {
    const getPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < getPixel.length; index += 1) {
      getPixel[index].style.backgroundColor = 'white';
    }
  });
};

const createLocalStorageSaveDraw = () => {
  const isNullLocalStorage = JSON.parse(localStorage.getItem('pixelBoard'));
  const getClassPixel = document.querySelectorAll('.pixel');
  if (isNullLocalStorage === null) {
    for (let index = 0; index < getClassPixel.length; index += 1) {
      getDraw.push(getClassPixel[index].style.backgroundColor);
    }
    localStorage.setItem('pixelBoard', JSON.stringify(getDraw));
  } else {
    checkLocalStorage();
  }
};

window.onload = () => {
  createTitle();
  createPaletteColors();
  createDivsPaletteColors();
  setClassDivBlack();
  genColorRadom();
  createDivListBtns();
  createBtnColorGeneration();
  btnResetColors();
  btnClickResetColors();
  clickBtn();
  savePaletteLocalStorage();
  createTagTable();
  createPixelTable();
  getCorPalette();
  getPixelBoard();
  createLocalStorageSaveDraw();
};
