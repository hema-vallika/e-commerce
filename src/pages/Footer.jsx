import React from 'react'
import { LuSend } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='w-full h-full p-4 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-secondary text-surface gap-4 md:gap-6'>

      <div className="">
        <div className=' w-10 h-10 rounded-full overflow-hidden flex justify-between items-center '>
          <img src="/zasira_logo.png" alt="" />
        </div>

        <div className="mt-6 flex flex-col gap-2 ">
          <h2 className='text-lg font-semibold '>Subscribe</h2>
          <p>Get the latest news and updates from Zasira</p>
          <form className="grid grid-cols-[auto_40px] gap-2 lg:gap-0 items-center w-full h-10 border border-gray-400 rounded-md">
            <input type="email" placeholder="Enter your email" className="h-full bg-transparent px-2 lg:pl-2 lg:pr-0 outline-none" />
            <LuSend className='text-2xl'/>
          </form>
        </div>
      </div>

      <ul>
        <h2 className='text-lg font-semibold mb-2'>Support</h2>
        <p>111 Sambalpur, Odisha, India <br /> 768228</p>
        <p>support.zasira@gmail.com</p>
        <p>+91 8749658745</p>
      </ul>

      <ul className='flex flex-col gap-2'>
        <h2 className='text-lg font-semibold mb-2'>Account</h2>
        <Link to='' >My Account</Link>
        <Link to='' >Login / Sign Up</Link>
        <Link to='' >Cart</Link>
        <Link to='' >Wishlist</Link>
      </ul>

      <ul className='flex flex-col gap-2'>
        <h2 className='text-lg font-semibold mb-2'>Quick Links</h2>
        <Link to='' >Privacy Policy</Link>
        <Link to='' >Terms of use</Link>
        <Link to='' >FAQs</Link>
        <Link to='' >About</Link>
        <Link to='' >Contact</Link>
      </ul>
    </section>
  )
}

export default Footer