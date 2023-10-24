import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  openModal,
  largeImageURL,
}) {
  return (
    <li className={s.ImageGalleryItem} onClick={() => openModal(largeImageURL)}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}
