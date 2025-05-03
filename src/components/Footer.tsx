import FooterImg from '../assets/Footer.jpg'
import RestaurantIcon from '../assets/restaurantIcon.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div style={{backgroundImage:`url(${FooterImg})`}}
    className='w-full h-[100px] bg-cover py-10 flex flex-col justify-between '>
      <div className='w-full flex justify-between mb-4'>

      
         <div className='px-4 sm:w-[70%]'>
            <div className='flex items-center'>
               <img src={RestaurantIcon} alt="Restaurant logo" className="w-[35px] sm:w-15 lg:w-20 translate-y-[-3px]"/>
               <h1 className=' font-extrabold text-base sm:text-xl lg:text-3xl text-center tracking-wider font-[roboto]'>restaurant</h1>
            </div>
            <p className='max-w-50 sm:max-w-70 lg:max-w-90 text-xs sm:text-sm lg:text-lg text-[#5C6574] pl-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
         </div>
         <div className='h-fit px-4'>
            <h1 className='font-semibold text-sm sm:text-lg lg:text-2xl sm:mt-5 font-[poppins]'>FOLLOW US</h1>
            <div className='flex justify-between mt-2 lg:text-2xl'>
              
                  <a href="#"><FaFacebook className='w-[100%] sm:w-[40px] lg:w-200px cursor-pointer'/></a>
                  <a href="#"><FaTwitter className='w-[100%] cursor-pointer'/></a>
                  <a href="#"> <FaInstagram className='w-[100%] cursor-pointer'/></a>
            </div>
         </div>
         </div>
         <div className='w-full bg-gray-300'>
            <p className='text-xs lg:text-lg mt-2 text-gray-800 px-3 pb-1 text-center'>@2025 Developed by Emanuele Czofei</p>
         </div>
    </div>
  )
}

export default Footer