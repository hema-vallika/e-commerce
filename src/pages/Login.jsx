import React from 'react'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { AiOutlineUnlock} from 'react-icons/ai'
const Login = () => {
  return (
    <div>
      <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
        <form action="">
        <div className='relative my-4'>
        <input type="email" className='block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-900 peer ' placeholder=''/>
        <label htmlFor='' className='absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'> Your Email</label>
        <BiUser className='absolute text-md top-0 right-4'/>
        
        </div>
        <div className='relative mt-8 mb-4'>
        <input type="password" className='block w-72 py-2,3 px-0 text-white text-md bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-blue-900 peer ' placeholder=''/>
        <label htmlFor='' className='absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left[0] peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' > Your Password</label>
        <AiOutlineUnlock className='absolute text-md top-0 right-4'/>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <input type="checkbox" name='' id='' />
            <label htmlFor="Remember Me">Remeber Me</label>
          </div>
          <Link to='' className='text-blue-500'>Forget Password</Link>
        </div>
        <button className='w-full mb-4 text-[16px] mt-6 rounded-full bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-3 transition-colors duration-300' type='submit'>Login</button>
        <div>
          <span className='m-4'>New Here? <Link className='text-blue-500' to='/signup'>Create an account</Link></span>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login