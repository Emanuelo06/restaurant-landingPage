import restaurantImage1 from '../assets/restaurantImage1.jpg'
import heroPlate from '../assets/heroPlate.jpg'
import Buttons from './Buttons'
const Hero = () => {
  return (
    <div className=" 
    mt-[40px] sm:mt-[100px]   sm:mb-10 p-3 font-[inter] font-medium
    flex justify-between">
      <div className='w-[80%] sm:w-[100%] sm:py-14 py-8'>
         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#101A24]">We provide the<br/> best food for you</h1>
         <p className="text-[12px] sm:text-[15px] md:text-lg lg:text-2xl xl:text-[23px] text-[#5C6574] mb-[20px] font-[inter,sans-serif] mt-[20px] max-w-[80%]">
         Experience vibrant, flavorful dishes made with fresh ingredients and passion, all served in a cozy, elegant atmosphere.</p>
         <Buttons background="#101A24" text="Menu"/>
         <Buttons background="#EA6D27" text="Book a Table"/>
      </div>
      <div className="relative w-full justify-end flex h-[400px] md:h-[600px] lg:mb-30">
        <img
          src={restaurantImage1}
          alt="Restaurant"
          className=" sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[10px] rounded-tr-[10px] h-[80%] object-cover w-[250px]"
        />
        <img
          src={heroPlate}
          alt="Hero Plate"
          className="absolute bottom-30  sm:bottom-10 md:bottom-35 lg:bottom-20 xl:bottom-[-50px] sm:right-60 md:right-70 lg:right-95 xl:right-[450px] right-47 w-25 sm:w-30 md:w-40 lg:w-55 xl:w-75"
        />
      </div>
    </div>
  )
}

export default Hero