import { useState } from "react";
import Header from "./Header";
const Login = () => {
   const [isSignInForm,setIsSignInForm]=useState(true);
   const ToggleClick=()=>{
      setIsSignInForm(!isSignInForm);
   }
  return (
    <div>
      
        {" "}
        <Header />
     <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
        alt="Background-logo"
      />
    </div>
    <form className=" text-white mx-auto right-0 left-0 my-36 w-3/12 absolute p-12 bg-black rounded-md bg-opacity-80">
      <h1  className="font-bold text-3xl py-4">{isSignInForm ?"Sign In":"Sign Up"}</h1>
      {!isSignInForm &&(<input type="text"placeholder=" Full Name"className="p-4 my-4 w-full bg-gray-800 rounded-md"/>)}
     
      <input type="text"placeholder=" Email Address"className="p-4 my-4 w-full bg-gray-800 rounded-md"/>
      <input type="password"placeholder=" password"className="p-4 my-4 w-full bg-gray-800 rounded-md"/>   
      <button className="p-4 my-4 rounded-md bg-red-700 w-full">{isSignInForm ?"Sign In":"Sign Up"}</button>
      <p className="text-center">OR</p>
      <button className="p-4 my-4 rounded-md bg-gray-700 w-full opacity-60 ">Use a sign-in code</button>
      <p  className="py-4">Forgot password?</p>
      <input type="checkbox" ></input><label className="mx-2">Remember me</label>
      <p className="py-4 cursor-pointer" onClick={ToggleClick}>{isSignInForm ?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"} </p>
      <p className="text-xs">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
    </form>
    </div>
  );
};

export default Login;
