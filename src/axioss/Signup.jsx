import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup(){

    const [obj,setObj]=useState({
        email:"",
        password:"",
        type:""
    })
    const navigate=useNavigate();

    function doUpdate(event)
    {
        var {name,value}=event.target;
        setObj({...obj,[name]:value});
    }

    async function doSignup()
    {
        // const url="http://localhost:2006/signup/signup";
        const url="https://g2c-project-3.onrender.com/signup/signup"
        const serverMsg=await axios.post(url,obj);
      console.log(serverMsg);
      if(serverMsg.data.status===true)
           { 
            navigate('/login');
           }
        else    
            alert(serverMsg.data.err);
    }

    return(
    <div class="bg-gradient-to-r from-purple-500 to-pink-500">
        <section>
  <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" onChange={doUpdate} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" onChange={doUpdate} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <p className="block mb-2 text-sm font-medium text-gray-900">Select Service:</p>
        <p><input type="radio" name="type" value="Grower" className="m-1 mb-2 text-sm font-medium text-gray-900" onChange={doUpdate}/>Grower</p>
        <p><input type="radio" name="type" className="m-1 mb-2 text-sm font-medium text-gray-900" value="Consumer" onChange={doUpdate}/>Consumer</p>

                  <button type="button" onClick={doSignup} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" onClick={()=>navigate("/login")} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    )
}
export default Signup;