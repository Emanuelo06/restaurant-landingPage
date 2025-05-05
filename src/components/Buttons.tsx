
interface ButtonProps {
   background: string;
   text: string;
}

const Button = ({ background, text }: ButtonProps) => {
   return (
       <button
           style={{ background }}
           className="text-white p-2 sm:px-[15px] text-xs sm:text-[16px] md:text-lg  lg:text-xl xl:text-2xl md:px-5 xl:px-8 xl:py-3
               tracking-wider shadow-2xl sm:p-3 sm:mr-3
               rounded-tl-2xl rounded-br-2xl rounded-bl-[4px] rounded-tr-[4px mr-[10px]"
       >
           <a href="">{text}</a>
       </button>
   );
}

export default Button;