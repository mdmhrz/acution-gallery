import { useState } from 'react'
import './App.css'
import Auctions from './components/Auctions/Auctions'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AddToCart from './components/AddToCart/AddToCart'
import { CiHeart } from "react-icons/ci";
import NoItemsSelected from './components/NoItemsSelected/NoItemsSelected'



function App() {
  const [favorite, setFavorite] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);
  const [isFav, setIsFav] = useState(false);

  const handleAddToFav = (item) => {
    setFavorite([...favorite, item]);
    setTotalAmount(totalAmount+item.currentBidPrice);
    setIsFav(!isFav);
    
  }



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="auction-container bg-gray-100 px-20 py-20">
        <h1 className='text-2xl font-semibold mb-3'>Active Auctions</h1>
        <p className='mb-4'>Discover and bid on extraordinary items</p>
        <div className='flex items-start  gap-10'>
          <div className="active-auctions bg-white rounded-xl w-[70%]">
            <Auctions handleAddToFav={handleAddToFav} isFav={isFav} ></Auctions>
          </div>

          {/* Right side for Fav Items */}
          <div className="fav-items p-5 mb-4  bg-white rounded-xl w-[30%]">
            {/* Fav items Heading */}
            <div className='border-b-2 border-gray-400'>
              <h1 className='text-center text-[20px]  font-semibold mb-3 text-blue-500 align-middle'><CiHeart className='inline-block size-6' />  Favorite Items</h1>
            </div>

            {/* Selected Fav Items */}
            <div className='border-b-2 mb-4 border-gray-400 py-5 text-center'>
            <div>
              
            </div>
              {/* Added fav. itmes */}
                            
              <div>
                {
                  favorite.length===0?(<NoItemsSelected></NoItemsSelected>):(
                    favorite.map((singleItem) => <AddToCart singleItem={singleItem} key={singleItem.id}></AddToCart>)
                  )
                }
              </div>

            </div>

            {/* Total of Fav items */}
            <div className='flex items-center justify-between'>
              <h3 className='font-bold' >Total Bids Amount:</h3>
              <h3 className='font-bold'>${totalAmount}</h3>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
