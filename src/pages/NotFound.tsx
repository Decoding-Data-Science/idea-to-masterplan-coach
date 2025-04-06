
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto pt-24 px-4 flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
