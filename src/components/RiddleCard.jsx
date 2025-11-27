import React from 'react';
import styles from './RiddleCard.module.css';

const RiddleCard = ({ title, question, thumbnail, videoUrl }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {thumbnail && <img src={thumbnail} alt={title} className={styles.thumbnail} />}

            {videoUrl && (
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className={styles.watchLink}>
                    📺 Watch Video
                </a>
            )}

            <p className={styles.question}>{question}</p>
        </div>
    );
};

export default RiddleCard;
