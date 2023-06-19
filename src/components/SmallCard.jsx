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
      <div className='flex'>
        <div className='p-4   '>
          <img src={Apple} alt="" />
          <div className="border-[1px] rounded-md border-[#C4C4C4]">
          <p className='pt-2 pl-2'>Apple</p>
          <p className='px-2'>$20</p>
          <div className=" p-4 m border-y-[1px]  border-[#C4C4C4] text-center">
          <p>Add to Cart</p>
          </div>
          </div>
        </div>
        <div className='p-4   '>
          <img src={Banana} alt="" />
          <div className=" border-[1px] rounded-md border-[#C4C4C4]">
          <p className='pt-2 pl-2'>Banana</p>
          <p className='px-2'>$20</p>
          <div className=" p-4 m border-y-[1px]  border-[#C4C4C4] text-center">
          <p>Add to Cart</p>
          </div>
          </div>
        </div>
        <div className='p-4   '>
          <img src={Guava} alt="" />
          <div className=" border-[1px] rounded-md border-[#C4C4C4]">
          <p className='pt-2 pl-2'>Guava                    </p>
          <p className='px-2'>$20</p>
          <div className=" p p-4 m border-y-[1px]  border-[#C4C4C4] text-center">
          <p>Add to Cart</p>
          </div>
          </div>
        </div>
        <div className='p-4 text-sm  '>
          <img src={Strawberry} alt="" />
          <div className=" border-[1px] rounded-md border-[#C4C4C4]">
          <p className='pt-2 pl-2'>Strawberry</p>
          <p className='px-2'>$20</p>
          <div className=" p-4 m border-y-[1px]  border-[#C4C4C4] text-center">
          <p>Add to Cart</p>
          </div>
          </div>
        </div>
      </div>
      
     
    </div>
  )
}

export default SmallCard