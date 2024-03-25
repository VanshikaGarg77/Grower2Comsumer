import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login(){

    const [obj,setObj]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    
    function doUpdate(event)
    {
        var {name,value}=event.target;
        setObj({...obj,[name]:value});
    }

    async function doLogin()
    {
        const url="http://localhost:2006/signup/login?email="+obj.email+"&password="+obj.password;
        const serverMsg=await axios.get(url);
      console.log(serverMsg);
        if(serverMsg.data.status===true)
            {
                localStorage.setItem("token" , serverMsg.data.jtoken);
                console.log(serverMsg.data.jtoken);
                if(serverMsg.data.type==="Grower")
                navigate('/opengrower');
                else if(serverMsg.data.type==="Consumer")
                navigate('/openConsumer');
                else
                alert(serverMsg.data.msg);
            }
        else    
            alert(serverMsg.data.err);
    }
    
    // const fetchedUrl="/public/download.jpeg";

    return(
        
        <div class="bg-gradient-to-r from-purple-500 to-pink-500">
       
        {/* <p style={{background-image: "url('dowmload.jpeg')"}}></p> */}
        <section>
        {/* <div className="w-[400px]"> */}
        {/* <img src="Signup.jpeg" className="w-[400px] h-[550px] py-10"/> */}
        {/* </div> */}
        {/* <div className="w-[300px]">
        <h1 className="text-center m-5 text-blue-700 font-bold text-4xl">Login</h1>
        <br/>
        <p className="text-xl">Email:</p>
        <br/>
        <p><input type="email" className="border border-black rounded-xl" onChange={doUpdate} name="email"/></p>
        <br/>
        <p className="text-xl">Passcode:</p>
        <br/>
        <p><input type="password" className="border border-black rounded-xl" onChange={doUpdate} name="password"/></p>
        <br/>

        <p><input type="button" value="Login" onClick={doLogin} className='bg-blue-500 text-white w-20 h-7 mx-4 my-8 rounded-xl'/></p>
        </div> */}

        
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
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
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          {/* <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div> */}
                      </div>
                      {/* <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                  </div>
                  <input type="button" onClick={doLogin} value="Sign in" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" onClick={()=>navigate("/signupPage")} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                  <input type="button" onClick={()=>{
                navigate("/webtokentest");
            }} className='border border-black p-2 mt-5'  value="Test Json Web Token"/>
              </form>
          </div>
      </div>
  </div>
</section>
        </div>
    )
}
export default Login;