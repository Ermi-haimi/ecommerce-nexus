function Item(props) {

    return <div className="flex flex-col border items-center p-5">
        <div className="p-3">
            <img src={props.imageSource} alt={ props.imageName} className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
            <h2>{props.itemDescription}</h2>
            <div className=""><img src={props.ratingIcon} alt="Rating" /> <p>{ props.ratingValue}</p></div>
            <p>{props.price}</p>
            <div className="">
            <select className="border">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
            <button className="bg-green-700 text-white p-1">Add to Cart</button>
        </div>
    </div>
}

export default Item;