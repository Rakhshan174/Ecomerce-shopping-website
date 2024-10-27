
import React from 'react'
import ProductCard from './ProductCard';

const ProductsData =[
    {
        img: "/man1.jpg",
        title: "JACKET",
        desc: "MEN Yarm Fleece Jacket",
        rating: 4,
        price: "45.00",

    },
    {
        img: "/images.jpg",
        title: "SKIRT",
        desc: "Black Floral Wrap Midi skirt",
        rating: 5,
        price: "55.00",

    },
    
    
    
    {
        img: "/pumps.jpg",
        title: "PARTY WEAR",
        desc: "Women Party Wear Shoes",
        rating: 3,
        price: "25.00",

    },
    {
        img: "/shirt.jpg",
        title: "SHIRT",
        desc: "Full White and Cotton Men Shirt",
        rating: 5,
        price: "55.00",

    },

    {
        img: "/sho.jpeg",
        title: "SPORTS",
        desc: " Tracking & Running Shoes.Black",
        rating: 3,
        price: "58.00",

    },
    {
        img: "/watch.jpg",
        title: "WATCHES",
        desc: "Smart Watches Men",
        rating: 4,
        price: "100.00",

    },
    {
        img: "/femaw.jpg",
        title: "WATCHES",
        desc: "Girls Female Watches ",
        rating: 4,
        price: "120.00",

    },
    {
        img: "/glasess.jpg",
        title: "GLASESS",
        desc: "Sun Glasses ",
        rating: 4,
        price: "100.00",

    },
];
const NewProducts = () => {
  return (
    <div>
        <div className='container pt-'>
            <h2 className='font-medium text-2xl pb-4'>New Products </h2>



            <div className='grid grid-cols-1 place-content sm:place-items-start sm:grid-cols-2
            lg: grid-col-3 xl:grid-cols-4 gap-10 xl:gap x-20 xl:gap-y-10  cursor-pointer '>
                
                {ProductsData.map((items, index)=>(
                    <ProductCard
                    key={index}
                    img={items.img}
                    title={items.title}
                    desc={items.desc}
                    rating={items.rating}
                    price={items.price}

                    />
                ))}
                


            </div>
        </div>
      
    </div>
  )
}

export default NewProducts
