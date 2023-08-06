import { useState, useEffect } from "react";
import { MenuItem, Checkbox, ListItemText, Select, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { bagsData, shoesData, watchesData, jewelleryData } from "../../utils/db.json";
import "./Filter.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FilterDropdown() {
  const [isActive, setIsActive] = useState(false);
  const [dataMap, setDataMap] = useState({});
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [currentProductsCount, setCurrentProductsCount] = useState(0);

  useEffect(() => {
    setDataMap({
      bags: bagsData,
      shoes: shoesData,
      watches: watchesData,
      jewellery: jewelleryData,
    });
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const slicedData = [];
      Object.keys(dataMap).forEach((category) => {
        slicedData.push(...dataMap[category]);
      });

      const filtered = slicedData.filter(
        (product) =>
          selectedBrands.includes(product.brand) &&
          selectedRatings.includes(product.rating) &&
          selectedPrices.includes(product.price)
      );
      setCurrentProductsCount(filtered.length);
    };

    filterProducts();
  }, [selectedBrands, selectedRatings, selectedPrices, dataMap]);


  const handleBrandChange = (event) => {
    setSelectedBrands(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRatings(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrices(event.target.value);
  };
  const getUniqueBrands = () => {
    const brands = new Set();
    Object.keys(dataMap).forEach((category) => {
      dataMap[category].forEach((product) => {
        brands.add(product.brand);
      });
    });
    return Array.from(brands);
  };

  const getUniqueRatings = () => {
    const ratings = new Set();
    Object.keys(dataMap).forEach((category) => {
      dataMap[category].forEach((product) => {
        ratings.add(product.rating);
      });
    });
    return Array.from(ratings);
  };

  const getUniquePrices = () => {
    const prices = new Set();
    Object.keys(dataMap).forEach((category) => {
      dataMap[category].forEach((product) => {
        prices.add(product.price);
      });
    });
    return Array.from(prices);
  };

  const brandsFilters = getUniqueBrands();
  const ratingsFilters = getUniqueRatings();
  const pricesFilters = getUniquePrices();
    return (
    <div className="filter__dropdown">
                <div className="filter__btn" onClick={() => {setIsActive(!isActive)}} >
                    Filter
                </div>
                    {isActive && (
                        <div className="filter__container">
                        <span className="current_products">Current Products: {currentProductsCount}</span>
                        <div className="filter">
                          <FormControl className="form__control">
                            <InputLabel id="demo-multiple-checkbox-label">Brands</InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={selectedBrands}
                              onChange={handleBrandChange}
                              input={<OutlinedInput label="Tag" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {brandsFilters.map((filter, index) => (
                                <MenuItem key={index} value={filter}>
                                  <Checkbox checked={selectedBrands.includes(filter)} />
                                  <ListItemText primary={filter} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormControl className="form__control">
                            <InputLabel id="demo-multiple-checkbox-label">Rating</InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={selectedRatings}
                              onChange={handleRatingChange}
                              input={<OutlinedInput label="Tag" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {ratingsFilters.map((filter, index) => (
                                <MenuItem key={index} value={filter}>
                                  <Checkbox checked={selectedRatings.includes(filter)} />
                                  <ListItemText primary={filter} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormControl className="form__control">
                            <InputLabel id="demo-multiple-checkbox-label">Price</InputLabel>
                            <Select
                              labelId="demo-multiple-checkbox-label"
                              id="demo-multiple-checkbox"
                              multiple
                              value={selectedPrices}
                              onChange={handlePriceChange}
                              input={<OutlinedInput label="Tag" />}
                              renderValue={(selected) => selected.join(", ")}
                              MenuProps={MenuProps}
                            >
                              {pricesFilters.map((filter, index) => (
                                <MenuItem key={index} value={filter}>
                                  <Checkbox checked={selectedPrices.includes(filter)} />
                                  <ListItemText primary={filter} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                        
                            )}
        </div>
    )
}