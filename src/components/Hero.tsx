import restaurantImage1 from '../assets/restaurantImage1.jpg'
import heroPlate from '../assets/heroPlate.jpg'
import Buttons from './Buttons'
const Hero = () => {
  return (
    <div id='home' 
    className=" 
    mt-[40px] sm:mt-[100px]   sm:mb-10 p-3 font-[inter] font-medium
    flex justify-between">
      <div className='w-[80%] sm:w-[100%] sm:py-14 py-8'>
         <h1 className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#101A24]">We provide the<br/> best food for you</h1>
         <p className="text-[10px] sm:text-[15px] md:text-lg lg:text-2xl xl:text-[23px] text-[#5C6574] mb-[20px] font-[inter,sans-serif] mt-[20px] max-w-[80%]">
         Experience vibrant, flavorful dishes made with fresh ingredients and passion, all served in a cozy, elegant atmosphere.</p>
         <Buttons background="#101A24" text="Menu"/>
         <Buttons background="#EA6D27" text="Book a Table"/>
      </div>
      <div className="relative w-full justify-end flex h-[400px] md:h-[600px] lg:mb-30">
        <img
          src={restaurantImage1}
          alt="Restaurant"
          className="w-[180px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[10px] rounded-tr-[10px]  object-cover "
        />
        <img
          src={heroPlate}
          alt="Hero Plate"
          className="absolute bottom-30 sm:bottom-20   md:bottom-35 lg:bottom-20 xl:bottom-[-50px]  right-35 sm:right-50 md:right-70 lg:right-95 xl:right-[450px]  sm:w-25 md:w-30 lg:w-40 xl:w-55 2xl:w-75 w-20"
        />
      </div>
    </div>
  )
}

export default Hero