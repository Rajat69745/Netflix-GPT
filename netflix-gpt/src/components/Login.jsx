import React from 'react'
import Navbar from './Navbar'
const backGroundImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
const Login = () => {
const [isSignInForm,setIsSignInForm]= React.useState(true)
  const toggleSignInForm=()=>{

    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>

      <Navbar />

      <div className='absolute'>
        <img src={backGroundImage} alt="" />
      </div>






      <form className='absolute bg-black w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-opacity-80 '>
        <h1 className='font-bold text-3xl text-white' onClick={toggleSignInForm}> { isSignInForm? "Sign In":"Sign Up Now"}</h1>

       { !isSignInForm && <input type="name" placeholder='Enter Name' className='w-full p-3 my-5 bg-gray-700 rounded-sm'  />}
        <input type="email" placeholder='Email' className='w-full p-3 my-5 bg-gray-700 rounded-sm' />

        <input type="password" placeholder='Password' className='w-full p-3 my-5 bg-gray-700 rounded-sm ' />
        <button className=' w-full p-3  bg-red-600 my-5 text-white rounded-sm '  onClick={toggleSignInForm}>{ isSignInForm? "Sign In":"Sign Up Now"}</button>
        <p className='text-white hover:cursor-pointer' onClick={toggleSignInForm}>  { isSignInForm? "New to Netflix? Sign Up":"Already a User? Sign In"} </p>
      </form>
    </div>


  )
}

export default Login