import { Link } from "react-router-dom";
import socks from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"

function Tracking(props) {

    return <div className="p-10 max-w-[900px] m-auto">
      <div className="">
    <Link to="/pages/Order"  className="underline text-green-600 ">View all orders</Link>
          
        

        <div className="font-bold text-2xl mt-4">
          Arriving on Monday, June 13
        </div>

        <div className="">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div className="">
          Quantity: 1
        </div>
            <div className="w-50">
                <img className="w-full" src={socks} />
            </div>
        

        <div className="flex justify-between fon">
          <div className="font-bold text-2xl">
            Preparing
          </div>
          <div className="font-bold text-2xl text-green-700">
            Shipped
          </div>
          <div className="font-bold text-2xl">
            Delivered
          </div>
        </div>

        <div className="h-5 border rounded-xl">
          <div className="w-1/2 bg-green-700 h-full opacity-80 rounded-xl"></div>
        </div>
      </div>
    </div>
}

export default Tracking;