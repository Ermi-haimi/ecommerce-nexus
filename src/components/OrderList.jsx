function OrderList(props) {

    return <div className="  m-auto flex flex-col">

                <div className="border border-gray-300 flex justify-between p-5">
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
                    <div className="flex flex-col border border-t-0 border-gray-300">
                        {props.children}
                    </div>
        
            
            </div>
}

export default OrderList;