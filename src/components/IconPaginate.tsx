import React from 'react';
import IconNext from './IconNext';
import IconPrev from './IconPrev';
import styles from '../styles/IconPaginate.module.scss';

interface Props {
    type: "prev" | "next"
};
const IconPaginate: React.FC<Props> = ({ type }) => {
    return (
        <div className={`${styles.iconPaginate} ${styles[type]}`}>
            <button>
                {type === "prev" ?
                    <IconPrev /> :
                    <IconNext />
                }
            </button>
        </div>
    );
};

export default IconPaginate;