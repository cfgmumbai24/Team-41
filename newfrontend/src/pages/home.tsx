import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCartHandler=()=>{};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
        productId="shghsf"
        name="Dairy goat"
        price={534}
        stock={454}
        handler={addToCartHandler}
        photo="https://i.pinimg.com/736x/44/dc/99/44dc99df7772f9badd3dc3f97e742bad.jpg"
        />
      </main>
      </div>
  )
}

export default Home