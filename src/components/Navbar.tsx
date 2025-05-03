import RestaurantIcon from '../assets/restaurantIcon.jpg'

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between'>
      <div className='flex items-center'>
         <img src={RestaurantIcon} alt="Restaurant logo" className="w-[35px] sm:w-[50px] lg:w-[75px] translate-y-[-3px]"/>
         <h1 className=' font-extrabold text-md sm:text-lg lg:text-3xl text-center tracking-wider font-[roboto]'>restaurant</h1>
      </div>
      <ul className='flex gap-2 sm:gap-4 text-sm sm:text-md '>
         <li className='self-center cursor-pointer sm:text-lg lg:text-2xl '><a href="#">Menu</a></li>
         <li className='self-center cursor-pointer sm:text-lg lg:text-2xl'><a href="#">Events</a></li>
         <li className='self-center cursor-pointer sm:text-lg lg:text-2xl'><a href="#">Gallery</a></li>
         <li className='self-center cursor-pointer sm:text-lg lg:text-2xl'><a href="#">About</a></li>
         <li className='self-center cursor-pointer sm:text-lg lg:text-2xl'><a href="#">Contact</a></li>
      </ul>
      <button className='bg-[#EA6D27] p-2 px-3 text-white sm:text-[16px] lg:text-2xl sm:px-4 lg:px-6 font-[inter] rounded-tl-2xl rounded-br-2xl rounded-bl-[4px] rounded-tr-[4px] shadow-2xl'>Book a Table</button>
    </nav>
  )
}

export default Navbar