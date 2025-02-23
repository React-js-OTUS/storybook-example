import React from 'react';
import styles from './themed-message.module.css';
import { useTheme } from '@/shared/lib/theme/theme-context';

export interface ThemedMessageProps {
    message: string;
}

const ThemedMessage = ({ message }: ThemedMessageProps) => {
    const { theme } = useTheme();

    return (
        <div className={styles.container} data-theme={theme} data-testid="themed-message">
            <p>{message}</p>
            <p>Current theme: {theme}</p>
        </div>
    );
};

export default ThemedMessage;
