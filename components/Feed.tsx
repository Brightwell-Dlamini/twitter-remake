import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="active-125 mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180" />
      </div>
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;
