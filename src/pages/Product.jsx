import React, { useMemo, useState } from 'react'
import { ProductCard } from '../components'
import { products } from '../data/productData';
import { IoFilter } from "react-icons/io5";


const Product = () => {
  const [price, setPrice] = useState(0)
  const [openFilter, setOpenFilter] = useState(false)
  const [size, setSize] = useState('')
  const [gender, setGender] = useState('')
  const [brand, setBrand] = useState('')
  const [material, setMaterial] = useState('')
  const [color, setColor] = useState('')
  const [newArrivals, setNewArrivals] = useState(false)
  const [productIds, setProductIds] = useState([])

  const generateRandomNumArr = (prodNum) => {
    let tempArr = []; // Reset the array
    for (let i = 0; i < prodNum; i++) {
      const max = products.length;
      const randomNumber = Math.floor(Math.random() * max);
      tempArr.push(products[randomNumber].id);
    }
    setProductIds(tempArr)
    // return randomNum; // Return the array
  };
  const randomNum = useMemo(() => generateRandomNumArr(20), [products.length]);


  const handleApply = (e) => {
    console.log(price, size, gender, brand, material, color, newArrivals);

    // let productNumber = 20
    // let tempArr=[]
    // for(let i=0; i<productNumber; i++){
    //   tempArr = products.filter((product)=> {
    //     if(product.price <= price && product.sizes.includes(size) && product.specification.ideal == gender && product.brand == brand ){
    //       return product.id
    //     }
    //   })
    // }

    // console.log(tempArr);

    setOpenFilter(false)
  };

  return (
    <section className='w-full relative'>
      {/* filter */}
      <div className=" w-full h-10 sticky top-14 px-10 left-0 bg-ground z-10 flex items-center justify-end border-b-[1px] border-surface">
        <div className="">
          <button type='button' onClick={() => setOpenFilter(!openFilter)} className='flex items-center gap-2  py-[2px] px-2 rounded-lg boxShadow '><IoFilter /> Filter</button>
          <div className={`${openFilter ? "flex" : "hidden"} absolute top-10 right-4 bg-surface w-[300px] p-4  flex-col gap-1 `}>
            <div className="flex gap-1 items-center">
              <input type="range" id='price' value={price} onChange={(e) => setPrice(e.target.value)} min={0} max={999} />
              <label htmlFor="price">Price: $ 0 - {price} </label>
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="size">Size: </label>
              <select onChange={(e) => setSize(e.target.value)} name="size" id="size" className='outline-none bg-transparent'>
                <option value="">None</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="gender">Gender: </label>
              <select onChange={(e) => setGender(e.target.value)} name="gender" id="gender" className='outline-none bg-transparent'>
                <option value="">None</option>
                <option value="nike">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="brand">Brand: </label>
              <select onChange={(e) => setBrand(e.target.value)} name="brand" id="brand" className='outline-none bg-transparent'>
                <option value="">None</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="material">Material: </label>
              <select onChange={(e) => setMaterial(e.target.value)} name="material" id="material" className='outline-none bg-transparent'>
                <option value="">None</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="color">Color: </label>
              <select onChange={(e) => setColor(e.target.value)} name="color" id="color" className='outline-none bg-transparent'>
                <option value="">None</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className="flex gap-1 items-center">
              <label htmlFor="newArrivals">New Arrivals: </label>
              <input onChange={() => setNewArrivals(!newArrivals)} type="checkbox" checked={newArrivals} id='newArrivals' className='h-4 w-4' />
            </div>
            <div className="w-full grid grid-cols-2 mt-2">
              <button onClick={() => setOpenFilter(false)} className='py-1 bg-ground '>Cancle</button>
              <button onClick={handleApply} className='py-1  bg-primary'>Apply</button>
            </div>

          </div>
        </div>
      </div>

      {/* products */}
      <div className=' w-full grid grid-cols-2 lg:grid-cols-5 gap-1 p-10 relative '>
        {productIds.map((id, index) => (
          <ProductCard productId={id} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Product