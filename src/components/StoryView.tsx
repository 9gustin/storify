import React from 'react';
import Story, { createdAtToString } from '../models/Story';
import StoryButton from './StoryButton';
import styles from '../styles/StoryView.module.scss';
import IconClose from './IconClose';
interface Props {
    story: Story | null,
    handleClose?: Function,
    viewProfileCallback?: Function,
}

const StoryView: React.FC<Props> = ({ story, handleClose, viewProfileCallback }) => {

    const viewProfile = () => viewProfileCallback && viewProfileCallback(story?.user);

    return (
        <div className={styles.storyView}>
            <div className={styles.topOptions}>
                <span className={styles.profileContainer}>
                    <StoryButton story={story} handleClick={viewProfile} imgSize="2.5rem" />
                    <button className={styles.profileName} onClick={() => { viewProfile(); }}>{story?.user?.username}</button>
                    <span>
                        {story && createdAtToString(story)}
                    </span>
                </span>
                <button onClick={() => {handleClose && handleClose();}} className={styles.closeButton}><IconClose /></button>
            </div>
            <picture className={styles.imgContainer}>
                <img src={story?.imageUrl} alt={`Story from ${story?.user?.username}`} className={styles.storyImage}/>
            </picture>
        </div>
    );
};

export default StoryView;