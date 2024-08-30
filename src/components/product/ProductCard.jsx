import React from 'react'
import { IoMdStar } from "react-icons/io";
import { products } from '../../data/productData';


const ProductCard = ({ productId }) => {
  const productArr = products.filter(product => product.id == productId)
  const product = productArr[0]
  return (
    <div className='grid-cols-1 lg:grid-cols-2 gap-4 p-2 border-[1px] border-surface rounded-md '>
      
      <div className="h-[150px] bg-white grid content-center overflow-hidden p-2 relative">
        <img src={product.photos[0]} alt="product image" className="object-scale-down" />
      </div>

      <div className="text-start">
        <h2 className="text-lg font-semibold text-secondary/70 uppercase">{product.brand} </h2>
        <h2 className="text-lg line-clamp-1">{product.title} </h2>
        <div className='flex items-center '>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          ({product.num_reviews})
        </div>
        <h2 className="text-lg ">{product.price || product.offer.price} <span className='text-primary'>{product.discount || '20% off'}</span> </h2>
        <h2 className="text-lg ">Free Delivery</h2>
      </div>
    </div>
  )
}

export default ProductCard