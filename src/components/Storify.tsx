import React from 'react';
import StoryProvider from '../context/StoryProvider';
import StorysLine from './StoriesLine';
interface Props {
    imgSize?: string
}

const Storify: React.FC<Props> = ({ imgSize }) => {
    return (
        <>
            <StorysLine imgSize="5rem" />
        </>
    );
};

export default Storify;