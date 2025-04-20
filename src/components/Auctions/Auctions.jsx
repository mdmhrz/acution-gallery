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
        <div className='px-20 py-20' >

            <h1 className='text-2xl font-semibold mb-4'>Active Auctions</h1>
            <p>Discover and bid on extraordinary items</p>

            <table>
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 1, Cell 1</td>
                        <td>Row 1, Cell 2</td>
                        <td>Row 1, Cell 3</td>
                    </tr>
                    <tr>
                        <td>Row 2, Cell 1</td>
                        <td>Row 2, Cell 2</td>
                        <td>Row 2, asdfsadCell 3</td>
                    </tr>
                </tbody>
            </table>

            <div className="auction-itmes">
                {
                    items.map((item) => <Product key={item.id} item={item} ></Product>)
                }
            </div>

        </div>
    );
};

export default Auctions;