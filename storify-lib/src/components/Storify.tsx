import React, { useState } from 'react';
import StoryGroup from '../models/StoryGroup';
import StoriesCarousel from './StoriesCarousel';
import StorysLine from './StoriesLine';

interface Props {
    imgSize?: string,
    stories: StoryGroup[],
    viewProfileCallback?: Function,
    storyBorderColor?: string
}

const Storify: React.FC<Props> = ({ imgSize, stories, viewProfileCallback, storyBorderColor }) => {
    const [viewingStory, setViewingStory] = useState<StoryGroup|null>(null);
    if (!stories || stories.length < 1) return null;

    const viewStory = (story:StoryGroup):void => setViewingStory(story);
    const closeCarousel = ():void => setViewingStory(null);

    return (
        <React.Fragment>
            {
                viewingStory ?
                <StoriesCarousel stories={stories} actualStoryGroup={viewingStory} handleClose={closeCarousel} viewProfileCallback={viewProfileCallback}/> :
                <StorysLine imgSize={imgSize} stories={stories} viewStory={viewStory} storyBorderColor={storyBorderColor}/>
            }
        </React.Fragment>
    );
};

export default Storify;