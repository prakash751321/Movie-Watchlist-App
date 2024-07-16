import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../Button/CustomButton'
import CustomInputBox from '../../InputBox/CustomInputBox'

function login() {

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   alert('Login Successfull with ')
  // }

  const handleLogin = (e) => {
    e.preventDefault()
    alert('Login Successfull with ' + " " + e.target.email.value)
  }

  return (
    <div className="flex justify-center pt-[1.5rem]">
      <div className="border rounded-2xl border-black h-[40rem] w-[70rem] bg-red-300">
        {/* for 2nd box (right) */}
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYGnhvWXslRVwAbfKebEoDq9m9lHEA9m9sw&s" alt="404 Not Found !" /> */}
        <div className="h-[39.9rem] w-[35rem] bg-slate-100 rounded-2xl border-r-2 border-black">
          {/* for 1st box (left) */}
          <div className="flex justify-center">
          <form onSubmit={handleLogin}>
          <h1>Login To Your Account</h1>
          <label>Your Email Id: </label>
          <CustomInputBox />
          <br />
          <CustomButton text="Login" />
          <br />
          <Link to="/signup" className='text-blue-600'>Don't have an account ? Sign Up Here</Link>
        </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login