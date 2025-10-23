import { Link } from "react-router-dom";
import cart from "../assets/images/icons/cart-icon.png";
import logo from "../assets/images/logo-white.png"
import arrow from "../assets/images/icons/search-icon.png"


function Header() {

    return <div className="flex justify-around bg-green-900 p-5 items-center gap-3  ">
        <Link to="/" className="text-white"><img src={logo} className="w-40 hover:border p-2" alt="" /></Link>
        <div className="flex flex-1 justify-center">
            <input type="text" className="bg-white p-2 h-11 rounded-sm rounded-r-none w-full max-w-[850px] " placeholder="Search" />
            <div className="p-2 w-10  bg-green-200 rounded-r-sm"><img src={ arrow} className=" "/></div>
            
        </div>
        
        <Link to="/pages/Order" className="text-white font-bold hover:border p-1 h-full">Order</Link>
        <Link to="/pages/Checkout" className="text-white">
            <div className="flex hover:border p-1 relative">
                <div>
                    <img src={cart} className="w-10" alt="" />
                    <p className="absolute top-1 text-green-900 left-6 font-bold">3</p>
                </div>
                
                <p className="font-bold">Cart</p>
            </div></Link>
    </div>
}

export default Header;