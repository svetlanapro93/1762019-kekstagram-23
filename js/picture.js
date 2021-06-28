import { createPost, PHOTOS_QUANTITY } from './post.js';
import { bigPicturePopup } from './big-picture.js';

const posts = new Array(PHOTOS_QUANTITY).fill(null).map((post, index) => createPost(index));
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();
// eslint-disable-next-line no-const-assign,id-length
for (let i = 0; i < posts.length; i++){
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = posts[i].url;
  photoElement.querySelector('.picture__likes').textContent = posts[i].likes;
  photoElement.querySelector('.picture__comments').textContent = posts[i].comments.length;
  bigPicturePopup(photoElement, posts[i]);
  picturesFragment.appendChild(photoElement);
}

document.querySelector('.pictures').appendChild(picturesFragment);
