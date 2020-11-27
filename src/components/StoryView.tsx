import React from 'react';
import Story from '../models/Story';

interface Props {
    story: Story|null
}

const StoryView: React.FC<Props> = ({ story }) => {
    
    return (
        <picture>
            <img src={story?.imageUrl} alt={`Story from ${story?.user?.username}`}/>
        </picture>
    );
};

export default StoryView;