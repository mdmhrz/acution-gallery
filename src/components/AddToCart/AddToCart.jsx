import React from 'react';

const AddToCart = ({singleItem}) => {
    return (
        <div className='flex gap-5 items-center mb-3 border rounded-md p-3'>
            <div>
                <img className='w-16 h-16' src={singleItem.image} alt="" />
            </div>
            <div className='text-left'>
                <h1 className='font-semibold'>{singleItem.title}</h1>
                <p>$ {singleItem.currentBidPrice}</p>
                <p>Bids: {singleItem.bidsCount}</p>
            </div>
        </div>
    );
};

export default AddToCart;