import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Dropdown from './Dropdown'; 
import DropdownCategory from './DropdownCategory'; 
import "./Navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState(""); //Function for Nav select

  return (
    <section className="section__header">
      <header>
        <div className="container header__container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  Products
                </NavLink>
              </li>
              <li>
              <DropdownCategory selected={selected} setSelected={setSelected} />
              </li>
              <li>
                <NavLink to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/news">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <Dropdown selected={selected} setSelected={setSelected} />
            <div className="user">
              <span className='btn'><ShoppingCartIcon sx={{ fontSize: 30 }} /> </span>
              <span className='btn'><PersonIcon sx={{ fontSize: 30 }} /></span>
            </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
