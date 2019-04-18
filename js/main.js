'use strict';


const data = [
  {
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Humans aren\'t real',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];

//Create structure (elements)
//Create content

for(let i = 0; i<data.length; i++){
  const news = document.querySelector('news');

  const list = document.createElement('li');
  list.classList.add('news__item');

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

  //Esto no funciona, por qué???
  news.appendChild(list);
}