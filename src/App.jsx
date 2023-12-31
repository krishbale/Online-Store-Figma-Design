
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

import TopBar from './components/TopBar'
import BigCard from './components/BigCard'
import SmallCard from './components/SmallCard'
import { ImageOverlay } from './components/ImageOverlay'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
  export default function App() {
    return (
      <div className='min-h-screen'>
        <TopBar />
        <Navbar />
        <Landing />
        <BigCard />
        <SmallCard />
        <Pagination />
        <ImageOverlay />
        <Footer />

      </div>
    )
  }

