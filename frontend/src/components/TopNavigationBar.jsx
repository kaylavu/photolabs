import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge favouriteExists={props.favouriteExists} />
    </div>
  );
};

export default TopNavigation;
