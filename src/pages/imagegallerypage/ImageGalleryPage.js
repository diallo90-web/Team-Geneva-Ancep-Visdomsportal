import React from 'react';
import "./ImageGalleryPage.css";
import ImageGalleryItem from '../../components/imageGallery/ImageGalleryItem';
import { galleryImages } from '../../assets/imageHelper';


import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';

const images = galleryImages()
const ImageGalleryPage =() => {

  return (
    <div className='image-gallery__container'>
      <Link className='image-gallery__back-arrow' to="/Navigasjon">
        <FaChevronCircleLeft/>
      </Link>
      <h1 className='image-gallery__title'> Bildegalleri</h1>
      <div className='grid-container__gallery'>
        {images.map((images) =>(

        <div className='grid-item__gallery-img'>
          <ImageGalleryItem ImgUrl = {images.image} key = {images.id} />
        </div>
        ))}
      </div>
      

    </div>
  );
}

export default ImageGalleryPage;
