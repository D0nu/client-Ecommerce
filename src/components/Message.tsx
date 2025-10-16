import { FaArrowRightLong } from "react-icons/fa6";

function Message() {
  return (
    <div className="mt-5 flex flex-row justify-between px-14 items-center">
      <div className="text-start mb-4">
        <h1 className="text-black text-4xl">Set up your Store to run online sales</h1>
        <h2 className="text-xl text-slate-700">Add products easily, run discount sales, ship products <br/> & products analytics</h2>
        <span className="text-green-700 flex gap-8 items-center">Learn More <FaArrowRightLong /></span> 

      </div>

       <div className="md:w-1/2 flex justify-center">
        <img
          src="/imageWork.png"
          alt="E-commerce demo"
          className="w-64 md:w-80 lg:w-96 object-contain transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}

export default Message;
