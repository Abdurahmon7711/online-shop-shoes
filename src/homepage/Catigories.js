import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
const Catigories = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="catigories ">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <MenuIcon className="gamburger" />
                    All catigories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Catigore 1</DropdownItem>
                    <DropdownItem>Catigore 2</DropdownItem>
                    <DropdownItem>Catigore 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <ul className="links">
                <li className="link_item">
                    <a href="#" className="link active">Home</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">New arivals</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Trending</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Deals for you </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Discounts</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Weekly offers</a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">Become a ventor</a>
                </li>
            </ul>
        </div>
    );
};


export default Catigories;