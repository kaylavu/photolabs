import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={props.toggleFavourite}
        photoId={props.photo.id}
        favourites={props.favourites}
      />
      <img className="photo-list__image" src={props.imageSource}></img>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        />
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
