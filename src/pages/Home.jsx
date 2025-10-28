import Item from "../components/Item";
import { products } from "../assets/data/products";
import { SearchContext } from "../components/Search";
import { useContext } from "react";

function Home(props) {
  const { searchItem } = useContext(SearchContext);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  if (searchItem.trim() !== "") {
    return (
      <div className="p-4 flex-1 flex justify-center items-center w-full">
        {filtered.length === 0 ? (
          <p className="flex-1 w-full mt-19 text-center">No products found.</p>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 flex-1 w-full mt-19">
            {filtered.map((product) => (
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
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 flex-1 w-full mt-19">
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
