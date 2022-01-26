import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onImageContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
}

function onImageContainerClick(evt) {
  evt.preventDefault();
  const isGallertyImage = evt.target.classList.contains('gallery__image');

  if (!isGallertyImage) {
    return;
  }

  const modal = basicLightbox.create(`
    <img src="${evt.target.dataset.source}"/>
`);

  modal.show();
}
