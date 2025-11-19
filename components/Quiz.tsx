import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { RefreshCw, Trophy, ArrowRight, Check, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  useEffect(() => {
    if (showScore && score > QUIZ_QUESTIONS.length / 2) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9F43', '#48DBFB', '#1DD1A1']
      });
    }
  }, [showScore, score]);

  const handleOptionClick = (index: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === QUIZ_QUESTIONS[currentQuestion].correctAnswer;
    
    if (!isAnswerChecked) {
      setIsAnswerChecked(true);
      if (isCorrect) {
        setScore(score + 1);
        // Mini confetti for correct answer
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#1DD1A1']
        });
      }
    } else {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < QUIZ_QUESTIONS.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setIsAnswerChecked(false);
      } else {
        setShowScore(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsAnswerChecked(false);
  };

  return (
    <div className="max-w-3xl mx-auto pt-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-heading font-bold text-gray-800">Quiz Time! 🎮</h2>
        <p className="text-xl text-gray-500 mt-2">Can you get all {QUIZ_QUESTIONS.length} right?</p>
      </div>

      {showScore ? (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <Card className="p-12 text-center border-t-8 border-t-accent">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 p-6 rounded-full animate-bounce">
                <Trophy size={80} className="text-yellow-500" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-4">You Scored {score} / {QUIZ_QUESTIONS.length}</h3>
            <p className="text-2xl text-gray-600 mb-8">
              {score === QUIZ_QUESTIONS.length ? "🌟 AMAZING! Mansi Puja Master! 🌟" : "Good job! Keep practicing! 💪"}
            </p>
            <Button onClick={resetQuiz} variant="primary" className="flex items-center gap-2 mx-auto text-xl px-8 py-4">
              <RefreshCw size={24} /> Play Again
            </Button>
          </Card>
        </motion.div>
      ) : (
        <Card className="p-6 md:p-10 bg-white min-h-[400px] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-gray-400 text-lg">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
              <div className="flex gap-1">
                {QUIZ_QUESTIONS.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-2 w-6 rounded-full ${idx < currentQuestion ? 'bg-accent' : idx === currentQuestion ? 'bg-primary' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-snug">
              {QUIZ_QUESTIONS[currentQuestion].question}
            </h3>

            <div className="grid gap-4 mb-8">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => {
                let buttonStyle = "bg-gray-50 border-2 border-gray-200 text-gray-700 hover:bg-gray-100";
                
                if (selectedOption === index) {
                  buttonStyle = "bg-blue-100 border-2 border-blue-400 text-blue-800";
                }

                if (isAnswerChecked) {
                   if (index === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
                     buttonStyle = "bg-green-100 border-2 border-green-500 text-green-800";
                   } else if (index === selectedOption) {
                     buttonStyle = "bg-red-100 border-2 border-red-400 text-red-800";
                   }
                }

                return (
                  <motion.button
                    whileHover={{ scale: 1.01, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`w-full text-left p-4 rounded-2xl text-lg font-bold transition-colors flex justify-between items-center ${buttonStyle}`}
                    disabled={isAnswerChecked}
                  >
                    {option}
                    {isAnswerChecked && index === QUIZ_QUESTIONS[currentQuestion].correctAnswer && <Check className="text-green-600" />}
                    {isAnswerChecked && index === selectedOption && index !== QUIZ_QUESTIONS[currentQuestion].correctAnswer && <X className="text-red-500" />}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={handleNext} 
              disabled={selectedOption === null}
              className={`flex items-center gap-2 text-xl px-8 ${selectedOption === null ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isAnswerChecked 
                ? (currentQuestion === QUIZ_QUESTIONS.length - 1 ? "Finish" : "Next") 
                : "Check"}
              {!isAnswerChecked && <ArrowRight size={20} />}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};