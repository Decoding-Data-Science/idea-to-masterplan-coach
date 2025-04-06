import React from 'react';
import Header from '@/components/Header';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        {/* Rest of ProfilePage content would remain unchanged */}
      </div>
    </div>
  );
};

export default ProfilePage;
