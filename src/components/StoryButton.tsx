import React, { useEffect } from 'react';
import Story from '../models/Story';
import styles from '../styles/StoryButton.module.scss';

interface Props {
    story: Story,
    imgSize?:string
}
const StoryButton:React.FC<Props> = ({story, imgSize}) => {

    useEffect(()=> {
        imgSize && document.body.style.setProperty("--imgSize", imgSize);
    }, [])

    return (
        <button className={styles.storyButton}>
            <img src={story.user.imageUrl} alt=""/>
        </button>
    );
};

export default StoryButton;