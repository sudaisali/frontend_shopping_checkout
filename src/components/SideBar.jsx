import { Link } from 'react-router-dom';
import { CiShoppingBasket } from "react-icons/ci";
import { AiFillProduct } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { IoChevronBackSharp } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from '../context/Cart';

const SideBar = ({isOpen , toggleSidebar}) => {
  const cart = useContext(CartContext)
  return (
    <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 h-screen  ${isOpen ? 'block' : 'hidden'}   md:block` }>
        {isOpen && <button className={`md:hidden`} onClick={toggleSidebar}> <IoChevronBackSharp /></button>}
      <div className="flex items-center justify-center">
        <CiShoppingBasket size={40} />
        <span className="text-xl font-semibold ml-2">Check Out</span>
      </div>
      <nav>
        <ul className='ml-7 space-y-4'>
          <li>
            <div className='flex flex-row items-center gap-1'>
            <AiFillProduct size={20}/>
            <Link to="/product" className="text-white hover:text-gray-400 text-xl">
              Product
            </Link>
            </div>
           
          </li>
          <li>
  <div className='flex flex-row items-center justify-between gap-1'>
    <div className='flex flex-row items-center gap-1'>
    <CiShoppingCart size={20}/>
    <Link to="/add-to-cart" className="text-white hover:text-gray-400 text-xl">
      Cart
    </Link>
    </div>
   <div className='pr-4'>
   {cart.items.length > 0 ? (
      <div className="rounded-full bg-green-500 h-6 w-6 flex items-center justify-center text-white text-xs">
        {cart.items.length}
      </div>
    ) : (
      <div className="rounded-full bg-red-500 h-6 w-6 flex items-center justify-center text-white text-xs">
        {cart.items.length}
      </div>
    )}
   </div>
    
  </div>
</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
