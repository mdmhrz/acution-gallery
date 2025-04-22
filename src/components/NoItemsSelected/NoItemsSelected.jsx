import React from 'react';

const NoItemsSelected = () => {
    return (
        <div>
            <h3 className='font-semibold' >No Favorites yet</h3>
            <p className='text-[0.9rem]'>Click the heart icon on any items to add in to your favorites</p>
        </div>
    );
};

export default NoItemsSelected;