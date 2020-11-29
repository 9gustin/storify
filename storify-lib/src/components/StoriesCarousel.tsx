import React, { useEffect } from 'react';
import useStoriesPaginator from '../hooks/useStoriesPaginator';
import StoryGroup from '../models/StoryGroup';
import IconPaginate from './IconPaginate';
import StoryView from './StoryView';
import styles from '../styles/StoriesCarousel.module.scss';
import Overlay from './Overlay';

interface Props {
    actualStoryGroup: StoryGroup,
    stories: StoryGroup[],
    handleClose: Function,
    viewProfileCallback?: Function
}

const StoriesCarousel: React.FC<Props> = ({ actualStoryGroup, stories, handleClose, viewProfileCallback }) => {
    const { actualStory, prev, next, start } = useStoriesPaginator({ actualStoryGroup, stories });

    const close = () => {
        handleClose();
    }

    useEffect(() => {
        start();
    }, [])


    return (
        <React.Fragment>
            <Overlay handleClick={close} />
            <div className={styles.centerCarousel}>
                <div className={styles.carouselContainer}>
                    <IconPaginate type="prev" handleClick={prev} />
                    <StoryView story={actualStory} handleClose={close} viewProfileCallback={viewProfileCallback}/>
                    <IconPaginate type="next" handleClick={next} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default StoriesCarousel;