import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites((prev) => {
        return prev.filter((id) => id !== photoId);
      });
      return;
    }
    setFavourites((prev) => {
      return [...prev, photoId];
    });
  };
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        favouriteExists={favourites.length > 0}
      />
      <PhotoList
        photos={props.photos}
        toggleFavourite={toggleFavourite}
        favourites={favourites}
      />
    </div>
  );
};

export default HomeRoute;
