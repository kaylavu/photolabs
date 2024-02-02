import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.photo.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photo.profile} />
        <div className="photo-list__user-info">
          {props.photo.username}
          <div className="photo-list__user-location">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
