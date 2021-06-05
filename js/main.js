//генератор случайного числа
function RandomWithMinAndMax (min, max) {
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    return console.error('Ошибка. Диапазон может быть только положительный, включая ноль.');
  }
  else if (min > max) {
    // eslint-disable-next-line no-console
    return console.error('Ошибка. Первое значение должно быть меньше второго.');
  }
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/*
// проверка длины строки
function measureLength (row, maxLength) {
  return (row.split('').length <= maxLength);
}
measureLength('zjhzklklklkg', 7);
*/

const posts = [];
const comments = [];
const quantityPost = 26;
const quantityComment = 26;
const idPost = [...Array(quantityPost).keys()];
const idComment = [...Array(quantityComment).keys()];
const description = ['Такая красота', 'Восхитительно!', 'Люблю эту фотку', 'Как вам?', 'Вы тут были?', 'УРА!', 'Классная фотка','Огонь', 'Новая фотка','New foto!', 'Love this picture', 'Super!', 'amazing', 'Новое воспомниание','С добрым утром!', 'Хорошего дня', 'Улыбнись!', 'Как настроение?', 'Погода супер! Чем занимаетесь в выходные?','Кто где?', '=)', '=(', 'Love', 'love-love', 'like'];
const message = ['Всё отлично!', 'В целом всё неплохо.', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const name = ['Артем', 'Света','Катя','Саша','Влад', 'Ира'];

// создание массива с объектами комментариев
// eslint-disable-next-line id-length
for (let i = 0; i <= 30; i++) {
  const comment = {
    id: idComment[i]+1,
    url: `img/avatar-${  RandomWithMinAndMax(1, 6)  }.svg`,
    message: message[RandomWithMinAndMax(0, message.length-1)],
    name: name[RandomWithMinAndMax(0, name.length-1)],
  };
  comments.push(comment);
}

// создание массива с объектами постов
// eslint-disable-next-line id-length
for (let i = 0; i <= 25; i++) {
  const post = {
    id: idPost[i]+1,
    url: `photos/${  i+1  }.jpg`,
    description: description[RandomWithMinAndMax(0, description.length)],
    likes: RandomWithMinAndMax(15, 200),
    comments: comments[RandomWithMinAndMax(0, comments.length-1)],
  };
  posts.push(post);
}
