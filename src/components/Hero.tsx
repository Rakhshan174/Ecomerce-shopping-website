
"use client"
import React, {} from 'react'
import Slider from "react-slick";
import Slide from './Slide';

const Hero = () => {

    const settings = {
        dots: true,
        Infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        pauseOverMover: false,
    };
    const slideData =[
        {
            id:0,
            img: "/pic.jpg",
            title: "Tremding Item",
            mainTitle: "WOMEN'S LATEST FASHION SALL",
            price: "$20",

        },
        {
            id: 1,
            img: "/pic2.jpg",
            title:"Tremding Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$35",
        },
        {
            id: 2,
            img:  "/pic3.jpg",
            title: "Sale offer",
            mainTitle:"NEW FASHION SUMMER SALE",
            price: "$30",

        }
    ];
  return (
    <div >
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) =>(
                    <Slide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                        />
            ))}
            </Slider>

        </div>
        
      </div>
  )
}

export default Hero
