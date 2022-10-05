// eslint-disable-next-line max-lines-per-function
window.onload = () => {
  const container = document.querySelector('.container');

  const creteTitle = () => {
    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'Paleta de Cores';
    title.style.fontFamily = '"VT323", monospace';
    title.style.fontSize = '50px';
    title.style.color = 'black';
    container.appendChild(title);
  };

  const radomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // eslint-disable-next-line max-lines-per-function
  const createDivs = () => {
    const colors = ['yellow', 'red', 'green', 'blue'];
    for (let index = 0; index < 4; index += 1) {
      const colorPalette = document.createElement('div');
      colorPalette.id = 'color-palette';
      colorPalette.className = 'color';
      colorPalette.style.backgroundColor = colors[index];
      colorPalette.style.width = '50px';
      colorPalette.style.height = '50px';
      colorPalette.style.display = 'inline-block';
      colorPalette.style.margin = '10px';
      colorPalette.style.marginTop = '20px';
      colorPalette.style.border = 'solid 1px black';
      if (index === 0) {
        colorPalette.style.backgroundColor = 'black';
      }
      container.appendChild(colorPalette);
      console.log(colorPalette);
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

  const createBtnRandomColor = () => {
    const btn = document.createElement('button');
    btn.id = 'button-random-color';
    btn.innerText = 'Cores aleatórias';
    btn.style.display = 'block';
    btn.style.textAlign = 'center';
    btn.style.margin = 'auto';
    btn.style.fontFamily = 'VT323';
    btn.style.fontSize = '24px';
    btn.style.padding = '5px';
    btn.style.outline = 'none';
    btn.style.marginTop = '20px';
    btn.addEventListener('click', styleDiv);
    container.appendChild(btn);
  };

  creteTitle();
  createDivs();
  createBtnRandomColor();
};
