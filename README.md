# Asking Kids Community - Next.js Migration Guide

This project is currently running as a Client-Side React SPA for preview purposes. 
Below is the data schema and API structure requested for the full Next.js 14 implementation.

## 1. Database Schema (Prisma)

Create a file `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // or postgresql
  url      = env("DATABASE_URL")
}

model User {
  id        Int       @id @default(autoincrement())
  name      String?
  email     String    @unique
  password  String
  avatarUrl String?
  points    Int       @default(0)
  questions Question[]
  answers   Answer[]
  posts     Post[]
  documents Document[]
  createdAt DateTime  @default(now())
}

model Question {
  id        Int       @id @default(autoincrement())
  title     String
  content   String    @db.Text
  authorId  Int
  author    User      @relation(fields: [authorId], references: [id])
  answers   Answer[]
  votes     Int       @default(0)
  createdAt DateTime  @default(now())
}

model Answer {
  id        Int       @id @default(autoincrement())
  content   String    @db.Text
  questionId Int
  question  Question  @relation(fields: [questionId], references: [id])
  authorId  Int
  author    User      @relation(fields: [authorId], references: [id])
  votes     Int       @default(0)
  createdAt DateTime  @default(now())
}

model Post {
  id        Int       @id @default(autoincrement())
  title     String
  slug      String    @unique
  content   String    @db.LongText
  category  String
  imageUrl  String?
  authorId  Int
  author    User      @relation(fields: [authorId], references: [id])
  createdAt DateTime  @default(now())
}

model Document {
  id          Int       @id @default(autoincrement())
  title       String
  description String?
  fileUrl     String
  type        String    @default("PDF")
  authorId    Int
  author      User      @relation(fields: [authorId], references: [id])
  createdAt   DateTime  @default(now())
}
```

## 2. API Route Examples (Next.js App Router)

**app/api/questions/route.ts**
```typescript
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Assumes you create lib/prisma.ts

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      include: { author: { select: { name: true, avatarUrl: true } } },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  // Add auth check here (e.g. next-auth session)
  const newQuestion = await prisma.question.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: body.authorId // Replace with session user ID
    }
  });
  return NextResponse.json(newQuestion);
}
```

## 3. Deployment (Vercel)

1. Push code to GitHub.
2. Go to Vercel Dashboard -> Add New Project -> Import Repository.
3. Configure Project:
   - Framework Preset: Next.js
   - Environment Variables: Add `DATABASE_URL` (from your MySQL/Postgres provider).
4. Click Deploy.
