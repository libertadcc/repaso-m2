'use strict';

const container = document.querySelector('.container');

const colorAPI = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';

fetch(colorAPI)
  .then(res=>res.json())
  .then(data=>{
    for (const arrPalette of data.palettes){
      //Creamos los elementos
      const title = document.createElement('h2');
      const origin = document.createElement('h3');
      const palette = document.createElement('li');

      //Contenido
      const titleCont = document.createTextNode(`Nombre: ${arrPalette.name}`);
      const originCont = document.createTextNode(`Origen: ${arrPalette.from}`);

      //Contenido al contenedor
      title.appendChild(titleCont);
      origin.appendChild(originCont);

      //Al contenedor principal
      palette.appendChild(title);
      palette.appendChild(origin);

      //Un div al que añadiremos los colores
      const color_container = document.createElement('div');
      color_container.classList.add('color_container');

      //Bucle de la característica color de todas las paletas. Se muestran los arrays de colores de cada objeto
      for (const colors of arrPalette.colors) {
        //Recorremos todos los colores de cada paleta y se van añadiendo como atributo al li "item" creado. Esta lista se mete en el div superior (color__container)
        const item = document.createElement('li');
        item.classList.add('color__item');
        item.setAttribute('style', `background-color: #${colors}`);
        color_container.appendChild(item);
      }
    
      //Todo al contenedor principal
      palette.appendChild(color_container);
      container.appendChild(palette);
    }
  });