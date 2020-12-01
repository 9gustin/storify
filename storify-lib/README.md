# storify :D

stories for you react app

[![NPM](https://img.shields.io/npm/v/storify.svg)](https://www.npmjs.com/package/storify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## v1:

NPM package that show stories in a line(ordered by relevance and date)



## URL

https://www.npmjs.com/package/@9gustin/storify-react



## How to use

Add package to your aplication

``` bash
npm i @9gustin/storify-react
```

### Short

#### App.js

```JSX
import React from 'react';
import {Storify, useStorify} from '@9gustin/storify-react';
import '@9gustin/storify-react/dist/index.css'
import initialState from './data/stories.json';

function App() {
  const { stories } = useStorify(initialState.stories);

  return (
    <Storify imgSize="5rem" storyBorderColor="blue" stories={stories} viewProfileCallback={(user) => {console.log(user)}}/>
  );
}

export default App;
```



### Detailed

Import the Storify component and custom hook

```JSX
import {Storify, useStorify} from '@9gustin/storify-react';
```

### useStorify (Custom Hook)

| Param          | Type    | Description                                               |
| -------------- | ------- | --------------------------------------------------------- |
| initialStories | Story[] | represent the list of stories to start the state variable |



| Return     | Type          | Description                                                                                          |
| ---------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| stories    | Story[]       | represent the list of stories that are managed in state, and you should pass it to Storify component |
| addStories | Function:void | that function give you the possibility to add stories, and thats rendered in the Storify component   |
| setStories | Function:void | that function give you the possibility to set the list of stories                                    |



Use:

```JSX
    const { stories, addStories, setStories } = useStorify(initialStories);
```

### Storify (Component)

| Prop Name           | Type          | Description                                                                        |
| ------------------- | ------------- | ---------------------------------------------------------------------------------- |
| imgSize             | string        | represent the size of story buttons, that receive the css width/height size.       |
| stories             | Story[]       | represent the list of stories that the component should render                     |
| viewProfileCallback | Function:User | the function that would be called when the user make click to the user             |
| storyBorderColor    | string        | represent the color of story buttons borders, that receive the border-color value. |



Use:

```JSX
    <Storify imgSize="5rem" storyBorderColor="blue" stories={stories} viewProfileCallback={(user) => {console.log(user)}}/>
```

### Models



Story

| Property  | Type   | Description                |
| --------- | ------ | -------------------------- |
| user      | User   | the owner of story         |
| id        | string | the identificator of story |
| createdAt | string | the creation date of story |
| imageUrl  | number | the url of story image     |



User

| Property  | Type   | Description                                            |
| --------- | ------ | ------------------------------------------------------ |
| username  | string | the identificator of a user                            |
| imageUrl  | string | the url of user profile image                          |
| relevance | number | the stories are ordered firstly for the user relevance |



### Import styles

```JSX
import '@9gustin/storify-react/dist/index.css'
```

## Future releases:

- Next story automatically, with time/progress bar
- Save actual user in state
- take response to stories, with a custom callback
- Button "Add story" with a custom callback
- Custom stories(colors, to group of persons)

## License

MIT © [9gustin](https://github.com/9gustin)