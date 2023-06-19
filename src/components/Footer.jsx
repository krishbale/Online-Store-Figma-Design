
import grouplogo from '../assets/Group.svg'

const Footer = () => {
  return (
    <div>

      <div className="m400 m-4 p-4 grid grid-cols-1  sm:grid-cols-2 md:grid-col-2 lg:grid-cols-4 ">
        {/* <div className="flex"> */}
          {/* div 1 */}
          <div className=" flex-1 order-1 sm:order-1 lg:order-1  ">
            <div className="flex p-2 justify-center items-center">
              <div className="pr-4">
              <img src={grouplogo} alt="logo" />

              </div>
              <p className='text-2xl uppercase                      p-2'>Story world</p>

            </div>

         
        <div className="p-2 text-sm">
          <p>Design amazing digital experiences that create more happy in the world</p>
        </div>
        </div>
       
       {/* div 2 */}
    
      <div className=" order-3 sm:order-3 lg:order-2 flex-1 flex flex-col items-center justify-between p-2 m-2">
        <div className="text-xl">
          <p>Proudcts</p>

        </div>
        <div className="text-sm font-bold text-[#2f40b7]">
          <ul>
            <li>
              <a href="#">Overview </a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Releases</a>
            </li>
          </ul>
        </div>
      </div>
             {/* div 3 */}

      <div className=" order-4 lg:order-3 sm:order-4 flex-1 flex flex-col items-center justify-between p-2 m-2 ">
        <div className="text-xl">
        <p>Resources</p>
        </div>
        <div className="text-sm font-bold text-[#2f40b7]">
          <ul>
          <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      
      </div>
             {/* div 4 */}

      <div className="flex-1 order-2 lg:order-4 sm:order-2 p-2 m-2">
        <div className="">
          <p>Stay Up to date</p>
        </div>
        <div className="md:flex">
          <div className="p-2 m-2">
          <input className='border-none outline-none' type="text" placeholder='Enter your email' />

          </div>
          <div className="text-white">
          <button className='p-2 m-2  rounded-md bg-[#4251D8]'>Subscribe</button>

          </div>
        </div>
      </div>
             

    </div>
    </div>
    // </div>
  )
}

export default Footer