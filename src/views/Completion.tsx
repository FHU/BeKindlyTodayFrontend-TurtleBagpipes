import React from 'react';
import Navbar from '../components/Nav';
import '../index.css';
import 'daisyui/dist/full.css';
import { Link } from 'react-router-dom';

interface Post {
  challenge: string;
}

const Completion: React.FC = () => {
  // Define a static post
  const post: Post = {
    challenge: "Send a text to a loved one to show your appreciation."
  };

  return (
    // Top-Parent Container
    <div className="flex flex-col gap-y-10 items-center text-black" style={{ backgroundColor: '#F4F4F9'}}>
        <Navbar/>
        {/* Header
        <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#2485A9', color: '#ffffff' }}>
            <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
            <h1>BeKindly</h1>
            <div className="flex items-center">
                <div className="text-6xl text-black"><CiCalendar /></div>
                <div className="rounded-full bg-slate-100 p-7"></div>
            </div>
        </div> */}

        {/* Main */}
        <div className="flex flex-col items-center gap-4 pb-10" style={{ backgroundColor: '#F4F4F9'}}>
        {/* Timer */}
            <div className="flex justify-center border-2 w-40 py-2 border-black rounded-lg font-bold">
                <h2 className="text-2xl">00:00:00</h2>
            </div>

            {/* Challenge */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                <div className="card-body bg-white">
                    <p className='font-bold text-lg text-center text-black'>{post.challenge}</p>
                    <p className='text-center font-semibold' style={{color: '#2485A9'}}>Make it a video or audio message instead of a regular text.</p>
                    <div className="card-actions justify-center">
                        {/* Button for nav */}
                        {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
                    </div>
                </div>
            </div>

            {/* Experience */}
            <h2 className="text-2xl self-start mt-10">Experience</h2>
            <div className="mb-10">
                <form action="#" method="post" className="flex flex-col">
                        <textarea className="w-96 border-2 border-black rounded-lg p-2 h-32" style={{ backgroundColor: '#F4F4F9'}}></textarea>
                </form>
            </div>

            {/* Post */}
            <Link to="/confirmation">
                <div className="btn btn-lg rounded-lg text-xl bg-[#227C9D] text-white text-center border-none transition-colors duration-300 hover:bg-[#1C6F87]">
                    <h2>Complete</h2>
                </div>
            </Link>
        </div>
        </div>
  );
};

export default Completion;
