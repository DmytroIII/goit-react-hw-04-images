
import './ImageGalleryItem.styled.css';
import { TiThumbsUp } from "react-icons/ti";
import { MdOutlineSettingsAccessibility } from "react-icons/md";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { MdOutlineIosShare } from "react-icons/md";


import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images }) => {
  return images.map((image) => (
      <li className="photo-card" key={image.id}>
        <a className="img-wrap" href={image.largeImageURL}>
          <img
          className='image'
          src={image.webformatURL}
          alt={image.tags}
          loading="lazy"
          />
        </a>
        <div className='info'>
            <p className='info__item'>
              <b>Likes</b>
              <TiThumbsUp style={{ width: 14, height: 14, color: '#006400'} } />              
              {image.likes}
            </p>
            <p className='info__item'>
              <b>Views</b>
              <MdOutlineSettingsAccessibility style={{ width: 14, height: 14, color: '#006400'}} />              
              {image.views}
            </p>
            <p className='info__item'>
              <b>Comments</b>
              <MdOutlineSpeakerNotes style={{ width: 14, height: 14, color: '#006400'}} />              
              {image.comments}
            </p>
            <p className='info__item'>
              <b>Downloads</b>
              <MdOutlineIosShare style={{ width: 14, height: 14, color: '#006400'}} />              
              {image.downloads}
            </p>
          </div>
      </li>  
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};