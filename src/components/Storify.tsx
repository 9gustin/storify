import React from 'react';
import Story from '../models/Story';
import StorysLine from './StoriesLine';
interface Props {
    imgSize?: string,
    stories: Story[],
}

const Storify: React.FC<Props> = ({ imgSize, stories }) => {
    return (
        <>
            {
                stories && stories.length > 0 ?
                    <StorysLine imgSize={imgSize} stories={stories} />
                    : ''
            }
        </>
    );
};

export default Storify;