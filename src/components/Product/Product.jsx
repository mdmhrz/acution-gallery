import React from 'react';
import { FaHeart } from "react-icons/fa";


const Product = ({item}) => {
    console.log(item);
    return (


        <tr className='border-t-2 border-gray-500 text-center'>
                <td className='flex gap-4 items-center p-5'>
                    <img className='w-16 h-16' src={item.image} alt="" />
                    <h3 className='font-semibold'>{item.title}</h3> 
                </td>
                <td><h3>${item.currentBidPrice}</h3></td>
                <td><h3>{item.timeLeft}</h3></td>
                <td><i class="fa-solid fa-heart hover:scale-[1.2] transition-all  "></i></td>
        </tr>

        
    );
};

export default Product;