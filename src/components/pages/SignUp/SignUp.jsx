import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../Button/CustomButton";
import CustomInputBox from "../../InputBox/CustomInputBox";
import Cookies from 'js-cookie'

function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign Up Successfull" + " " + e.target.email.value);

  };

  

  // const [userData, setUserData] = useState({
  //   email: ""
  // })

  useEffect(() => {
    // const saveUserData = (userInfo) => {
    //   Cookies.set('userInfo', JSON.stringify(userInfo), { expires: 30 })
    //   setUserData(saveUserData)
    // }
    // if()
  }, [])

  const handleSignUpBtn = (e) => {
    e.preventDefault();
    // saveUserData(userData)
  }

  return (
    <div className="flex justify-center pt-[1.5rem]">
      <div className="border rounded-2xl border-black h-[40rem] w-[70rem] bg-red-300">
        {/* for 2nd box (right) */}
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYGnhvWXslRVwAbfKebEoDq9m9lHEA9m9sw&s" alt="404 Not Found !" /> */}
        <div className="h-[39.9rem] w-[35rem] bg-slate-100 rounded-2xl border-r-2 border-black">
          {/* for 1st box (left) */}
          <div className="flex justify-center">
            <form onSubmit={handleSignUp}>
              <div className=" "> {/* ADD STYLES HERE */}
                <h1>Sign Up Here</h1>
                <label>Your Email Id: </label>
                <CustomInputBox value={userData.email}  />
                <br />
                <CustomButton text="Sign Up" onClick={handleSignUpBtn} />
                <br />
                <Link to="/" className="text-blue-600">
                  Already have an account ? Login Here :)
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
