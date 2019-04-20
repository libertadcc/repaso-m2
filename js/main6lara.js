'use strict';

const list = document.querySelector('.container');

  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
    .then(res=>res.json())
    .then(data => {
      for (const arr_palettes of data.palettes){
      
        const title = document.createElement('h2');
        title.classList.add('title');
        const origin = document.createElement('h3');
        origin.classList.add('origin');
        const colors = document.createElement('div');
        colors.classList.add('color');
        const palette = document.createElement('li');
        palette.classList.add('palette');

        const title_cont = document.createTextNode(`Nombre de la nave: ${arr_palettes.name}`);
        const origin_cont = document.createTextNode(`Serie: ${arr_palettes.from}`);
        
        title.appendChild(title_cont);
        origin.appendChild(origin_cont);
        palette.appendChild(title);
        palette.appendChild(origin);
        
        const color_container = document.createElement('div');
        color_container.classList.add('color_container');

        for (const colors of arr_palettes.colors) {
          
          const item = document.createElement('div');
          item.classList.add('color__item');
          item.setAttribute('style', `background-color: #${colors}`);
          color_container.appendChild(item);
        }

        palette.appendChild(color_container);
        list.appendChild(palette);