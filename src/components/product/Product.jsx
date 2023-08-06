import { useState, useEffect, useRef } from "react";
import BasicRating from '../rating/Rating';
import { bagsData, shoesData, watchesData, jewelleryData } from "../../utils/db.json";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import './Product.css';
import { useLocation } from "react-router-dom";

const Product = () => {
  const [dataMap, setDataMap] = useState({});
  const [showMore, setShowMore] = useState(5);
  const [sortingOption, setSortingOption] = useState("");
  const [showAlertMap, setShowAlertMap] = useState({});
  const productRef = useRef(null);

  useEffect(() => {
    setDataMap({
      bags: bagsData,
      shoes: shoesData,
      watches: watchesData,
      jewellery: jewelleryData,
    });
  }, []);

  const location = useLocation();
  const path = location.pathname;

  const pathParts = path.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];

  const category = lastPathPart === "bags"
    ? "bags"
    : lastPathPart === "shoes"
    ? "shoes"
    : lastPathPart === "jewellery"
    ? "jewellery"
    : lastPathPart === "watches"
    ? "watches"
    : "default";
    
    const isDefaultCategory = category === "default";

    const slicedData = isDefaultCategory
    ? Object.values(dataMap).flatMap(categoryData => categoryData.slice(0, showMore))
    : dataMap[category] ? dataMap[category].slice(0, showMore) : [];

  const sortedData = () => {
    switch (sortingOption) {
      case "az":
        return slicedData.sort((a, b) => a.title.localeCompare(b.title));
      case "za":
        return slicedData.sort((a, b) => b.title.localeCompare(a.title));
        case "priceAsc":
          return slicedData.sort((a, b) => {
            const aPrice = a.discountedPrice || a.price;
            const bPrice = b.discountedPrice || b.price;
            return aPrice - bPrice;
          });
        case "priceDesc":
          return slicedData.sort((a, b) => {
            const aPrice = a.discountedPrice || a.price;
            const bPrice = b.discountedPrice || b.price;
            return bPrice - aPrice;
          });
      default:
        return slicedData;
    }
  };

  const loadMore = () => {
    setShowMore(showMore + 2);
    if (productRef.current) {
      productRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleAddToCart = (productId) => {
    setShowAlertMap(prevState => ({
      ...prevState,
      [productId]: true,
    }));
    setTimeout(() => {
      setShowAlertMap(prevState => ({
        ...prevState,
        [productId]: false,
      }));
    }, 1500);
  };

  const renderPrice = (item) => {
    if (item.discountedPrice && item.discountedPrice < item.price) {
      return (
        <div className="product__price">
          <span className="original-price"><del>{item.price.toFixed(2)}$</del></span>
          <del className="discounted-price">{item.discountedPrice.toFixed(2)}$</del>
        </div>
      );
    } else {
      return <span>${item.price.toFixed(2)}</span>;
    }
  };

  return (
    <div className="product__container">
      <div className="product__sort">
        <select
          value={sortingOption}
          onChange={(e) => setSortingOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="az">Alphabetical A-Z</option>
          <option value="za">Alphabetical Z-A</option>
          <option value="priceAsc">Price Ascending</option>
          <option value="priceDesc">Price Descending</option>
        </select>
      </div>
      <div className="product__items">
        {sortedData().map((item) => (
          <article className="product__item" key={item.productId}>
            <div className="product__item-image">
              <img
                src={`/src/assets/${item.category}/${item.img_name}`}
                alt="Product Img"
              />
              <span className="product__rating"><BasicRating productId={item.productId} category={item.category} /></span>
            </div>
            <h4>{item.title}</h4>
            <h5>{item.description}</h5>
            <div className="product__buy">
              {renderPrice(item)}
              <button className="add__icon btn" onClick={() => handleAddToCart(item.productId)} ><AddShoppingCartIcon sx={{ fontSize: 30 }} /></button>
              {showAlertMap[item.productId] && (
                <Alert variant="filled" severity="success" className="product__buy__alert">
                  Added Successfully
                </Alert>
              )}
            </div>
          </article>
        ))}
      </div>
      {showMore && (
        <button ref={productRef} onClick={loadMore} className="loadmore__btn btn">
          <span>Load More</span>
        </button>
      )}
    </div>
  );
};

export default Product;
