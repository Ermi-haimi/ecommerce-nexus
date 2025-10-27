import Item from "../components/Item";
// import socks from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"
// import basketball from "../assets/images/products/intermediate-composite-basketball.jpg"
// import tshirt from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
// import rating1 from "/images/ratings/rating-45.png";
// import rating2 from "/images/ratings/rating-40.png";
import { products } from "../assets/data/products";

function Home(props) {

    return <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {/* <Item itemDescription="Black and Gray Athletic Cotton Socks - 6 Pairs" imageSource={socks} ratingIcon={ rating1} ratingValue={87} price="$10.90"/>
        <Item itemDescription="Intermediate Size Basketball" imageSource={basketball} ratingIcon={rating2} ratingValue={127} price="$20.95"/>
        <Item itemDescription="Adults Plain Cotton T-Shirt - 2 Pack" imageSource={tshirt} ratingIcon={rating1} ratingValue={56} price="$7.99" /> */}
        {products.map((product) => {
            return(
                <Item key={product.id} itemDescription={product.name} imageSource={product.image} ratingIcon={`/images/ratings/rating-${product.rating.stars *10}.png`} ratingValue={product.rating.count} price={(product.priceCents/100).toFixed(2)} />
        )})}
    </div>
}

export default Home;