 
 interface DishCardProps {
   image: string;
   title: string;
   description: string;
   price: number;
 }
 
 const DishCard = ({ image, title, description, price }: DishCardProps) => {
   return (
     <div className="relative bg-white shadow-xl  pt-16 px-4 pb-6 rounded-2xl text-center w-[250px] lg:w-[300px] mx-auto mt-[80px]">
       {/* Absolute Image */}
       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-30 lg:w-45  sm:h-30 lg:h-45 h-24">
         <img
           src={image}
           alt={title}
           className="w-full h-full object-cover rounded-full border-4 border-white shadow"
         />
       </div>
 
       {/* Content */}
       <h3 className="mt-4 font-semibold text-lg sm:text-2xl lg:text-3xl">{title}</h3>
       <p className="text-gray-600 text-sm sm:text-base lg:text-xl mt-1">{description}</p>
       <p className="mt-2 font-bold text-green-600 text-md lg:text-xl">${price.toFixed(2)}</p>
     </div>
   );
 };

 export default DishCard
 
