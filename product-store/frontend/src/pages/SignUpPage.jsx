import React from 'react'

const SignUpPage = () => {
  return (
    <>
    <div>
        <h1>Create an Accoutn</h1>
        <div>
            <form className='flex flex-col gap-3 aligcn-center justify-center'>
                <label htmlFor="">Name:
                <input type="text" placeholder='Enter your name' className='border p-2 rounded' />
                </label>
                <label htmlFor="">Email:
                <input type="email" placeholder='Enter your email' className='border p-2 rounded' />
                </label>
                <label htmlFor="">Password:
                <input type="password" placeholder='Enter your password' className='border p-2 rounded' />
                </label>
                <label htmlFor="">Confirm Password:
                <input type="password" placeholder='Confirm your password' className='border p-2 rounded' />
                </label>
                <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Sign Up</button>
            </form>
            <p> Don't have an Account ? </p> <a> Sign In </a>
        </div>
    </div>

    
    </>
  )
}

export default SignUpPage