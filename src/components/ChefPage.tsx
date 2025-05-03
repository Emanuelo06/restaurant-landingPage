import ChefBackground from '../assets/ChefBackground.jpg'
import Chef from "../assets/chef.jpg"
import ChefText from './ChefText'
const ChefPage = () => {

  const descriptionText="Lorem ipsum dolor sit amet, consectetur"
  return (
    <div id='chef' 
    style={{backgroundImage:`url(${ChefBackground})`}}
    className='w-full pb-10 bg-cover bg-center flex flex-col justify-between p-4 pt-10 xl:mb-0  sm:mb-10'>
      <div className='sm:w-[50%] text-center'>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-[inter] text-[#101A24] mt-10 lg:mt-25'>Our Expects Chef</h1>
        <p className='text-xs sm:text-[15px] md:text-lg lg:text-2xl xl:text-3xl text-[#5c6574]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus iusto, adipisci consectetur labore illum qui pariatur minima temporibus.</p>
        <div>
          <ChefText descriptionText={descriptionText}/>
          <ChefText descriptionText={descriptionText}/>
          <ChefText descriptionText={descriptionText}/>
        </div>
      </div>
      <div className='flex justify-center sm:justify-end items-end'>
      <img src={Chef} alt="chef"  
        className='w-[280px] md:w-85 lg:w-[500px] xl:w-[600px] mt-5'/>
      </div>

    </div>
  )
}

export default ChefPage