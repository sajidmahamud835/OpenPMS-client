import React from 'react';
import './HomePrice.css'
import Slider from 'react-slick';
// import img1 from '../../../images/Banner/Banner1.png'
// import img2 from '../../../images/Banner/Banner-2.png'
// import img3 from '../../../images/Banner/Banner-3.png'
// import img4 from '../../../images/Banner/Banner-4.png'




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePrice = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="product-container mt-5">

                {/* title  */}

                <div className="title-part">
                    <h1 className="title">CLIENT</h1>
                    <h3 className="categories">REVIEW</h3>
                </div>

                {/* slick slider starts from here  */}

                <div className="all-product">
                    <Slider {...settings}>

                        <div className="product">
                            {/* <img src={img1} alt="" /> */}
                            <h4>James Bond</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

                        <div className="product">
                            {/* <img src={img2} alt="" /> */}
                            <h4>Bill Gomes</h4>
                            <p className="product-desc">Instead of focusing on the competition, focus on the customer</p>
                        </div>

                        <div className="product">
                            {/* <img src={img3} alt="" /> */}
                            <h4>Ellite Watson</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

                        <div className="product">
                            {/* <img src={img4} alt="" /> */}
                            <h4>Margot Robbie</h4>
                            <p className="product-desc">Instead of focusing on the competition, focus on the customer</p>
                        </div>

                        <div className="product">
                            {/* <img src={img1} alt="" /> */}
                            <h4>Sophie Turner</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

                        <div className="product">
                            {/* <img src={img3} alt="" /> */}
                            <h4>Natasha Malkova</h4>
                            <p className="product-desc">Instead of focusing on the competition, focus on the customer</p>
                        </div>

                        <div className="product">
                            {/* <img src={img2} alt="" /> */}
                            <h4>Cris Hamsworth</h4>
                            <p className="product-desc">The Services of Each Team Member is really aprreciated</p>
                        </div>

   
                    </Slider>
                </div>
              
            </div>

            {/* button  */}
            {/* <div>
                <button className="view-more-btn">View More</button>
            </div> */}
            
        </>
    );
};

export default HomePrice;