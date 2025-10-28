import { Link } from "react-router-dom";
import cart from "/images/icons/cart-icon.png";
import logo from "/images/logo-white.png";
import arrow from "/images/icons/search-icon.png";
import { SearchContext } from "./Search";
import { useContext } from "react";

function Header() {
  const { setSearchItem } = useContext(SearchContext);
  return (
    <div className="flex justify-around bg-green-900 p-3 items-center gap-3 fixed top-0 left-0 right-0 z-100 ">
      <Link to="/" className="text-white">
        <img src={logo} className="w-40 hover:border p-2" alt="" />
      </Link>
      <div className="flex flex-1 justify-center">
        <input
          type="text"
          className="bg-white p-2 h-11 rounded-sm rounded-r-none w-full max-w-[850px] "
          placeholder="Search"
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <div className="p-2 w-10  bg-green-200 rounded-r-sm">
          <img src={arrow} className=" " />
        </div>
      </div>

      <Link
        to="/pages/Order"
        className="text-white font-bold hover:border p-1 h-full"
      >
        Order
      </Link>
      <Link to="/pages/Checkout" className="text-white">
        <div className="flex hover:border p-1 relative">
          <div>
            <img src={cart} className="w-10" alt="" />
            <p className="absolute top-1 text-green-900 left-6 font-bold">3</p>
          </div>

          <p className="font-bold">Cart</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
