import { LucideIcon } from "lucide-react";

export type View = 'home' | 'learn' | 'story' | 'planner' | 'quiz';

export interface PujaTime {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  details: string;
  color: string;
}

export interface StoryPanel {
  id: number;
  text: string;
  imagePlaceholder: string; // Using colors or emoji patterns for MVP
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct answer
}

export interface PlannerData {
  selectedTime: string;
  planText: string;
}