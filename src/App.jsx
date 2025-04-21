import './App.css'
import Auctions from './components/Auctions/Auctions'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>

     <div className="auction-container bg-gray-100 px-20 py-20">
        <h1 className='text-2xl font-semibold mb-3'>Active Auctions</h1>
        <p className='mb-4'>Discover and bid on extraordinary items</p>
        <div className='flex gap-10'>
            <div className="active-auctions bg-white rounded-xl w-[70%]">
                <Auctions></Auctions>
            </div>
            <div className="fav-items  bg-white rounded-xl w-[30%]">
                <h1>Favorite Items</h1>
            </div>
        </div>
     </div>
     
     <Footer></Footer>      
    </>
  )
}

export default App
