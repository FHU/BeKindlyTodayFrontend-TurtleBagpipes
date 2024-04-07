import React from 'react';
//import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import './Home.css';
import Navbar from './Nav';
import { BsCheckCircle } from "react-icons/bs";


function Home() {
    return(
        <div className='flex flex-col gap-y-10 items-center pb-10 bg-white'>
            <Navbar/>
            {/* <div className="flex w-full h-24 text-2xl px-5 justify-between items-center" style={{ backgroundColor: '#227C9D', color: '#ffffff' }}>
                <img src={'src/assets/logo.png'} alt="Centered Image" style={{ width: '65px', height: '65px' }} />
                <h1 className='text-5xl'>BeKindly</h1>
                <div className="flex items-center">
                    <div className="text-6xl text-black"><CiCalendar /></div>
                    <div className="rounded-full bg-slate-100 p-7"></div>
                </div>
            </div> */}

            {/* Stats Section */}
            <div className="stats stats-vertical lg:stats-horizontal shadow text-center text-black bg-white">
  
                <div className="stat p-4">
                    <div className="stat-value">10K</div>
                    <div className="stat-title text-black">Challenges Completed Globally</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
                <div className="stat">
                    <div className="stat-value">517</div>
                    <div className="stat-title text-black">Challenges Completed Today</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
                <div className="stat">
                    <div className="stat-value">12</div>
                    <div className="stat-title text-black">Challenges Completed by You</div>
                    {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
                </div>
                
            </div>

            
            {/* Timer Section */}
            <div className='text-center text-black'>
                <h1 className='text-4xl font-bold mr-4'>04:43:07</h1>
                {/* Add stats component here */}
            </div>

            {/* Card */}
            <div>
                <h2 className="text-3xl pb-2 text-black text-center font-extrabold">Today's Challenge</h2>
                <div className="card card-compact w-96 bg-base-100 shadow-xl bg-white">
                    <figure><img src="src/images/phone.jpg" alt="Challenges" /></figure>
                    <div className="card-body">
                        <p className='font-bold text-lg text-center text-black'>Send a text to a mom expressing appreciation.</p>
                        <p className='text-center font-semibold' style={{color: '#2485A9'}}>Make it a video or audio message instead of a regular text.</p>
                        <div className="card-actions justify-center pt-4">
                            {/* Button for nav */}
                            <button className="btn btn-block rounded-full text-xl" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#227C9D', color: 'white'}}>
                                <div><BsCheckCircle /></div>
                                Button
                            </button>
                            {/*<link to="/another-page" className='btn btn-primary'>Complete</link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;