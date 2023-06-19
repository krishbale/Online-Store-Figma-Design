
import leftarrow from '../assets/leftarrow.png'
import rightarrow from '../assets/rightarrow.png'

const Pagination = () => {
  return (
    <div className='m400 m-2 flex justify-center items-center'>
      <div className="p-2 bg-green-100 border-r-[2px]">
        <img src={leftarrow} alt="left" />
        
        

      </div>
      <div className='p-2 bg-green-100'>
                <img src={rightarrow} alt="right" />
      </div>
    </div>
  )
}

export default Pagination