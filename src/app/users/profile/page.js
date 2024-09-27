import React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Avatar } from '@mui/material';

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4">
      <div className="flex-1 p-6">
        <div className="relative h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/kris.jpg)' }}>
          <div className="absolute bottom-4 left-4 flex items-center space-x-4">
            <Avatar src="/kris.jpg" alt="Profile" className="w-24 h-24" />
            <div className="text-white">
              <h2 className="text-xl font-bold bg-white-200 text-black">Kris Justin Oporto</h2>
              <p className='bg-white-200 text-black'>Classical Singer</p>
              <p className='bg-white-200 text-black'>Guizo, Mandaue</p>
              <Rating value={4.9} precision={0.1} readOnly className="text-yellow-400" />
              <p className='bg-white-200 text-black'>4.9/5 (26 reviews)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-b">
          <ul className="flex space-x-8">
            <li className="border-b-2 border-blue-500 pb-2">Overview</li>
            <li className="hover:border-b-2 hover:border-gray-300 pb-2">Reviews</li>
            <li className="hover:border-b-2 hover:border-gray-300 pb-2">Photos & Videos</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Description</h3>
          <p>
            Hi, I'm Kris Justin Oporto, a solo singer from Guizo Mandaue. I offer a wide range of singing genres to suit any event...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
