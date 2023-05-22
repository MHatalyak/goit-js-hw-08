import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const listOfGallary = document.querySelector('.gallery');

const imagesList = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
  `;
  })
  .join('');

listOfGallary.insertAdjacentHTML('beforeend', imagesList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
