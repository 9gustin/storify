import React from 'react';
import Story from '../models/Story';
import StoryButton from './StoryButton';
import styles from '../styles/StoriesLine.module.scss';
import IconPaginate from './IconPaginate';

interface Props {
    stories?: Story[],
    imgSize?:string
}
const StoriesLine: React.FC<Props> = ({ stories, imgSize }) => {
    return (
        <div className={styles.storiesLineContainer}>
            <IconPaginate type="prev"/>
            <div className={styles.storiesLine}>
                {stories && stories.map(story => (
                    <StoryButton story={story} imgSize={imgSize}/>
                ))}
            </div>
            <IconPaginate type="next"/>
        </div>
    );
};

export default StoriesLine;