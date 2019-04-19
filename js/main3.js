'use strict';

const url = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json';

const urlColor = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json';


fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(res){
    const data = res.news;
    for(let i = 0; i<data.length; i++){
      const news = document.querySelector('.news');

      const list = document.createElement('li');
      list.classList.add('news__item');
      list.classList.add('news__item--no-image-visible');

      const title = document.createElement('h2');
      title.classList.add('news__title');
      const contentTitle = document.createTextNode(data[i].title);
      title.appendChild(contentTitle);

      const image = document.createElement('img');
      image.classList.add('news__image');
      const contentImg = document.createTextNode(data[i].image);
      image.appendChild(contentImg);

      list.appendChild(title);
      list.appendChild(image);

      news.appendChild(list);
      const titles = data[i].title;

      for (let j = 0; j<titles.length; j++){
        if (titles.includes('Mars')){
          list.classList.add('.new__item--from-mars');
          title.classList.add('.new__item--from-mars');
          image.classList.add('.new__item--from-mars');

        } else if (titles.includes('Martians')){
          list.classList.add('.new__item--from-mars');
          title.classList.add('.new__item--from-mars');
          image.classList.add('.new__item--from-mars');
        }
      }
      function showImage(){
        list.classList.toggle('news__item--no-image-visible');
      }
      list.addEventListener('click', showImage);
    }
  });

// Ejercicio 5- Una paleta de color
fetch(urlColor)
  .then(function(resp){
    return resp.json();
  })
  .then(function(respu){
    const color = respu.palettes;
    const [level] = color;
    const colors = level.colors;
    const [yellow, orange, rojo, purple, blue]= colors;

    for (let j = 0; j<colors.length; j++){
      const colorcitos = document.querySelector('.colorcitos');
      colorcitos.innerHTML += `<li class="color__item" style="background-color:#${colors[j]}"></li>`;
    }
  });