import React from 'react';
import StoryButton from './StoryButton';
import styles from '../styles/StoriesLine.module.scss';
import IconPaginate from './IconPaginate';
import Story from '../models/Story';
interface Props {
    imgSize?: string,
    stories: Story[]
}
const StoriesLine: React.FC<Props> = ({ imgSize, stories }) => {
    return (
        <div className={styles.storiesLineContainer}>
            <IconPaginate type="prev" />
            <div className={styles.storiesLine}>
                {stories && stories.map(story => (
                    <StoryButton key={`StoryButton-${story.id}`} story={story} imgSize={imgSize} />
                ))}
            </div>
            <IconPaginate type="next" />
        </div>
    );
};

export default StoriesLine;