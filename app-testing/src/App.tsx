import React from 'react';

import {Storify, useStorify} from 'storify';
import 'storify/dist/index.css'
import jsonStories from './data/stories.json';

function App() {
  const { stories, setStories } = useStorify(jsonStories.stories);

  return (
    <Storify storyBorderColor="blue" stories={stories} viewProfileCallback={(user:any) => {console.log(user)}}/>
  );
}

export default App;
