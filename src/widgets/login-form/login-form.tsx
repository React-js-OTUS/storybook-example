import { useState, FormEvent } from 'react';
import styles from './login-form.module.css';

export interface LoginFormProps {
    onSubmit?: (username: string, password: string) => void;
}

export const LoginForm = ({ onSubmit = () => {} }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        onSubmit(username, password);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} data-testid="login-form">
            <div className={styles.field}>
                <label htmlFor="username" className={styles.label}>
                    Username:
                </label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    data-testid="username-input"
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>
                    Password:
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    data-testid="password-input"
                />
            </div>
            <button type="submit" className={styles.button} data-testid="submit-button">
                Submit
            </button>
            {submitted && (
                <p className={styles.successMessage} data-testid="success-message">
                    Login Successful!
                </p>
            )}
        </form>
    );
};

export default LoginForm;
