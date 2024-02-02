import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [favouritePhoto, setFavouritePhoto] = useState(false);

  const toggleFavouritePhoto = () => {
    props.toggleFavourite(props.photoId);
  };
  const colorCheck = props.favourites.includes(props.photoId);
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavouritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
