import React from 'react';
import Story from '../models/Story';
import StoryButton from './StoryButton';
import styles from '../styles/StoryView.module.scss';
interface Props {
    story: Story | null
}

const StoryView: React.FC<Props> = ({ story }) => {

    const viewProfile = () => { 
        console.log(story?.user);
    }

    //TODO: Center story image to center
    return (
        <div className={styles.storyView}>
            <div>
                <span className={styles.profileContainer}>
                    <StoryButton story={story} handleClick={viewProfile} imgSize="2.5rem" />
                    <button className={styles.profileName} onClick={() => { viewProfile(); }}>{story?.user?.username}</button>
                </span>
            </div>
            <picture className={styles.imgContainer}>
                <img src={story?.imageUrl} alt={`Story from ${story?.user?.username}`} className={styles.storyImage}/>
            </picture>
        </div>
    );
};

export default StoryView;