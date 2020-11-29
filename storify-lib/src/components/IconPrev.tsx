import React from 'react';
import {MdNavigateBefore} from 'react-icons/md';

interface Props{
    className?:string;
}
const IconPrev:React.FC<Props> = ({className}) => {
    return (
        <MdNavigateBefore className={className}/>
    );
};

export default IconPrev;