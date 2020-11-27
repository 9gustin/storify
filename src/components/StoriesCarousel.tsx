import React from 'react';
import StoryGroup from '../models/StoryGroup';

interface Props{
    stories: StoryGroup[],
    handleClose: Function
}

const StoriesCarousel:React.FC<Props> = ({stories}) => {
    return (
        <div>
            {stories.map(s => s.user.username)}
        </div>
    );
};

export default StoriesCarousel;