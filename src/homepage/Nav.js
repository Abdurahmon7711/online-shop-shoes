import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import navlogoi from '../images/logo.png';
import like from '../images/iconsimg/heart.png';
import user from '../images/iconsimg/user.png';
import shop from '../images/iconsimg/shopping-cart.png';
import SearchIcon from '@material-ui/icons/Search';



const Nav = () => {
    return (
        <>
            <nav className="navigation">
                <a className="navLogo" href="#">
                    <img src={navlogoi} alt="navlogo" />
                </a>

                <div className="searchSec">
                    <form>
                        <input
                            type="text"
                            className="searchInput"
                            placeholder="Search For Products, Brands & Catigories"
                        />
                        <button type="button" class="searchBtn">
                            <SearchIcon />
                        </button>
                    </form>
                </div>

                <div className="icons">
                    <a href="#" className="bolimlar">
                        <img src={like} alt="like icon" />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={user} alt="user icon" />
                    </a>
                    <a href="#" className="bolimlar">
                        <img src={shop} alt="shop icon" />
                    </a>
                </div>
            </nav>
        </>
    );
};
export default Nav;