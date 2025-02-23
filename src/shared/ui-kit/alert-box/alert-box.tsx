import React from 'react';
import styles from './alert-box.module.css';

export interface AlertBoxProps {
    message: string;
    variant?: 'info' | 'warning' | 'error';
}

const AlertBox: React.FC<AlertBoxProps> = ({ message, variant = 'info' }) => {
    return (
        <div className={`${styles.alertBox} ${styles[variant]}`} data-testid="alert-box">
            <p>{message}</p>
        </div>
    );
};

export default AlertBox;