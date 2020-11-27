import React, { useState } from 'react';
import StoryGroup from '../models/StoryGroup';
import StoriesCarousel from './StoriesCarousel';
import StorysLine from './StoriesLine';

interface Props {
    imgSize?: string,
    stories: StoryGroup[],
}

const Storify: React.FC<Props> = ({ imgSize, stories }) => {
    const [viewingStory, setViewingStory] = useState<StoryGroup|null>(null);
    if (!stories || stories.length < 1) return null;

    const viewStory = (story:StoryGroup):void => setViewingStory(story);
    const closeCarousel = ():void => setViewingStory(null);

    return (
        <>
            {
                viewingStory ?
                <StoriesCarousel stories={stories} actualStoryGroup={viewingStory} handleClose={closeCarousel}/> :
                <StorysLine imgSize={imgSize} stories={stories} viewStory={viewStory}/>
            }
        </>
    );
};

export default Storify;