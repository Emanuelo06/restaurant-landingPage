import SecondBackground from '../assets/secondBackground.jpg'
import DishCard from './DishCard'
import firstDish from '../assets/firstDish.jpg'
import secondDish from '../assets/secondDish.jpg'
import thirdDish from '../assets/thirdDish.jpg'
import fourthDish from '../assets/fourthDish.jpg'


const Dishes = () => {
  
   const dishes = [
      {id:1,
       image:firstDish, 
       title:"Lumpia with Suace",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt magnam error harum quaerat labore explicabo.",
       price: 20
      },
      {image:secondDish, 
       id:2,
       title:"Fish and Veggie",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt magnam error harum quaerat labore explicabo.",
       price: 12
      },
      {image:thirdDish, 
       id:3,
       title:"Tofu Chili",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt magnam error harum quaerat labore explicabo.",
       price: 15
      },
      {image:fourthDish, 
       id:4,
       title:"Egg and Cocumber",
       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt magnam error harum quaerat labore explicabo.",
       price: 8
      }
   ]
  return (
    <div id='dishes'
     className='w-full  pt-[30px] pb-[30px]' 
    style={{ backgroundImage: `url(${SecondBackground})`}}>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[inter] font-bold text-center text-[#101A24]'>Our Special Dishes</h1>
      <p className='text-md sm:text-[15px] md:text-lg lg:text-2xl text-center text-[#5C6574]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
  {dishes.map((dish) => (
    <DishCard
      key={dish.id}
      image={dish.image}
      title={dish.title}
      description={dish.description}
      price={dish.price}
    />
      ))}
   </div>
    </div>
    
  )
}

export default Dishes