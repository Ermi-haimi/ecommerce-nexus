import Item from "../components/Item";
import socks from "../assets/images/products/athletic-cotton-socks-6-pairs.jpg"
import basketball from "../assets/images/products/intermediate-composite-basketball.jpg"
import tshirt from "../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
import rating1 from "../assets/images/ratings/rating-45.png";
import rating2 from "../assets/images/ratings/rating-40.png";

function Home(props) {

    return <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <Item itemDescription="Black and Gray Athletic Cotton Socks - 6 Pairs" imageSource={socks} ratingIcon={ rating1} ratingValue={87} price="$10.90"/>
        <Item itemDescription="Intermediate Size Basketball" imageSource={basketball} ratingIcon={rating2} ratingValue={127} price="$20.95"/>
        <Item itemDescription="Adults Plain Cotton T-Shirt - 2 Pack" imageSource={tshirt} ratingIcon={ rating1} ratingValue={56} price="$7.99"/>
    </div>
}

export default Home;