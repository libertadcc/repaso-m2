'use strict';

const palettesContainer = document.querySelector('.container');

fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')

  .then(response=>response.json())

  .then(data=> {

    for (let i = 0; i<data.palettes.length; i++) {
      const palletesArray = data.palettes;
      const palettesColors = data.palettes[i].colors;
      const palettesName = data.palettes[i].name;
     
      const palettesElements = `<div class="color__item" style="background-color:#${palettesArray[i].name}">${palettesArray[i].name}</div>`;

      console.log(palettesName);
      // console.log(palettesElements);

      // palettesContainer.innerHTML += palettesElements;
    }
  });