import React from 'react';
import StorysLine from './components/StoriesLine';
import storiesJSON from './data/stories.json';
import 'normalize.css';
import './styles/global.scss';

function App() {
  return (
    <StorysLine stories={storiesJSON.stories} imgSize="5rem"/>
  );
}

export default App;
