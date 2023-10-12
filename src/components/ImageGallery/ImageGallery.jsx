import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ hits, openModal }) {
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          openModal={openModal}
        />
      ))}
    </ul>
  );
}
