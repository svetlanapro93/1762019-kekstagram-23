import { createPosts } from './post.js';

// eslint-disable-next-line no-unused-vars
function createPictureTemplate () {
  const posts = createPosts(25);
  const picture = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();
  // eslint-disable-next-line no-const-assign,id-length
  for (let i = 0; i < posts.length; i++){
    const itemPhoto = picture.cloneNode(true);
    itemPhoto.querySelector('.picture__img').src = posts[i].url;
    itemPhoto.querySelector('.picture__likes').textContent = posts[i].likes;
    itemPhoto.querySelector('.picture__comments').textContent = posts[i].comments;
    picturesFragment.appendChild(itemPhoto);
  }
  document.querySelector('.pictures').appendChild(picturesFragment);
}
export {createPictureTemplate};
