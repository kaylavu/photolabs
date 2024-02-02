import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favouritePhoto, setFavouritePhto] = useState(false);

  const toggleFavouritePhto = () => {
    setFavouritePhto((prev) => !prev);
  };
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavouritePhto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhoto} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
