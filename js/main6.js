'use strict';


fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')

  .then(response=>response.json())
  .then(data=> {
    for (let i = 0; i<data.palettes.length; i++) {
      const palettesContainer = document.querySelector('.container');

      const palettesName = document.createTextNode(data.palettes[i].name);
      const palettesColors = document.createTextNode(data.palettes[i].colors);

      const list = document.createElement('ul');
      const listTitle = document.createElement('h2');
      listTitle.appendChild(palettesName);
      list.appendChild(listTitle);
      const color = document.createElement('li');
      color.appendChild(palettesColors);

      list.appendChild(color);
      
      palettesContainer.appendChild(list);
      //En un div grande, irán distintas listas de colores.
        //Se meten todos los colores en un mismo elmento de la lista.
    }
  });