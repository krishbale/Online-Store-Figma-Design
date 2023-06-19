
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

import TopBar from './components/TopBar'
import BigCard from './components/BigCard'
import SmallCard from './components/SmallCard'
import { ImageOverlay } from './components/ImageOverlay'
import Footer from './components/Footer'
  export default function App() {
    return (
      <div className='min-h-screen w-[375px] md:w-[744px] lg:w-[1920px] bg-blue-100'>
        <TopBar />
        <Navbar />
        <Landing />
        <BigCard />
        <SmallCard />
        <ImageOverlay />
        <Footer />

      </div>
    )
  }

