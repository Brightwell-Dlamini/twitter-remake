import {
    CalendarIcon,
    FaceSmileIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
    PhotoIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function TweetBox() {
    const [input, setInput] = useState<string>('');
    return (
        <div className="flex space-x-2 p-5">
            <img
                src="https://links.papareact.com/gll"
                alt=""
                className="mt-4 h-14 w-14 rounded-full object-cover"
            />
            <div className="flex flex-1 items-center pl-2">
                <form className="flex flex-1 flex-col">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="What's happening?"
                        className="h-24 w-full text-xl outline-none placeholder:text-xl"
                    />
                    <div className="flex items-center">
                        <div className="flex flex-1 space-x-3 text-twitter">
                            <PhotoIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                            <MagnifyingGlassIcon className="h-5 w-5" />
                            <FaceSmileIcon className="h-5 w-5" />
                            <CalendarIcon className="h-5 w-5" />
                            <MapPinIcon className="h-5 w-5" />
                        </div>
                        <button
                            className="rounded-full bg-twitter px-5 py-3 font-bold text-white disabled:opacity-40"
                            disabled={!input}
                        >
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TweetBox;
