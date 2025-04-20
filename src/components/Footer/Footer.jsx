import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-base-200 p-10 flex flex-col items-center gap-3">
                <div className="">
                    <a className="text-xl text-[#003EA4]">Auction<span className='text-yellow-500 font-bold'>Gallery</span></a>
                </div>
                <nav className="flex gap-5">
                    <a className="link link-hover font-semibold">Bid.</a>
                    <a className="link link-hover font-semibold">Win.</a>
                    <a className="link link-hover font-semibold">Won.</a>
                </nav>
                <div className='flex gap-10'>
                    <a href="">Home</a>
                    <a href="">Auction</a>
                    <a href="">Categories</a>
                    <a href="">How to works</a>
                </div>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - AuctionHub. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;