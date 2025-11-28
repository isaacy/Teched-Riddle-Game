import React, { useState } from 'react';
import styles from './AnswerInput.module.css';

const AnswerInput = ({ onSubmit, disabled, isLoading }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer.trim()) {
            onSubmit(answer);
            setAnswer('');
        }
    };

    return (
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <textarea
                className={styles.textArea}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                disabled={disabled || isLoading}
                rows={3}
            />
            <button
                type="submit"
                className={styles.submitButton}
                disabled={!answer.trim() || disabled || isLoading}
            >
                {isLoading ? 'Checking...' : 'Submit Answer'}
            </button>
        </form>
    );
};

export default AnswerInput;
