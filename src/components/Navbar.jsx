import searhbar from '../assets/searchbar.png'
import hamburger from "../assets/hamburger.svg"
import wifi from '../assets/Wifi.png'
import signal from '../assets/signal.png'
import battery from '../assets/Battery.png'
const MenuItems = ()=>{
    return(
        <ul className="hidden lg:flex items-center justify-evenly">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Product</a>
            </li>
            <li>
                <a href="#">About us</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            
        </ul>
    )
}
const MobileBar = ()=>{
    return(
        <div className=" p-4 m-4 flex items-center justify-between lg:hidden">
            <div className="">
                <p>1:11</p>
            </div>
            <div className="flex gap-10 ">
                <div className="flex-1">
                    <img src={signal} alt="signal" />
                </div>
                <div className="flex-1">
                    <img src={wifi} alt="wifi" />
                </div>
                <div className="flex-1">
                    <img src={battery} alt="battery"    />
                </div>
            </div>

        </div>    )
}

const Navbar = () => {
  return (
    <div className="m400">
        <MobileBar />

        {/* diviion for login and sign up */}
       <div className="hidden lg:flex items-end justify-end">
        <div className="flex">
            <p>Sign In  </p>
            <p className='px-2'> | </p>
            <p>Create Account</p>
        </div>
        </div>
        
        
          {/* divison for Search Bar and Title */}
        <div className=" flex  ">
            <div className=" hidden   lg:flex lg:flex-row lg:items-center  lg:justify-center ">
                <div className="px-2">
                <img src={searhbar} alt="" />

                </div>
            <input className="border-none outline-none" type="text" placeholder={`  Search Products`}/>
            </div>
           
           

       
        <div className="flex-1">
        <div className="flex justify-between  ">
            <div className="">
            <h1 className=" lg:p-4 font-bold text-xl md:text-2xl lg:text-3xl">Balkrishna Online Store </h1>

            </div>
            <div className="lg:hidden">
            <img src={hamburger} alt="hamburger" />
            </div>
            </div>
            <MenuItems />
           
            

        </div>
        </div>
  
    </div>
  )
}

export default Navbar