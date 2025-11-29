import React, { ReactNode } from 'react';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-transparent">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6 justify-center">
          <SidebarLeft />
          
          {/* Main Content Area */}
          <main className="flex-1 w-full max-w-3xl min-w-0">
            {children}
          </main>

          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default PageContainer;