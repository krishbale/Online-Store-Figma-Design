import searhbar from '../assets/searchbar.png'
import hamburger from "../assets/hamburger.svg"
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
        <div className="lg:hidden">
            <p>date.0</p>
            <p>wifi</p>
            <p>batery</p>
            <p>time</p>
            <img src="" alt="" />

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
        <div className="flex  ">

                <h1 className="p-4   font-bold text-3xl">TechAxis Online Store </h1>
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