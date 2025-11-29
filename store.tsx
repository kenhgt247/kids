import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Question, Post, Document } from './types';

interface AppContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  register: (name: string, email: string) => void;
  // Data Access
  questions: Question[];
  addQuestion: (title: string, content: string) => void;
  posts: Post[];
  documents: Document[];
  addDocument: (doc: Omit<Document, 'id' | 'authorName' | 'createdAt'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// MOCK DATA
const MOCK_USER: User = {
  id: 1,
  name: "Bunny Learner",
  email: "bunny@kids.com",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bunny",
  points: 150
};

const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: "5 Fun Ways to Learn Math",
    slug: "fun-ways-math",
    content: "Math doesn't have to be boring! Here are 5 games you can play...",
    category: "Tips",
    authorId: 2,
    authorName: "Mr. Owl",
    imageUrl: "https://picsum.photos/400/250?random=1",
    createdAt: "2023-10-15"
  },
  {
    id: 2,
    title: "Why is the Sky Blue?",
    slug: "why-sky-blue",
    content: "Have you ever wondered why the sky is blue? Let's explore physics...",
    category: "Science",
    authorId: 2,
    authorName: "Mr. Owl",
    imageUrl: "https://picsum.photos/400/250?random=2",
    createdAt: "2023-10-18"
  }
];

const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    title: "How do I solve quadratic equations?",
    content: "I'm stuck on x^2 + 5x + 6 = 0. Can someone explain the steps?",
    authorId: 3,
    authorName: "MathWhiz",
    createdAt: "2023-10-20",
    votes: 5,
    answersCount: 2
  },
  {
    id: 2,
    title: "Best books for learning History?",
    content: "I want to learn about Ancient Rome.",
    authorId: 4,
    authorName: "HistoryBuff",
    createdAt: "2023-10-21",
    votes: 12,
    answersCount: 5
  }
];

const MOCK_DOCS: Document[] = [
  {
    id: 1,
    title: "Grade 5 Math Worksheet",
    description: "Practice fractions and decimals.",
    fileUrl: "#",
    authorId: 2,
    authorName: "Teacher Jane",
    createdAt: "2023-09-01",
    type: "PDF"
  },
  {
    id: 2,
    title: "Solar System Presentation",
    description: "Slides about planets and stars.",
    fileUrl: "#",
    authorId: 2,
    authorName: "Teacher Jane",
    createdAt: "2023-09-10",
    type: "PPT"
  }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [questions, setQuestions] = useState<Question[]>(MOCK_QUESTIONS);
  const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
  const [documents, setDocuments] = useState<Document[]>(MOCK_DOCS);

  const login = (email: string) => {
    // Simulating login
    setUser(MOCK_USER);
  };

  const logout = () => {
    setUser(null);
  };

  const register = (name: string, email: string) => {
    setUser({ ...MOCK_USER, name, email });
  };

  const addQuestion = (title: string, content: string) => {
    if (!user) return;
    const newQ: Question = {
      id: questions.length + 1,
      title,
      content,
      authorId: user.id,
      authorName: user.name,
      createdAt: new Date().toISOString().split('T')[0],
      votes: 0,
      answersCount: 0
    };
    setQuestions([newQ, ...questions]);
  };

  const addDocument = (doc: Omit<Document, 'id' | 'authorName' | 'createdAt'>) => {
     if (!user) return;
     const newDoc: Document = {
       ...doc,
       id: documents.length + 1,
       authorName: user.name,
       createdAt: new Date().toISOString().split('T')[0]
     }
     setDocuments([newDoc, ...documents]);
  }

  return (
    <AppContext.Provider value={{ user, login, logout, register, questions, addQuestion, posts, documents, addDocument }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};