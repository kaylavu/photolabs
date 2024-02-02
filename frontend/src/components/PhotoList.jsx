import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from 'components/PhotoListItem';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            imageSource={photo.urls.regular}
            toggleFavourite={props.toggleFavourite}
            favourites={props.favourites}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
