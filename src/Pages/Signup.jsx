import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth}from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [err, setErr]=useState('')
    const{user, SignUp}=UserAuth()
    const navigate =useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await SignUp(email, password)
        setTimeout(()=>{
            {user?.email ? setErr('Password should be at least 6 characters') :navigate('/') ;}
        }, 2000)
    }


  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/f3cb7a1c-8bbd-4ced-9386-298ee17da254/GB-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
    </div>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    {err? <p className='p-3 bg-red-400 my-2'>{err}</p>: null}
                        <input onChange={(e)=> setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email'/>
                        <input onChange={(e)=> setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600 '>
                            <p><input className='mr-2' type="checkbox" /> Remember Me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>
                         <Link to='/login'>
                            Sign In
                         </Link>
                         </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
