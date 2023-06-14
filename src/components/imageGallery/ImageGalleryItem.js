import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = (props) => {
    const {ImgUrl} = props; 

    return (
        <div className='image-gallery-container'>
        <div className="image-gallery-item">
            <img className='image-gallery_img' src={ImgUrl} alt="Gallery Item"/>
        </div>
        </div>
    );




}

export default ImageGalleryItem;
