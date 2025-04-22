import React from 'react';
import { RxCross2 } from "react-icons/rx";


const AddToCart = ({singleItem}) => {
    return (
        <div className='flex gap-5 items-center mb-3 border rounded-md p-3 relative'>
            <div>
                <img className='w-16 h-16' src={singleItem.image} alt="" />
            </div>
            <div className='text-left mr-4'>
                <h1 className='font-semibold'>{singleItem.title}</h1>
                <p>$ {singleItem.currentBidPrice}</p>
                <p>Bids: {singleItem.bidsCount}</p>
            </div>
            <RxCross2 className='absolute right-4 cursor-pointer hover:scale-[1.3]' />

        </div>
    );
};

export default AddToCart;