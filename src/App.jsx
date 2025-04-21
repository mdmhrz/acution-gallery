import './App.css'
import Auctions from './components/Auctions/Auctions'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { FaHeart } from "react-icons/fa";

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>

     <div className="auction-container bg-gray-100 px-20 py-20">
        <h1 className='text-2xl font-semibold mb-3'>Active Auctions</h1>
        <p className='mb-4'>Discover and bid on extraordinary items</p>
        <div className='flex items-start  gap-10'>
            <div className="active-auctions bg-white rounded-xl w-[70%]">
                <Auctions></Auctions>
            </div>

            {/* Right side for Fav Items */}
            <div className="fav-items p-5 mb-4  bg-white rounded-xl w-[30%]">
                {/* Fav items Heading */}
                <div className='border-b-2 border-gray-400'>
                <h1 className='text-center text-[20px]  font-semibold mb-3 text-blue-500'> <i class="fa-solid fa-heart"></i>  Favorite Items</h1>
                </div>

                {/* Selected Fav Items */}
                <div className='border-b-2 mb-4 border-gray-400 py-5 text-center'>
                  <h3 className='font-semibold' >No Favorites yet</h3>
                  <p className='text-[0.9rem]'>Click the heart icon on any items to add in to your favorites</p>
                </div>

                {/* Total of Fav items */}
                <div className='flex items-center justify-between'>
                  <h3 className='font-semibold' >Total Bids Amount:</h3>
                  <h3 className='font-semibold'>$0</h3>
                </div>

            </div>
        </div>
     </div>
     
     <Footer></Footer>      
    </>
  )
}

export default App
