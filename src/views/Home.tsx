import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav';
import Stats from '../components/Stats';
import Footer from '../components/Footer';
import CountdownTimer from '../components/Timer';
import Card from '../components/Card';

// Importing the completedChallenge variable
import { completedChallenge } from '../components/Card'; // Importing completedChallenge variable

// import { userInput } from '../components/Card'; 




const Home: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'home' | 'completion' | 'confirmation'>('home');

    useEffect(() => {
        // Check if completedChallenge is true and set currentPage accordingly
        if (completedChallenge) {
            setCurrentPage('confirmation');
        }
    }, []); // Empty dependency array ensures useEffect runs only once

    const handleCompletionButtonClick = () => {
        setCurrentPage('completion');
    };

    const handleConfirmationButtonClick = () => {
        setCurrentPage('confirmation');
    };

    return (
        <div className='flex flex-col gap-y-10 items-center bg-kindly-offWhite'>
            <Navbar/>

            {/* Conditional Rendering based on currentPage */}
            {currentPage === 'home' && (
                <div>
                    {/* Stats Section */}
                    <div className='pb-6'><Stats /></div>
                    <CountdownTimer />
                    <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                        Today's Challenge
                    </h2>
                    <Card layoutType='home' handleButtonClick={handleCompletionButtonClick} />
                </div>
            )}
            {currentPage === 'completion' && (
                <div className="flex flex-col gap-y-10 items-center text-black bg-kindly-offWhite">
                    <div className="flex flex-col items-center gap-4 pb-10 bg-kindly-backgroundColor">
                        {/* Stats Section */}
                        <CountdownTimer />
                        <div>
                            <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                                Today's Challenge
                            </h2>
                            <Card layoutType="completion" handleButtonClick={handleConfirmationButtonClick} />
                        </div>
                    </div>
                </div>
            )}
            {currentPage === 'confirmation' && (
                <div className="flex flex-col gap-y-10 items-center pb-10 bg-kindly-offWhite">
                    <Stats />
                    <div>
                        <h2 className="text-3xl py-3 text-white text-center font-extrabold bg-kindly-blue rounded-t-2xl">
                            Completed Challenge
                        </h2>
                        <Card layoutType="confirmation" handleButtonClick={handleConfirmationButtonClick} />
                    </div>
                    <Card layoutType='staticFeed' handleButtonClick={handleConfirmationButtonClick}/>
                </div>
            )}
            <Footer/>
        </div>
    );
};

export default Home;
