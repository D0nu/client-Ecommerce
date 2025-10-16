import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-green-400 w-full py-4 px-8 flex justify-between items-center">
      <Link to="/">
        <div className="text-xl font-bold text-white">
            TRADECEN
        </div>
      </Link>
        <div className="flex gap-3 text-white">
            <Link to="/products">
             <div>Products</div>
            </Link>
            <Link to="/about">
            <div>AboutUs</div>
            </Link>
            <Link to="/contact">
            <div>ContactUs</div>
            </Link>
            
        </div>
        <div className="flex gap-2 items-center">
            <div>
                <Link to="/sign-up">
                <button className="bg-white text-green-400 p-3 rounded-xl">SignUp</button>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
