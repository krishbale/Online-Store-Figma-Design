import vegetable from '../assets/vegetable.png';
import fruit from '../assets/fruit.png';
const BigCard = () => {
  return (
    <div className=" sm:flex p-1 m400  ">
     {/* Card 1  */}
     <div className="p-2 ">
        <div>
          <img  className='' src={vegetable} alt="vegetable" />
          <div className="flex flex-col">
          <p className='p-1 m-1 text-center text-xl md:text-2xl lg:text-3xl'>Vegetable</p>
          <div className=" flex justify-center items-center">
          <button className='landingbutton p-4 '>Shop Now</button>  

          </div>
          </div>
          
        </div>
      </div>
      {/* Card 2 */}
      <div className="p-2">
        <div>
          <img src={fruit} className='' alt="vegetable" />
          <div className="flex flex-col">
          <p className='p-1 m-1 text-center text-xl md:text-2xl lg:text-3xl '>Fruit</p>
          <div className=" flex justify-center items-center">
          <button className='landingbutton p-4 '>Shop Now</button>  

          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BigCard