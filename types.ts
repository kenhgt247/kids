export interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string;
  points: number;
}

export interface Question {
  id: number;
  title: string;
  content: string;
  authorId: number;
  authorName: string;
  createdAt: string;
  votes: number;
  answersCount: number;
}

export interface Answer {
  id: number;
  questionId: number;
  content: string;
  authorId: number;
  authorName: string;
  createdAt: string;
  votes: number;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  authorId: number;
  authorName: string;
  imageUrl?: string;
  createdAt: string;
}

export interface Document {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  authorId: number;
  authorName: string;
  createdAt: string;
  type: 'PDF' | 'DOCX' | 'PPT' | 'OTHER';
}

// Mock Database Service Interface
export interface DBService {
  users: User[];
  questions: Question[];
  posts: Post[];
  documents: Document[];
}