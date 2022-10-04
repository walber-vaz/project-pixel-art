const getId = document.getElementById('color-palette');
// const container = document.querySelector('.container');

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';

getId.appendChild(title);

const divBlack = document.createElement('div');
divBlack.style.width = '50px';
divBlack.style.height = '50px';
divBlack.className = 'color';
divBlack.style.display = 'inline-block';
divBlack.style.margin = '10px';
divBlack.style.border = 'solid 1px black';
divBlack.style.backgroundColor = 'black';
getId.appendChild(divBlack);

function radomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function creteElement() {
  for (let index = 0; index < 3; index += 1) {
    const createDivs = document.createElement('div');
    createDivs.style.width = '50px';
    createDivs.style.height = '50px';
    createDivs.className = 'color';
    createDivs.style.display = 'inline-block';
    createDivs.style.margin = '10px';
    createDivs.style.border = 'solid 1px black';
    createDivs.style.backgroundColor = radomColor();
    if (createDivs.style.backgroundColor === 'rgb 255, 255, 255') {
      createDivs.style.backgroundColor = radomColor();
    }
    getId.appendChild(createDivs);
  }
}

creteElement();
