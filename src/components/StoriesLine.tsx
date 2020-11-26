import React, { useContext, useEffect } from 'react';
import StoryButton from './StoryButton';
import styles from '../styles/StoriesLine.module.scss';
import IconPaginate from './IconPaginate';
import StoryContext from '../context/StoryContext';

interface Props {
    imgSize?: string
}
const StoriesLine: React.FC<Props> = ({ imgSize }) => {
    const { stories } = useContext(StoryContext);

    return (
        <div className={styles.storiesLineContainer}>
            <IconPaginate type="prev" />
            <div className={styles.storiesLine}>
                {stories && stories.map(story => (
                    <StoryButton story={story} imgSize={imgSize} />
                ))}
            </div>
            <IconPaginate type="next" />
        </div>
    );
};

export default StoriesLine;