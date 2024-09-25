import {FaShoppingBag} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('authtoken');
        navigate('/');
    }
    const cart=useSelector(state=>state.cart.cart.cartItems);
    return (
        <nav className="w-full flex items-center justify-between py-4 px-8 bg-white">
            <div className="text-3xl font-semibold">
                3legant.
            </div>
            <ul className="flex space-x-8">
                <li>
                    <a  className="text-gray-900 font-semibold hover:text-black cursor-pointer" onClick={()=>navigate('/')}>Home</a>
                </li>
                <li>
                    <a  className="text-gray-900 font-semibold hover:text-black cursor-pointer" onClick={()=>handleLogout()}>Logout</a>
                </li>
                
            </ul>
            <div className="flex space-x-6 items-center cursor-pointer" onClick={() => navigate('/cart')}>
                <div className="relative">
                    <FaShoppingBag className="text-xl text-gray-500 hover:text-black cursor-pointer"  />
                    <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-2 h-2 p-2 flex items-center justify-center"> {cart.length} </span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
