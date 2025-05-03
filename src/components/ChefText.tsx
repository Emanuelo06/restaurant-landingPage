import Check from "../assets/Check.svg"
interface ChefTextDiv {
   descriptionText:string
}

const ChefText = ({descriptionText}:ChefTextDiv) => {
  return (
    <div className="flex items-center gap-3 mt-3"> 
      <div className="bg-[#EA6D27] w-fit rounded-[200px] p-1">
         <img src={Check} className="w-[18px] sm:w-[24px] lg:w-[36px]"/>
      </div>
      <p className="text-sm sm:text-lg lg:text-2xl"> {descriptionText}</p>
   </div>
  )
}

export default ChefText