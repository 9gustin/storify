import React, { useEffect } from 'react';
import StoryGroup from '../models/StoryGroup';
import styles from '../styles/StoryButton.module.scss';

interface Props {
    story: StoryGroup,
    imgSize?:string,
    handleClick: Function
}
const StoryButton:React.FC<Props> = ({story, imgSize, handleClick}) => {

    useEffect(()=> {
        imgSize && document.body.style.setProperty("--imgSize", imgSize);
    }, [])

    return (
        <button className={styles.storyButton} onClick={() => {handleClick(story);}}>
            <img src={story.user.imageUrl} alt=""/>
        </button>
    );
};

export default StoryButton;