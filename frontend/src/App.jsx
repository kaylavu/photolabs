import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photoData from './mocks/photos';
import topicsData from './mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicsData} />
    </div>
  );
};

export default App;
