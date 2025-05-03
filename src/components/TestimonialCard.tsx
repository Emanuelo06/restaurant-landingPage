
interface TestimonialProps{
   image:string,
   name:string,
   text:string
}
const TestimonialCard = ({image, name, text}:TestimonialProps) => {
  
   return (
      <div className="relative  bg-white shadow-sm pt-16 px-4 pb-6 rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl text-center w-full w-250px sm:w-[300px] md:w-[350px] xl:w-[500px] md:h-70 xl:h-90 mt-[80px]">
      {/* Absolute Image */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-30 lg:w-35 xl:w-45 h-24 lg:h-35 xl:h-45 sm:h-30">
        <img
          src={image}
          className="w-full  h-full object-cover rounded-full border-4 border-white shadow"
        />
      </div>

      {/* Content */}
      <h3 className="mt-4 sm:text-2xl md:text-3xl xl:text-5xl font-semibold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm md:text-lg xl:text-3xl sm:text-[15px] mt-1">{text}</p>
    </div>
  );
};
  

export default TestimonialCard