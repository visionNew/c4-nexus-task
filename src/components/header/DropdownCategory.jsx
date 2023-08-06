import { useState } from "react";
import { NavLink } from "react-router-dom";


const DropdownCategory = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
  return (
    <div className="dropdown__category">
                  <button className="dropdown__category__btn" onClick={() => {setIsActive(!isActive)}} >Category</button>
                  {
                    isActive && ( <ul className="dropdown__category__content container" selected={selected} setSelected={setSelected} >
                                    <li className="dropdown__category__item active" setSelected={setSelected} onClick={() => { setIsActive(false);}} >
                                      <NavLink to="/bags">
                                        Bags
                                      </NavLink>
                                    </li>
                                    <li className="dropdown__category__item active" setSelected={setSelected} onClick={() => { setIsActive(false);}}>
                                      <NavLink to="/shoes">
                                        Shoes
                                      </NavLink>
                                    </li>
                                    <li className="dropdown__category__item active" setSelected={setSelected} onClick={() => { setIsActive(false);}}>
                                      <NavLink to="/watches">
                                        Watches
                                      </NavLink>
                                    </li>
                                    <li className="dropdown__category__item active" setSelected={setSelected} onClick={() => { setIsActive(false);}}>
                                      <NavLink to="/jewellery">
                                        Jewellery
                                      </NavLink>
                                    </li>
                                  </ul>
                  )}
                </div>
  )
}

export default DropdownCategory