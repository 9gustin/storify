import React from 'react';
import Story from '../models/Story';
import styles from '../styles/StoryButton.module.scss';

interface Props {
    story: Story,
    imgSize?:string
}
const StoryButton:React.FC<Props> = ({story, imgSize}) => {
    return (
        <button className={styles.storyButton} style={{width: imgSize, height: imgSize}}>
            <img src={story.user.imageUrl} alt=""/>
        </button>
    );
};

export default StoryButton;