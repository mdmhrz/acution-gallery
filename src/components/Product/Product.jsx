import React from 'react';
import { FaHeart } from "react-icons/fa";


const Product = ({item}) => {
    console.log(item);
    return (
        <div className='grid grid-cols-5 mb-5' >
            <img className='w-16 h-16' src={item.image} alt="" />
            <h3 className='font-semibold'>{item.title}</h3>
            <h3>${item.currentBidPrice}</h3>
            <h3>{item.timeLeft}</h3>
            <FaHeart className='text-red-400' />
        </div>
    );
};

export default Product;