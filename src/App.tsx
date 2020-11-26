import React from 'react';
import 'normalize.css';
import './styles/global.scss';
import Storify from './components/Storify';
import useStorify from './hooks/useStorify';
import jsonStories from './data/stories.json';

function App() {
  const { stories } = useStorify(jsonStories.stories);

  return (
    <Storify imgSize="6rem" />
  );
}

export default App;
