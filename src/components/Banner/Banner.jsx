import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner min-h-[70vh] flex flex-col items-start justify-center gap-5 px-20 text-white'>
            <h1 className='text-4xl font-bold max-w-[500px]'>Bid on Unique Items from Around the World</h1>
            <p className='text-[20px] max-w-[500px]' >Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
            <button className='bg-white rounded-full py-4 px-10 text-black' >Explore Auction</button>
        </div>
    );
};

export default Banner;