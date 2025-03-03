import React from 'react';
import styles from './button.module.css';
import {clsx} from "clsx";

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
       label,
       onClick,
       variant = 'primary',
       size = 'medium',
   }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(styles.button, styles[variant], styles[size])}
        >
            {label}
        </button>
    );
};

export default Button;
