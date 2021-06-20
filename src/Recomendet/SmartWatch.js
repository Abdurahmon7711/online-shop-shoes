import React from 'react';
import Smart from './Json/smartw.json'
 
const SmartWatch = () => {
    return (
        <div className="smartwatchs">
            <div className="title">
                <p>EXPLORE AWESOME PRODUCTS</p>   
                <h4>Recommended for you</h4>
            </div>
            <div className="swcards">
                         {Smart.map((post, index) =>{
                            return(
                                <div className="swcard" key={index}>
                                    <img src={post.img} />
                                    <p>{post.mane}</p>
                                    <div className="prise">
                                        {post.Price}
                                    </div>
                                </div>
                             )}
                        )} 
            </div>
            <span className="button__area"> 
                <a href="#" className="exploreBtn">Explore Other Products</a>
            </span>
        </div>
    );
};

 
export default SmartWatch;