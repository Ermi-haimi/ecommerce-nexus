function ItemCheckout(props) {

  return <div className="p-5 border border-gray-300 rounded-sm">
    <p className="font-bold text-green-600 text-xl ">Delivery date {props.deliveryDate}</p>
    <div className=" border-gray-400 p-5">
            <div className=" gap-y-6 grid grid-cols-[140px_1fr] lg:grid-cols-[140px_1fr_1fr] lg:gap-2">
              <img className="w-30 "
                src={props.imageSource} />

              <div className=" ">
                <div className="font-bold">
                  {props.itemName}
                </div>
                <div className="">
                  {props.price}
                </div>
                <div className="*:mr-3">
                  <span>Quantity: <span className="">{ props.quantity}</span>
                  </span>
                  <span className="text-green-500 hover:text-green-400 cursor-pointer">
                    Update
                  </span>
                  <span className="text-green-500 hover:text-green-400 cursor-pointer">
                    Delete
                  </span>
                </div>
            </div>

              <div className="w-60">
                <div className="font-bold">
                  Choose a delivery option:
                </div>

                <div className="flex gap-4">
                  <input type="radio" className="w-[18px]"
                    name={props.radioName} />
                  <div className="">
                    <div className="font-bold">
                      Tuesday, June 21
                    </div>
                    <div className="text-gray-500">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <input type="radio"  className="w-[18px]"
                    name={props.radioName} />
                  <div>
                    <div className="font-bold">
                      Wednesday, June 15
                    </div>
                    <div className="text-gray-500">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <input type="radio" className="w-[18px]"
                    name={props.radioName} />
                  <div>
                    <div className="font-bold">
                      Monday, June 13
                    </div>
                    <div className="text-gray-500">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
      </div>
      </div>
          </div>
}

export default ItemCheckout;