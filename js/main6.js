'use strict';


const colorAPI = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

fetch(colorAPI)
  .then(res=>res.json())
  .then(data=>{
    for (const arrPalette of data.palettes){

      const title = document.createElement('h2');
      const origin = document.createElement('h3');
      const colors = document.createElement('div');
      const palette = document.createElement('li');


      const titleCont = document.createTextNode(arrPalette.name);
      const originCont = document.createTextNode(arrPalette.from);

      title.appendChild(titleCont);
      origin.appendChild(originCont);
      palette.appendChild(title);
      palette.appendChild(origin);

      const color_container = document.createElement('div');
      color_container.classList.add('color_container');

      for (const colors of arrPalette.colors) {
        
        const item = document.createElement('div');
        item.classList.add('color__item');
        item.setAttribute('style', `background-color: #${colors}`);
        color_container.appendChild(item);
      }
      const container = document.querySelector('.list');
      
      palette.appendChild(color_container);
      container.appendChild(palette);
    }
  });