import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Auctions = ({ handleAddToFav, favorite }) => {
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);


    return (
        <div className='p-8'>
            <div className='border-2 border-gray-500 rounded-xl'>
                <table className='p-5 w-full'>
                    <thead>
                        <tr>
                            <th className='p-5 text-left'>Items</th>
                            <th className='p-5 text-center'>Current Bid</th>
                            <th className='p-5 text-center'>Time Left</th>
                            <th className='p-5 text-center'>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => <Product favorite={favorite} key={item.id} item={item} handleAddToFav={handleAddToFav} ></Product>)
                        }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Auctions;