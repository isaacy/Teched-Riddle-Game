import React, { useState, useEffect } from 'react';
import { riddles } from './data/riddles';
import RiddleCard from './components/RiddleCard';
import AnswerInput from './components/AnswerInput';
import FeedbackModal from './components/FeedbackModal';
import './App.css';

import { checkAnswerWithAI } from './services/gemini';

function App() {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledRiddles, setShuffledRiddles] = useState([]);
  const [aiFeedback, setAiFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Shuffle riddles on load
    const shuffled = [...riddles].sort(() => Math.random() - 0.5);
    setShuffledRiddles(shuffled);
  }, []);

  if (shuffledRiddles.length === 0) return <div>Loading...</div>;

  const currentRiddle = shuffledRiddles[currentRiddleIndex];

  const handleAnswer = async (userAnswer) => {
    setIsLoading(true);
    const result = await checkAnswerWithAI(
      currentRiddle.question,
      currentRiddle.answer,
      userAnswer
    );
    setIsLoading(false);

    setIsCorrect(result.isCorrect);
    setAiFeedback(result.feedback);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setAiFeedback(''); // Clear AI feedback on next
    setCurrentRiddleIndex((prev) => (prev + 1) % shuffledRiddles.length);
  };

  const handlePrevious = () => {
    setShowFeedback(false);
    setAiFeedback(''); // Clear AI feedback on previous
    setCurrentRiddleIndex((prev) => (prev - 1 + shuffledRiddles.length) % shuffledRiddles.length);
  };

  const handleTryAgain = () => {
    setShowFeedback(false);
    setAiFeedback('');
  };

  const handleSeeAnswer = () => {
    setIsCorrect(true); // Treat as "correct" to show the explanation
    // Optionally, we could have a distinct state for "Revealed"
  };

  const handleNewRiddle = () => {
    setShowFeedback(false);
    // Pick a random riddle that's different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * shuffledRiddles.length);
    } while (newIndex === currentRiddleIndex && shuffledRiddles.length > 1);
    setCurrentRiddleIndex(newIndex);
  };

  return (
    <div className="app-container">
      <header>
        <div className="logo">TED <span className="red-text">Ed</span> Riddles</div>
        <div className="progress">Riddle {currentRiddleIndex + 1} / {shuffledRiddles.length}</div>
      </header>

      <main className="game-layout">
        <div className="left-column">
          <RiddleCard
            title={currentRiddle.title}
            question={currentRiddle.question}
            thumbnail={currentRiddle.thumbnail}
            videoUrl={currentRiddle.videoUrl}
          />

          <div className="navigation-buttons">
            <button onClick={handlePrevious} className="nav-button prev-button">
              ⬅ Previous
            </button>
            <button onClick={handleNewRiddle} className="nav-button new-button">
              🔄 New Riddle
            </button>
          </div>
        </div>

        <div className="right-column">
          <h3>Choose your answer:</h3>
          <AnswerInput
            options={currentRiddle.options}
            onAnswer={handleAnswer}
          />
        </div>
      </main>

      {showFeedback && (
        <FeedbackModal
          isCorrect={isCorrect}
          explanation={currentRiddle.explanation}
          aiFeedback={aiFeedback}
          videoUrl={currentRiddle.videoUrl}
          onNext={handleNext}
          onTryAgain={handleTryAgain}
          onSeeAnswer={handleSeeAnswer}
        />
      )}
    </div>
  );
}

export default App;
