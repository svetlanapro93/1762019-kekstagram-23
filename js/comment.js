import {randomMinMax} from './util.js';

const message = ['Всё отлично!', 'В целом всё неплохо.', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const name = ['Артем', 'Света','Катя','Саша','Влад', 'Ира'];

const createComment = (quantity) => new Array(quantity).fill(null).map((comment, index) => ({
  id: index,
  url: `img/avatar-${randomMinMax(1, 6)}.svg`,
  message: message[randomMinMax(0, message.length - 1)],
  name: name[randomMinMax(0, name.length - 1)],
}));
const renderComments = (comments, container) => {
  container.textContent = '';
  let commentsHTML = '';
  comments.forEach((comment) => {
    commentsHTML += `
     <li class="social__comment">
        <img
            class="social__picture"
            src="${comment.url}"
            alt="${comment.name}"
            width="35" height="35">
        <p class="social__text">${comment.message}</p>
     </li>`;
  });
  container.insertAdjacentHTML('afterbegin', commentsHTML);
};

export {createComment, renderComments};
