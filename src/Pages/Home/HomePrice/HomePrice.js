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
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
                    <h1 className="title">PRODUCT</h1>
                    <h3 className="categories">PRICING</h3>
                </div>

                {/* slick slider starts from here  */}

                <div className="all-product">
                    <Slider {...settings}>

                        <div className="product">
                            {/* <img src={img1} alt="" /> */}
                            <h4>Fire Suprresion</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img2} alt="" /> */}
                            <h4>First Aid</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img3} alt="" /> */}
                            <h4>Safety Apparel</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img4} alt="" /> */}
                            <h4>Visibility Aids</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img1} alt="" /> */}
                            <h4>Fire Suprresion</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img3} alt="" /> */}
                            <h4>Safety Apparel</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img2} alt="" /> */}
                            <h4>First Aid</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="product">
                            {/* <img src={img4} alt="" /> */}
                            <h4>Visibility Aids</h4>
                            <p className="product-desc">Duis aute irure dolor reprehenderit in voluptate velit esse cilium dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </Slider>
                </div>

            </div>

            {/* button  */}

            <div>
                <button className="view-more-btn">View More</button>
            </div>
        </>
    );
};

export default HomePrice;