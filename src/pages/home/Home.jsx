import { useState, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import Product from "../../components/product/Product";
import { bagsData, shoesData, watchesData, jewelleryData } from "../../utils/db.json";
import "./Home.css";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts([...bagsData, ...shoesData, ...watchesData, ...jewelleryData]);
  }, []);

  return (
    <section>
      <div className="container">
        <h2>Products</h2>
        <div className="container__content">
          <Filter onFilterChange={setFilteredProducts} />
          <Product filteredProducts={filteredProducts} />
        </div>
      </div>
    </section>
  );
};

export default Home;
