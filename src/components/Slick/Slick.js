import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slick.css'
import Slider from 'react-slick';
import products from './data';

const Slick = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <div className='slider'>
            <Slider {...settings}>
            {products.map(item =>(
                   <div className='card'>
                   <div className='card-top'>
                    <img className='w-60 h-60' src={item.image} alt={item.title} />
                    <h1>{item.title}</h1>
                     </div>
                       <div className='card-bottom'> 
                       <h3>{item.price}</h3>
                       <p>{item.category}</p>
                    </div> 
               </div>
            ))}
            </Slider>
           
        </div>
    );
};

export default Slick;