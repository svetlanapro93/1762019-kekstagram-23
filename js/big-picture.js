import {isEscEvent} from './util.js';
import {renderComments} from './comment.js';

const bigPictureElement = document.querySelector('.big-picture');
const commentsContainerElement = bigPictureElement.querySelector('.social__comments');

bigPictureElement.querySelector('.social__comment-count').classList.add('hidden');
bigPictureElement.querySelector('.comments-loader').classList.add('hidden');
document.querySelector('body').classList.add('modal-open');

const imgElement = bigPictureElement.querySelector('img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');

const bigPicturePopup = (photoElement, photoObject) => {
  photoElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    imgElement.src = photoObject.url;
    likesCountElement.textContent = photoObject.likes;
    commentsCountElement.textContent = photoObject.comments.length;
    descriptionElement.textContent = photoObject.description;
    renderComments(photoObject.comments, commentsContainerElement);
    onBigPicturePopupOpen();// eslint-disable-line no-use-before-define
  });
};

const onBigPicEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    onBigPicturePopupClose();// eslint-disable-line no-use-before-define
  }
};

const onBigPicCancelButtonClick = (evt) => {
  evt.preventDefault();
  onBigPicturePopupClose();// eslint-disable-line no-use-before-define
};

const onBigPicturePopupOpen = () => {
  bigPictureElement.classList.remove('hidden');
  document.addEventListener('keydown', onBigPicEscKeydown);
  bigPictureElement.querySelector('.cancel').addEventListener('click', onBigPicCancelButtonClick);
};

const onBigPicturePopupClose = () => {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onBigPicEscKeydown);
  bigPictureElement.querySelector('.cancel').removeEventListener('click', onBigPicCancelButtonClick);
};


export {bigPicturePopup};
