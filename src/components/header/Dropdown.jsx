import './dropdown.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import DropdownCategory from './DropdownCategory';

function Dropdown () {
    const [isActive, setIsActive] = useState(false); //Function for Open Dropdown
    const [selected, setSelected] = useState(""); //Function for Nav select

    
    return (
            <div className="dropdown">
                <div className="dropdown__btn" onClick={() => {setIsActive(!isActive)}} >
                    <MenuTwoToneIcon />
                </div>
                    {isActive && (
                        
                            <ul className='dropdown__content' selected={selected} setSelected={setSelected}>
                                <li setSelected={setSelected} onClick={() => { setIsActive(false);}} >
                                    <NavLink exact to="/">
                                    Products
                                    </NavLink>
                                </li>
                                <li>
                                    <DropdownCategory selected={selected} setSelected={setSelected} />
                                </li>
                                <li setSelected={setSelected} onClick={() => { setIsActive(false);}} >
                                    <NavLink to="/about">
                                    About Us
                                    </NavLink>
                                </li>
                                <li setSelected={setSelected} onClick={() => { setIsActive(false);}} >
                                    <NavLink to="/news">
                                    News
                                    </NavLink>
                                </li>
                                <li setSelected={setSelected} onClick={() => { setIsActive(false);}} >
                                    <NavLink to="/contacts">
                                    Contact
                                    </NavLink>
                                </li>
                                </ul>
                            
                            )}
        </div>
        );
    }
export default Dropdown;
