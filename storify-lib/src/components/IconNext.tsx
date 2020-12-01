import React from 'react';
import {MdNavigateNext} from 'react-icons/md';

interface Props{
    className?:string;
}
const IconNext:React.FC<Props> = ({className})  => {
    return (
        <MdNavigateNext className={className}/>
    );
};

export default IconNext;