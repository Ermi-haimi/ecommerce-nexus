function Item(props) {
  return (
    <div className="flex flex-col border border-gray-300 items-center p-5">
      <div className="p-3">
        <img
          src={props.imageSource}
          alt={props.imageName}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1 justify-between">
        <h2>{props.itemDescription}</h2>

        <div className="flex">
          <img src={props.ratingIcon} alt="Rating" className="w-27" />
          <p className="text-green-600">{props.ratingValue}</p>
        </div>

        <p className="font-bold">{props.price}</p>

        <div className="">
          <select className="border border-gray-400 p-0.5 rounded-sm">
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
        <button className="bg-green-700 text-white p-1 rounded-sm opacity-95 mt-9 hover:opacity-90 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
