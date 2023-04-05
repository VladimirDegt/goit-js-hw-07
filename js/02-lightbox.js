import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  container: document.querySelector('.gallery'),
};

// ----------------------------створення розмітки----------------------------------
const arrayImgTag = galleryItems.map ( ({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}"" alt="${description}" />
            </a>
          </li>`;
});

refs.container.insertAdjacentHTML("beforeend", arrayImgTag.join(''));
// ------------------------------END створення розмітки----------------------------------

let gallery = new SimpleLightbox('.gallery a', {
  close: false, 
  showCounter: false,
  additionalHtml: `<h1>Тут повинна бути інфа з alt</h1>`
});
console.log(gallery)
gallery.on('show.simplelightbox', function () {
});