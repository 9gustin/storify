import React from 'react';
import StoryButton from './StoryButton';
import styles from '../styles/StoriesLine.module.scss';
import IconPaginate from './IconPaginate';
import StoryGroup from '../models/StoryGroup';
interface Props {
    imgSize?: string,
    stories: StoryGroup[],
    viewStory: Function,
    storyBorderColor?: string
}
const StoriesLine: React.FC<Props> = ({ imgSize, stories, viewStory, storyBorderColor }) => {
    return (
        <div className={styles.storiesLineContainer}>
            <IconPaginate type="prev" />
            <div className={styles.storiesLine}>
                {stories && stories.map(story => (
                    <StoryButton key={`StoryButton-${story.id}`} story={story} imgSize={imgSize} handleClick={viewStory} showBorders={true} storyBorderColor={storyBorderColor} withEffects={true}  />
                ))}
            </div>
            <IconPaginate type="next" />
        </div>
    );
};

export default StoriesLine;