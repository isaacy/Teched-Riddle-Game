import React from 'react';
import styles from './FeedbackModal.module.css';

const FeedbackModal = ({ isCorrect, explanation, videoUrl, onNext, onTryAgain, onSeeAnswer }) => {
    return (
        <div className={styles.overlay}>
            <div className={`${styles.modal} ${isCorrect ? styles.correct : styles.incorrect}`}>
                <h2>{isCorrect ? '🎉 Correct! 🎉' : '😢 Incorrect'}</h2>

                {isCorrect ? (
                    <>
                        <p className={styles.explanation}>{explanation}</p>
                        {videoUrl && (
                            <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                                📺 Watch Explanation Video
                            </a>
                        )}
                        <button onClick={onNext} className={styles.nextButton}>
                            Next Riddle ➡️
                        </button>
                    </>
                ) : (
                    <div className={styles.buttonGroup}>
                        <p>Don't give up yet!</p>
                        <button onClick={onTryAgain} className={styles.tryAgainButton}>
                            🔄 Try Again
                        </button>
                        <button onClick={onSeeAnswer} className={styles.seeAnswerButton}>
                            👀 See Answer
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackModal;
