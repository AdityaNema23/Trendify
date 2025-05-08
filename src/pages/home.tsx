import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {

  const addToCart = () => {}
  return (
    <div className="home">
      <section></section>

      <h1>
        Lastest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
      
        <ProductCard name= "Macbook" price = {2323} stock = {3232 } productId="23232" photo = "https://c.media-amazon.com/images/I/711NKCLZfaL._SY450_.jpg" handler={addToCart}/>
      </main>
    </div>
  );
};

export default Home;
