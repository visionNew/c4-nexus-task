import Filter from "../../../components/filter/Filter"
import Product from "../../../components/product/Product"


const Bags = () => {
  return (
    <section>
      <div className="container">
        <h2>Bags</h2>
        <div className="container__content">
          <Filter />
          <Product selectedCategory="bags" />
        </div>
      </div>
    </section>
  )
}

export default Bags