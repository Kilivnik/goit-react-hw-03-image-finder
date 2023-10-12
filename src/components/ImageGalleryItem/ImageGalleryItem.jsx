import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ webformatURL, tags, openModal }) {
  return (
    <li className={s.ImageGalleryItem} onClick={openModal}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} />
    </li>
  );
}
