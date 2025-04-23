import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";



const Product = ({item, handleAddToFav, isFav}) => {
    

    return (


        <tr className='border-t-2 border-gray-500 text-center'>
                <td className='flex gap-4 items-center p-5'>
                    <img className='w-16 h-16' src={item.image} alt="" />
                    <h3 className='font-semibold'>{item.title}</h3> 
                </td>
                <td><h3>${item.currentBidPrice}</h3></td>
                <td><h3>{item.timeLeft}</h3></td>
                <td className='text-center align-middle'> <CiHeart onClick={()=>handleAddToFav(item)} className={`inline-block text-2xl hover:scale-[1.2] transition-all cursor-pointer ${ isFav ? 'text-red-500' : 'text-blue-500'}`} /></td>
        </tr>
        
    );
};

export default Product;