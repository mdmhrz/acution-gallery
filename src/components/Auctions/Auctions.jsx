import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Auctions = () => {
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, []);


    return (
        <table className='w-full rounded-xl'>
                <thead className='border-b border-gray-200'>
                    <tr>
                        <th className='p-5 text-left'>Items</th>
                        <th className='p-5 text-center'>Current Bid</th>
                        <th className='p-5 text-center'>Time Left</th>
                        <th className='p-5 text-center'>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => <Product key={item.id} item={item} ></Product>)
                    }
                </tbody>
            </table>
    );
};

export default Auctions;