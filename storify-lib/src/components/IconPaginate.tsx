import React from 'react';
import IconNext from './IconNext';
import IconPrev from './IconPrev';
import styles from '../styles/IconPaginate.module.scss';

interface Props {
    type: "prev" | "next",
    handleClick?: Function
};
const IconPaginate: React.FC<Props> = ({ type, handleClick }) => {
    return (
        <div className={`${styles.iconPaginate} ${styles[type]}`}>
            <button onClick={() => { handleClick && handleClick(); }}>
                {type === "prev" ?
                    <IconPrev /> :
                    <IconNext />
                }
            </button>
        </div>
    );
};

export default IconPaginate;