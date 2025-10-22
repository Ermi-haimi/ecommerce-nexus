function OrderList(props) {

    return <div className=" max-w-2xl m-auto">

                <div className="flex justify-between border">
                    <div className="">
                        <div className="font-bold">Order Placed:</div>
                        <div>{props.orderedDate}</div>
                    </div>
                    <div className="">
                        <div className="">Total:</div>
                        <div>{props.totalPrice}</div>
                    </div>
                    

                    <div className="">
                    <div className="">Order ID:</div>
                    <div>{props.orderId}</div>
                    </div>
        </div>
        <div className="flex flex-col  border-1">
            {props.children}
        </div>
        
            
            </div>
}

export default OrderList;