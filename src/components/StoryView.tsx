import React from 'react';
import Story from '../models/Story';
import StoryButton from './StoryButton';

interface Props {
    story: Story | null
}

const StoryView: React.FC<Props> = ({ story }) => {

    const viewProfile = () => {}

    return (
        <>
            <div>
                <span>
                    <StoryButton story={story} handleClick={viewProfile} imgSize="2.5rem"/>
                    <span>{story?.user?.username}</span>
                </span>
            </div>
            <picture>
                <img src={story?.imageUrl} alt={`Story from ${story?.user?.username}`} />
            </picture>
        </>
    );
};

export default StoryView;