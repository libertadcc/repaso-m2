'use strict';

const colorAPI = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const container = document.querySelector('.container');

fetch(colorAPI)
  .then(res=>res.json())
  .then(data=>{
    for (const arrPalette of data.palettes){

      const title = document.createElement('h2');
      const origin = document.createElement('h3');
      const palette = document.createElement('li');
      palette.classList.add('palette');

      const titleCont = document.createTextNode(`Nombre: ${arrPalette.name}`);
      const originCont = document.createTextNode(`Origen: ${arrPalette.from}`);

      title.appendChild(titleCont);
      origin.appendChild(originCont);

      palette.appendChild(title);
      palette.appendChild(origin);

      const color_container = document.createElement('div');
      color_container.classList.add('color_container');

      for (const colors of arrPalette.colors) {
        const item = document.createElement('li');
        item.classList.add('color__item');
        item.setAttribute('style', `background-color: #${colors}`);
        color_container.appendChild(item);
      }
      palette.appendChild(color_container);
      container.appendChild(palette);
    }});

function search(){
  if (titleCont.includes('Serenity'){
    
  }
    console.log('sere');
  
  
}

btn.addEventListener('click', search);