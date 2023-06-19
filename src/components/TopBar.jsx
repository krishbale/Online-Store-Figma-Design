import email from '../assets/message.png'
import contact from '../assets/call.png'

const TopBar = () => {
  return (
    //for desktop only
    <div className=" m400  hidden lg:flex lg:justify-between">
        <div className="flex items-center justify-center">
          <div className="px-2 my-2">
          <img src={email} className=''  alt="email" />

          </div>
            <p className=''>info@ecommerce.com</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="px-2 my-2">
          <img src={contact} className='' alt="Contact" />

          </div>
            <p className=''>+9866045875</p>
        </div>
    </div>
  )
}

export default TopBar