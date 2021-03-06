import React, { useEffect } from 'react';
import Story from '../models/Story';
import StoryGroup from '../models/StoryGroup';
import styles from '../styles/StoryButton.module.scss';

interface Props {
    story: StoryGroup | Story | null,
    imgSize?: string,
    showBorders?: boolean,
    withEffects?: boolean,
    storyBorderColor?:string,
    handleClick: Function
}
const StoryButton: React.FC<Props> = ({ story, imgSize = "5.5rem", showBorders, handleClick, withEffects, storyBorderColor }) => {

    useEffect(() => {
        document.body.style.setProperty("--imgSize", imgSize)
        storyBorderColor && document.body.style.setProperty("--storyBorderColor", storyBorderColor)
    }, [])

    return (
        <button className={`${styles.storyButton} ${showBorders ? styles.storyBorders : ''}`} onClick={() => { handleClick(story); }}>
            <img src={story?.user.imageUrl} alt="" className={withEffects ? styles.applyEffects : ''}/>
        </button>
    );
};

export default StoryButton;