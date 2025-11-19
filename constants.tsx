import { Sun, Soup, Coffee, Moon, Utensils } from 'lucide-react';
import { PujaTime, QuizQuestion, StoryPanel } from './types';

export const PUJA_TIMES: PujaTime[] = [
  {
    id: 'morning',
    title: 'Morning',
    icon: Sun,
    description: 'Wake Maharaj & Breakfast',
    details: 'Imagine waking Maharaj gently, helping Him brush, offering a warm bath, nice clothes, and a yummy breakfast.',
    color: 'bg-yellow-100 border-yellow-400 text-yellow-800',
  },
  {
    id: 'lunch',
    title: 'Lunch',
    icon: Utensils,
    description: 'Royal Thali',
    details: 'Visualize Maharaj sitting on a golden throne. Offer Him a royal lunch with many dishes while devotees watch.',
    color: 'bg-green-100 border-green-400 text-green-800',
  },
  {
    id: 'afternoon',
    title: 'Afternoon Snack',
    icon: Coffee,
    description: 'Fruits & Juice',
    details: 'Wake Maharaj from His nap. Offer fresh fruits or juice. Imagine walking with Him in a beautiful garden.',
    color: 'bg-orange-100 border-orange-400 text-orange-800',
  },
  {
    id: 'dinner',
    title: 'Dinner',
    icon: Soup,
    description: 'Simple & Light',
    details: 'Perform evening Aarti. Offer simple food like khichdi, kadhi, or bhakhri. Receive His blessings.',
    color: 'bg-blue-100 border-blue-400 text-blue-800',
  },
  {
    id: 'night',
    title: 'Sleeping',
    icon: Moon,
    description: 'Goodnight Maharaj',
    details: 'Offer warm milk. Imagine Akshardham. Massage His legs gently and watch Him fall asleep.',
    color: 'bg-indigo-100 border-indigo-400 text-indigo-800',
  },
];

export const STORY_PANELS: StoryPanel[] = [
  {
    id: 1,
    text: "Parvatbhai was a great devotee. Even while working hard on his farm, he always remembered Maharaj and did Mansi Puja in his mind.",
    imagePlaceholder: "🚜",
  },
  {
    id: 2,
    text: "One day, he was very busy farming and got late for lunch. But he didn't skip! He closed his eyes and offered a mental thali of yogurt and rotlo to Maharaj.",
    imagePlaceholder: "🧘‍♂️",
  },
  {
    id: 3,
    text: "His partner saw him sitting still and shook him with a stick to wake him up. Suddenly, REAL yogurt and rotlo fell from his invisible thali onto the ground!",
    imagePlaceholder: "🥣",
  },
  {
    id: 4,
    text: "Miracle! This showed that Maharaj really accepts whatever we offer with love in Mansi Puja, even if it's just in our mind.",
    imagePlaceholder: "✨",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is Mansi Puja?",
    options: [
      "Drawing a picture of God",
      "Doing puja lovingly in your mind",
      "Reading a book loudly",
      "Sleeping all day"
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "How many times a day should we do Mansi Puja?",
    options: [
      "1 Time",
      "3 Times",
      "5 Times",
      "10 Times"
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "What fell from Parvatbhai's thali?",
    options: [
      "Pizza and Burger",
      "Gold Coins",
      "Yogurt and Rotlo",
      "Flowers"
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Which of these is a benefit of Mansi Puja?",
    options: [
      "Makes you stronger at sports",
      "Helps your mind focus & increases love",
      "Changes the weather",
      "Completes your homework"
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "What do we do in the Sleeping Mansi Puja?",
    options: [
      "Play video games",
      "Eat a heavy meal",
      "Run in the garden",
      "Offer warm milk and massage Maharaj's legs"
    ],
    correctAnswer: 3,
  },
];
