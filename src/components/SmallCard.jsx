import Apple from '../assets/Apple.png'
import Banana from '../assets/Banana.png'
import Guava from '../assets/Guava.png'
import Strawberry from '../assets/Strawberry.png'


const SmallCard = () => {
  return (
    <div  className='m400 '>
      <div className='text-center text-3xl p-4 m-4'>
        <h1>Fruits</h1>
      </div>
      {/* cards */}
      <div className='grid grid-cols-1 sm:grid-cols2 md:grid-cols-2 lg:grid-cols-4'>
      <div className='p-4 text-sm   '>
          
          <img className='w-full border-b-[1px]  rounded-sm border-[#C4C4C4]' src={Strawberry} alt="" />

          
          <div className="  border-[1px]  border-[#C4C4C4]  ">
          <p className='pt-2 pl-2'>Strawberry</p>
          <p className='px-2'>$20</p>
          <p className='p-4 border-[1px] text-center border-t-[#C4C4C4]'>Add to Cart</p>
         
          </div>
        
          
        </div>
        <div className='p-4 text-sm   '>
          
          <img className='w-full border-b-[1px]  rounded-sm border-[#C4C4C4]' src={Strawberry} alt="" />

          
          <div className="  border-[1px]  border-[#C4C4C4]  ">
          <p className='pt-2 pl-2'>Strawberry</p>
          <p className='px-2'>$20</p>
          <p className='p-4 border-[1px] text-center border-t-[#C4C4C4]'>Add to Cart</p>
         
          </div>
        
          
        </div>
        <div className='p-4 text-sm   '>
          
          <img className='w-full border-b-[1px]  rounded-sm border-[#C4C4C4]' src={Strawberry} alt="" />

          
          <div className="  border-[1px]  border-[#C4C4C4]  ">
          <p className='pt-2 pl-2'>Strawberry</p>
          <p className='px-2'>$20</p>
          <p className='p-4 border-[1px] text-center border-t-[#C4C4C4]'>Add to Cart</p>
         
          </div>
        
          
        </div>
        <div className='p-4 text-sm   '>
          
          <img className='w-full border-b-[1px]  rounded-sm border-[#C4C4C4]' src={Strawberry} alt="" />

          
          <div className="  border-[1px]  border-[#C4C4C4]  ">
          <p className='pt-2 pl-2'>Strawberry</p>
          <p className='px-2'>$20</p>
          <p className='p-4 border-[1px] text-center border-t-[#C4C4C4]'>Add to Cart</p>
         
          </div>
        
          
        </div>
      </div>
      
     
    </div>
  )
}

export default SmallCard