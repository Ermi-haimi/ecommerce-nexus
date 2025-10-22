import cartIcon from '../assets/images/icons/cart-icon.png'
import { Link } from 'react-router-dom';
function SingleOrder(props) {

    return <div className='flex gap-4'>
        <div className="w-40 p-6">
                    <img src={props.imageSource} className='' />
                </div>

                <div className="pt-6">
                    <div className="">
                        {props.itemDescription}
                    </div>
                    <div className="">
                        Arriving on: {props.deliveryDate}
                    </div>
                    <div className="">
                        Quantity: {props.quantity}
                    </div>
                    <button className="bg-green-600 flex h-6 ">
                        <img className="" src={cartIcon} />
                        <span className="">Add to Cart</span>
                    </button>
                </div>

                <div className="">
            <Link to="/pages/Tracking">
                <button className="border p-1 rounded-sm">
                    Track package
                    </button>
            </Link>
                </div>
    </div>
}

export default SingleOrder;