function ItemCheckout(props) {

    return <div className="">
              <p>Delivery date {props.deliveryDate}</p>
            

            <div className="">
              <img className="w-50"
                src={props.imageSource} />

              <div className="">
                <div className="">
                  {props.itemName}
                </div>
                <div className="">
                  {props.price}
                </div>
                <div className="">
                  <span>Quantity: <span className="">{ props.quantity}</span>
                  </span>
                  <span className="">
                    Update
                  </span>
                  <span className="">
                    Delete
                  </span>
                </div>
              </div>

              <div className="">
                <div className="e">
                  Choose a delivery option:
                </div>

                <div className="">
                  <input type="radio" className=""
                    name="delivery-option-2" />
                  <div>
                    <div className="">
                      Tuesday, June 21
                    </div>
                    <div className="">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className="">
                  <input type="radio" checked className=""
                    name="delivery-option-2" />
                  <div>
                    <div className="ion-date">
                      Wednesday, June 15
                    </div>
                    <div className="ion-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className="">
                  <input type="radio" className=""
                    name="delivery-option-2" />
                  <div>
                    <div className="">
                      Monday, June 13
                    </div>
                    <div className="">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
}

export default ItemCheckout;