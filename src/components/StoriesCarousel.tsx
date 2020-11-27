import React, { useEffect } from 'react';
import useStoriesPaginator from '../hooks/useStoriesPaginator';
import StoryGroup from '../models/StoryGroup';
import IconClose from './IconClose';
import IconPaginate from './IconPaginate';
import StoryView from './StoryView';
import styles from '../styles/StoriesCarousel.module.scss';
import Overlay from './Overlay';

interface Props {
    actualStoryGroup: StoryGroup,
    stories: StoryGroup[],
    handleClose: Function
}

const StoriesCarousel: React.FC<Props> = ({ actualStoryGroup, stories, handleClose }) => {
    const { actualStory, prev, next, start } = useStoriesPaginator({ actualStoryGroup, stories });

    const close = () => {
        handleClose();
    }

    useEffect(() => {
        start();
    }, [])


    return (
        <>
            <Overlay handleClick={close} />
            <div className={styles.centerCarousel}>
                <div className={styles.carouselContainer}>
                    <button onClick={close} className={styles.closeButton}><IconClose /></button>
                    <IconPaginate type="prev" handleClick={prev} />
                    <StoryView story={actualStory} />
                    <IconPaginate type="next" handleClick={next} />
                </div>
            </div>
        </>
    );
};

export default StoriesCarousel;