const container = document.querySelector('.container');

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
  const getIdPai = document.querySelector('#color-palette');
  for (let index = 0; index < 4; index += 1) {
    const createDiv = document.createElement('div');
    if (index === 0) {
      createDiv.className = 'color';
      createDiv.style.display = 'inline-block';
      createDiv.style.backgroundColor = 'black';
      createDiv.style.width = '40px';
      createDiv.style.height = '40px';
      createDiv.style.border = 'solid 1px black';
    }
    createDiv.style.display = 'inline-block';
    createDiv.className = 'color';
    createDiv.style.width = '40px';
    createDiv.style.height = '40px';
    createDiv.style.border = 'solid 1px black';
    getIdPai.appendChild(createDiv);
  }
};

window.onload = () => {
  createTitle();
  createPaletteColors();
  createDivsPaletteColors();
  genColorRadom();
};
