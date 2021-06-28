import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import iphone12 from '../images/ipremo.png'
const Home = () => {
    return (
        <div className="home">
            <div className="main ">
                <div className="side1">
                    <h3>
                        GET THE NEW iPHONE 12 PRO
                    </h3>
                    <p>
                        A trasnsformation triple -camera system that adds on copability with out complate temp the convertion   
                   </p>
                   <div className="buttons">
                        <a href="#" className="button1">
                            Buy Now <ShoppingBasketIcon/>
                        </a>
                        <a href="#" className="button1">
                            Width $599 width trend-in 
                        </a>
                   </div>
                </div>
                <div className="side2">
                    <img src={iphone12} alt="iphone12 photo" />
                </div>
            </div>
        </div>
    );
};

 
export default Home;