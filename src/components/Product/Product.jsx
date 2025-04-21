import React from 'react';
import { FaHeart } from "react-icons/fa";


const Product = ({item}) => {
    console.log(item);
    return (


        <tr className='border-t-2 border-black text-center'>
                <td className='flex gap-4 items-center p-5'>
                    <img className='w-16 h-16' src={item.image} alt="" />
                    <h3 className='font-semibold'>{item.title}</h3> 
                </td>
                <td><h3>${item.currentBidPrice}</h3></td>
                <td><h3>{item.timeLeft}</h3></td>
                <td className=''><FaHeart className='text-red-400 ml-6' /></td>
        </tr>

        
    );
};

export default Product;