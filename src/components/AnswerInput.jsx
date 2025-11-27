import React from 'react';
import styles from './AnswerInput.module.css';

const AnswerInput = ({ options, onAnswer }) => {
    return (
        <div className={styles.container}>
            {options.map((option, index) => (
                <button
                    key={index}
                    className={styles.optionButton}
                    onClick={() => onAnswer(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default AnswerInput;
