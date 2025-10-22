import { Link } from "react-router-dom";


function Header() {

    return <div className="flex justify-around bg-green-800 p-5 ">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/pages/Order" className="text-white">Order</Link>
        <Link to="/pages/Checkout" className="text-white">Checkout</Link>
        <Link to="/pages/Tracking" className="text-white">Tracking</Link>
    </div>
}

export default Header;