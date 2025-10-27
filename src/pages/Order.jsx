import cartIcon from "/images/icons/cart-icon.png";
import { Link } from "react-router-dom";
import OrderList from "../components/OrderList";
import SingleOrder from "../components/SingleOrder";
import socks from "/images/products/athletic-cotton-socks-6-pairs.jpg"
import basketball from "/images/products/intermediate-composite-basketball.jpg"
import tshirt from "/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"


function Order(props) {

    return <div className="flex flex-col gap-5 ">
        <h2 className="text-2xl font-bold m-1 mt-4">Your Orders</h2>
                <OrderList orderedDate="August 12" totalPrice ="$35.06" orderId="27cba69d-4c3d-4098-b42d-ac7fa62b7664" >
            <SingleOrder imageSource={socks} itemDesscription="Black and Gray Athletic Cotton Socks - 6 Pairs" deliveryDate="August 15" quantity="1"/>
            <SingleOrder imageSource={tshirt} itemDesscription="Adults Plain Cotton T-Shirt - 2 Pack" deliveryDate="August 19" quantity="2"/>
        </OrderList>
        
        <OrderList orderedDate="June 10" totalPrice ="$41.90" orderId="b6b6c212-d30e-4d4a-805d-90b52ce6b37d">
            <SingleOrder imageSource={basketball} itemDesscription="Intermediate Size Basketball" deliveryDate="June 17" quantity="2"/>
                </OrderList>
            </div>
}

export default Order;