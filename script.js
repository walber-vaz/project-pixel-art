// eslint-disable-next-line max-lines-per-function
window.onload = () => {
  const container = document.querySelector('.container');
  const idPalette = document.querySelector('#color-palette');

  const creteTitle = () => {
    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'Paleta de Cores';
    title.style.fontFamily = '"VT323", monospace';
    title.style.fontSize = '50px';
    title.style.color = 'black';
    container.insertBefore(title, idPalette);
  };

  const radomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // eslint-disable-next-line max-lines-per-function
  const createDivs = () => {
    for (let index = 0; index < 4; index += 1) {
      const createDiv = document.createElement('div');
      createDiv.className = 'color';
      createDiv.style.width = '50px';
      createDiv.style.height = '50px';
      createDiv.style.display = 'inline-block';
      createDiv.style.margin = '10px';
      createDiv.style.marginTop = '20px';
      createDiv.style.border = 'solid 1px black';
      createDiv.style.cursor = 'pointer';
      if (index === 0) {
        // eslint-disable-next-line prefer-destructuring
        createDiv.style.backgroundColor = 'black';
        createDiv.className = 'color selected';
      }
      idPalette.appendChild(createDiv);
    }
  };

  const saveColor = () => {
    const getColors = document.querySelectorAll('.color');
    // eslint-disable-next-line sonarjs/no-unused-collection
    const saveStorage = ['black'];
    for (let index = 1; index < 4; index += 1) {
      const color = getColors[index].style.backgroundColor;
      saveStorage.push(color);
    }
    if (localStorage.length === 0) {
      localStorage.setItem('colorPalette', JSON.stringify(saveStorage));
    }
    const colorSavers = JSON.parse(localStorage.getItem('colorPalette'));
    for (let index = 1; index < 4; index += 1) {
      getColors[index].style.backgroundColor = colorSavers[index];
    }
  };

  const styleDiv = () => {
    const isWhiteColorDiv = document.querySelectorAll('.color');
    for (let index = 1; index < 4; index += 1) {
      isWhiteColorDiv[index].style.backgroundColor = radomColor();
      if (isWhiteColorDiv[index] === 'rgb 255, 255, 255') {
        isWhiteColorDiv[index].style.backgroundColor = radomColor();
      }
    }
  };

  // eslint-disable-next-line max-lines-per-function
  const createBtnRandomColor = () => {
    const btn = document.createElement('button');
    btn.id = 'button-random-color';
    btn.innerText = 'Cores aleatórias';
    btn.style.display = 'block';
    btn.style.textAlign = 'center';
    btn.style.margin = 'auto';
    btn.style.fontFamily = '"VT323"';
    btn.style.fontSize = '24px';
    btn.style.padding = '5px';
    btn.style.outline = 'none';
    btn.style.marginTop = '20px';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => {
      styleDiv();
      const getColors = document.querySelectorAll('.color');
      const colorsDb = ['black'];
      for (let index = 1; index < 4; index += 1) {
        const getColor = getColors[index].style.backgroundColor;
        colorsDb.push(getColor);
      }
      localStorage.setItem('colorPalette', JSON.stringify(colorsDb));
    });
    idPalette.appendChild(btn);
  };

  // eslint-disable-next-line max-lines-per-function
  const createTablePixel = () => {
    const getIdTable = document.querySelector('#pixel-board');
    getIdTable.style.display = 'flex';
    getIdTable.style.flexDirection = 'column';
    getIdTable.style.justifyContent = 'center';
    getIdTable.style.alignItems = 'center';
    getIdTable.style.margin = '20px auto';
    for (let index = 0; index < 5; index += 1) {
      const createTable = document.createElement('tr');
      getIdTable.appendChild(createTable);
      for (let index2 = 0; index2 < 5; index2 += 1) {
        const createTableTD = document.createElement('td');
        createTableTD.className = 'pixel';
        createTableTD.style.backgroundColor = 'white';
        createTableTD.style.width = '40px';
        createTableTD.style.height = '40px';
        createTableTD.style.border = 'solid 1px black';
        createTableTD.style.cursor = 'pointer';
        createTable.appendChild(createTableTD);
      }
    }
  };

  creteTitle();
  createDivs();
  createBtnRandomColor();
  createTablePixel();
  styleDiv();
  saveColor();

  idPalette.addEventListener('click', (event) => {
    const classSelected = document.querySelector('.selected');
    classSelected.className = 'color';
    // eslint-disable-next-line no-param-reassign
    event.target.className = 'color selected';
  });

  const getIdPixel = document.querySelector('#pixel-board');
  getIdPixel.addEventListener('click', (event) => {
    const classSelected = document.querySelector('.selected');
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = classSelected.style.backgroundColor;
  });
};
