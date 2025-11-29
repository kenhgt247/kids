import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './store';
import PageContainer from './components/PageContainer';

// Pages
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile';
import Kids from './pages/Kids';
import BlogList from './pages/Blog/BlogList';
import BlogDetail from './pages/Blog/BlogDetail';
import QuestionList from './pages/QnA/QuestionList';
import QuestionDetail from './pages/QnA/QuestionDetail';
import AskQuestion from './pages/QnA/AskQuestion';
import Library from './pages/Library';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Auth */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* Kids Zone */}
            <Route path="/kids" element={<Kids />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />

            {/* Q&A */}
            <Route path="/hoi-dap" element={<QuestionList />} />
            <Route path="/hoi-dap/ask" element={<AskQuestion />} />
            <Route path="/hoi-dap/:id" element={<QuestionDetail />} />

            {/* Library */}
            <Route path="/library" element={<Library />} />
          </Routes>
        </PageContainer>
      </Router>
    </AppProvider>
  );
};

export default App;