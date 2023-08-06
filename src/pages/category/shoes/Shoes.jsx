import Filter from "../../../components/filter/Filter"
import Product from "../../../components/product/Product"

const Shoes = () => {
  return (
    <section>
      <div className="container">
        <h2>Shoes</h2>
        <div className="container__content">
          <Filter />
          <Product selectedCategory="shoes" />
        </div>
      </div>
    </section>
  )
}

export default Shoes