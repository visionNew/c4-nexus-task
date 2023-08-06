import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { bagsData, shoesData, watchesData, jewelleryData } from "../../utils/db.json";

const BasicRating = ({ productId, category }) => {
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    const fetchRating = () => {
      let data;
      switch (category) {
        case 'Bags':
          data = bagsData.find(item => item.productId === productId);
          break;
        case 'Shoes':
          data = shoesData.find(item => item.productId === productId);
          break;
        case 'Watches':
          data = watchesData.find(item => item.productId === productId);
          break;
        case 'Jewellery':
          data = jewelleryData.find(item => item.productId === productId);
          break;
        default:
          break;
      }

      if (data && data.rating) {
        setRatings(data.rating);
      }
    };

    fetchRating();
  }, [category, productId]);

  return (
    <Box>
      <Rating
        name={`product-rating-${productId}`}
        value={ratings}
        readOnly
      />
    </Box>
  );
}

export default BasicRating;