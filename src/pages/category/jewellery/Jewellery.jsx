import Filter from "../../../components/filter/Filter"
import Product from "../../../components/product/Product"

const jewellery = () => {
  return (
    <section>
      <div className="container">
        <h2>Jewellery</h2>
        <div className="container__content">
          <Filter />
          <Product selectedCategory="jewellery" />
        </div>     
        </div>
    </section>
  )
}

export default jewellery