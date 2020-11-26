import React from 'react';
import 'normalize.css';
import './styles/global.scss';
import Storify from './components/Storify';
import useStorify from './hooks/useStorify';
import jsonStories from './data/stories.json';

function App() {
  const { stories,setStories } = useStorify(jsonStories.stories);

  return (
    <Storify imgSize="6rem" stories={stories}/>
  );
}

export default App;
