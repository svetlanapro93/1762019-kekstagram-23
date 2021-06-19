import {randomMinMax} from './util.js';
import {createComment} from './comment.js';
//import * as hashtag from './hashtag.js';

const description = ['Такая красота', 'Восхитительно!', 'Люблю эту фотку', 'Как вам?', 'Вы тут были?', 'УРА!', 'Классная фотка','Огонь', 'Новая фотка','New photoForm!', 'Love this picture', 'Super!', 'amazing', 'Новое воспомниание','С добрым утром!', 'Хорошего дня', 'Улыбнись!', 'Как настроение?', 'Погода супер! Чем занимаетесь в выходные?','Кто где?', '=)', '=(', 'Love', 'love-love', 'like'];

function createPosts(quantity) {
  return new Array(quantity).fill(null).map((post, index) => ({
    id: index,
    url: `photos/${index + 1}.jpg`,
    description: description[randomMinMax(0, description.length)],
    likes: randomMinMax(15, 200),
    comments: createComment(randomMinMax(1, 4)),
  }));
}
export {createPosts};


