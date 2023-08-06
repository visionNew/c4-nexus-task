import Filter from "../../../components/filter/Filter"
import Product from "../../../components/product/Product"

const Watches = () => {
  return (
    <section>
      <div className="container">
        <h2>Watches</h2>
        <div className="container__content">
          <Filter />
          <Product selectedCategory="watches" />
        </div>
      </div>
    </section>
  )
}

export default Watches