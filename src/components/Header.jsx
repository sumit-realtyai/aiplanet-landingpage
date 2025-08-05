import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Planet
          </h1>
          <p className="text-sm text-gray-500 mt-1">A subsidiary of RealtyAI</p>
        </div>
      </div>
    </header>
  );
};

export default Header;