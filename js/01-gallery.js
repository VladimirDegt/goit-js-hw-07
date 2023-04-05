import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  container: document.querySelector('.gallery'),
};

// ----------------------------створення розмітки----------------------------------
const arrayImgTag = galleryItems.map ( ({preview, original, description}) => {
  return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>`
});

refs.container.insertAdjacentHTML("beforeend", arrayImgTag.join(''));
// ------------------------------END створення розмітки----------------------------------

// ------------------------------функционал открытия и закрытия лайтбокса----------------
let instance = '';

const onImgClick = (e) => {
  const target = e.target;

  e.preventDefault();
  if (target.nodeName !== "IMG"){
    return;
  };
  instance = basicLightbox.create(`<img src="${target.dataset.source}" >`);
  window.addEventListener('keydown', onEscClick);
  instance.show();
};

const onEscClick = (e) => {
  if (e.code === 'Escape') {
    window.removeEventListener('keydown', onEscClick);
    instance.close();
  };
};

refs.container.addEventListener('click', onImgClick);
// ------------------------------END функционал открытия и закрытия лайтбокса----------------


