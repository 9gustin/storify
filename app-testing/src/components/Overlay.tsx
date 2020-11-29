import React from 'react';
import styles from '../styles/Overlay.module.scss';

interface Props { handleClick?: Function }
const Overlay: React.FC<Props> = ({ handleClick }) => {
    return (
        <div className={styles.overlay} onClick={() => handleClick && handleClick()}></div>
    );
};

export default Overlay;