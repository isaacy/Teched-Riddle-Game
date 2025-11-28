import React from 'react';
import styles from './FeedbackModal.module.css';

const FeedbackModal = ({ isCorrect, onTryAgain, onSeeAnswer, videoUrl, aiFeedback }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.icon}>
                    {isCorrect ? '🎉' : '🤔'}
                </div>

                <h2 className={isCorrect ? styles.correctTitle : styles.incorrectTitle}>
                    {isCorrect ? 'Great Job!' : 'Not Quite...'}
                </h2>

                <p className={styles.message}>
                    {aiFeedback || (isCorrect
                        ? "You solved the riddle correctly!"
                        : "That's not the answer we're looking for.")}
                </p>

                <div className={styles.actions}>
                    {!isCorrect ? (
                        <>
                            <button onClick={onTryAgain} className={styles.tryAgainButton}>
                                Try Again
                            </button>
                            <button onClick={onSeeAnswer} className={styles.seeAnswerButton}>
                                See Answer
                            </button>
                        </>
                    ) : (
                        <>
                            <a
                                href={videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.videoButton}
                            >
                                📺 Watch Explanation
                            </a>
                            <button onClick={onTryAgain} className={styles.closeButton}>
                                Close
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;
