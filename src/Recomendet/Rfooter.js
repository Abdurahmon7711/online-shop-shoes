import React from 'react';
import navlogoi from '../images/logo.png';
const Rfooter = () => {
    return (
        <div className="footer">
            <div className="row footer_row">

                <div className="col-md-4 ">
                    <a className="navLogo" href="#">
                        <img src={navlogoi} alt="navlogo" />
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="col-md-7">
                    <div className="row pl-5 links">
                        <div className="col-md-4 linka">
                            <h5>Products</h5>
                            <ul>
                                <li><a className="asd" href="#">Trending</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Vendors</a></li>
                                <li><a href="#">Brands</a></li>
                                <li><a href="#">Storefront</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 linka">
                            <h5>Legals</h5>
                            <ul>
                                <li><a href="#">License</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 linka">
                            <h5>Products</h5>
                            <ul>
                               <li> <a href="#">Fell free get in touch with us via phone or send us a message</a></li>
                               <li> <a href="#">+1 234 567 89 10</a></li>
                               <li> <a href="#">support@khoomi.com</a></li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>

        </div>


    );
};


export default Rfooter;