import ItemCheckout from "../components/ItemCheckout";
import socks from "/images/products/athletic-cotton-socks-6-pairs.jpg";
import basketball from "/images/products/intermediate-composite-basketball.jpg";

function Checkout(props) {
  const st = "flex justify-between flex-1 w-full ";
  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl mb-7">Review your order</h2>
      <div className="p-6 grid gap-6 max-w-6xl m-auto lg:grid-cols-[1fr_300px] ">
        <ItemCheckout
          deliveryDate="Tuesday, June 21"
          imageSource={socks}
          itemName="Black and Gray Athletic Cotton Socks - 6 Pairs"
          price="$10.90"
          quantity="2"
          radioName="delivery-1"
        />
        <div className="border border-gray-300 flex flex-col p-4 gap-3 w-full -order-1 lg:order-0 rounded-sm ">
          <h3 className="font-bold text-xl">Payment Summary</h3>
          <div className={st}>
            <div>Items (3):</div>
            <div className="">$42.75</div>
          </div>

          <div className={st}>
            <div>Shipping &amp; handling:</div>
            <div className="">$4.99</div>
          </div>

          <div className={st}>
            <div>Total before tax:</div>
            <div className="">$47.74</div>
          </div>

          <div className={st}>
            <div>Estimated tax (10%):</div>
            <div className="">$4.77</div>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between text-green-600 font-bold text-xl">
            <div>Order total:</div>
            <div className="">$52.51</div>
          </div>

          <button className="bg-green-700 p-2 cursor-pointer text-white rounded-sm hover:opacity-80">
            Place your order
          </button>
        </div>
        <ItemCheckout
          deliveryDate="Wednesday, June 15"
          imageSource={basketball}
          itemName="Intermediate Size Basketball"
          price="$20.95"
          quantity="1"
          radioName="delivery-2"
        />
      </div>
    </div>
  );
}

export default Checkout;
