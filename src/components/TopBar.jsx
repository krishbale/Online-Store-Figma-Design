

const TopBar = () => {
  return (
    //for desktop only
    <div className=" hidden lg:flex lg:bg-red-500 lg:justify-between">
        <div className="">
            <img src="" alt="email" />
            <p>info@ecommerce.com</p>
        </div>
        <div className="">
        <img src="" alt="Contact" />
            <p>+9866045875</p>
        </div>
    </div>
  )
}

export default TopBar