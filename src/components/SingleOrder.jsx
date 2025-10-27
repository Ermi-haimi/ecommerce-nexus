import cartIcon from '/images/icons/cart-icon.png'
import { Link } from 'react-router-dom';
function SingleOrder(props) {

    return <div className='grid grid-cols-[160px_1fr] min-[800px]:grid-cols-3 gap-4  p-6 '>
        <div className="w-40 p-6 row-span-2">
                    <img src={props.imageSource} className='' />
                </div>

                <div className="pt-">
                    <div className="">
                        {props.itemDescription}
                    </div>
                    <div className="">
                        Arriving on: {props.deliveryDate}
                    </div>
                    <div className="">
                        Quantity: {props.quantity}
                    </div>
                    <button className="bg-green-600 flex  text-white text-sm  p-1 rounded-sm">
                        <img className="w-5 h-5  " src={cartIcon} />
                        <span className="">Add to Cart</span>
                    </button>
                </div>

                
            <Link to="/pages/Tracking">
                <button className="border border-gray-400 p-1 rounded-sm m-auto min-[800px]:w-45">
                    Track package
                    </button>
            </Link>
                
    </div>
}

export default SingleOrder;