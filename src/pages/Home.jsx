import Item from "../components/Item";
// import socks from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"
// import basketball from "../assets/images/products/intermediate-composite-basketball.jpg"
// import tshirt from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
// import rating1 from "/images/ratings/rating-45.png";
// import rating2 from "/images/ratings/rating-40.png";
import { products } from "../assets/data/products";

function Home(props) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 flex-1 w-full">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            itemDescription={product.name}
            imageSource={product.image}
            ratingIcon={`/images/ratings/rating-${
              product.rating.stars * 10
            }.png`}
            ratingValue={product.rating.count}
            price={(product.priceCents / 100).toFixed(2)}
          />
        );
      })}
    </div>
  );
}

export default Home;
