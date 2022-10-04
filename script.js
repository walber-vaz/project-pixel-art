const container = document.querySelector('.container');

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';

container.appendChild(title);

const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';

container.appendChild(colorPalette);

const divBlack = document.createElement('div');
divBlack.style.width = '50px';
divBlack.style.height = '50px';
divBlack.className = 'color';
divBlack.style.display = 'inline-block';
divBlack.style.margin = '10px';
divBlack.style.border = 'solid 1px black';
divBlack.style.backgroundColor = 'black';
colorPalette.appendChild(divBlack);

/* function radomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
} */

function creteElement() {
  const colors = ['red', 'green', 'yellow'];
  for (let index = 0; index < 3; index += 1) {
    const createDivs = document.createElement('div');
    createDivs.style.width = '50px';
    createDivs.style.height = '50px';
    createDivs.className = 'color';
    createDivs.style.display = 'inline-block';
    createDivs.style.margin = '10px';
    createDivs.style.border = 'solid 1px black';
    createDivs.style.backgroundColor = colors[index];
    /* if (createDivs.style.backgroundColor === 'rgb 255, 255, 255') {
      createDivs.style.backgroundColor = radomColor();
    } */
    colorPalette.appendChild(createDivs);
  }
}

creteElement();
