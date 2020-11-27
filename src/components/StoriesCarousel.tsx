import React, { useEffect, useState } from 'react';
import useStoriesPaginator from '../hooks/useStoriesPaginator';
import Story from '../models/Story';
import StoryGroup from '../models/StoryGroup';
import IconClose from './IconClose';
import IconPaginate from './IconPaginate';
import StoryView from './StoryView';

interface Props {
    actualStoryGroup: StoryGroup,
    stories: StoryGroup[],
    handleClose: Function
}

const StoriesCarousel: React.FC<Props> = ({ actualStoryGroup, stories, handleClose }) => {
    const {actualStory, prev, next, start} = useStoriesPaginator({actualStoryGroup, stories});

    const close = () => {
        handleClose();
    }

    useEffect(() => {
        start();
    }, [])


    return (
        <div>
            <button onClick={close}><IconClose /></button>
            <IconPaginate type="prev" handleClick={prev} />
            <StoryView story={actualStory} />
            <IconPaginate type="next" handleClick={next} />
        </div>
    );
};

export default StoriesCarousel;