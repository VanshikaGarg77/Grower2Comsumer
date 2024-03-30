import React from 'react';
import { useNavigate } from 'react-router-dom';

function GrowerDash() {
    const navigate=useNavigate();

  return (
    <div>
   <p className="text-3xl text-center m-4">GROWER DASHBOARD</p> 
    <div className='flex flex-wrap mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 justify-center space-x-4'>
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Complete Your Profile
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Begin your journey by enriching your profile with accurate
     details, whether it's completing it for the first time or updating it with
      the latest information about yourself.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button" onClick={()=>navigate('/profile')}>
      Profile
    </button>
  </div>
</div>  


<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Avail Product
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      It empowers growers to select categories and items tailored specifically to their domain, 
      ensuring an exquisite array of products available for consumers.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button" onClick={()=>navigate('/avail')}>
      Avail Product
    </button>
  </div>
</div>  


<div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Items Manager
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    Growers wield the power to curate their offerings by selecting 
    items according to their availability, ensuring a diverse and abundant array of 
    products.
    </p>
  </div>
  <div class="p-6 pt-0">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button" onClick={()=>navigate('/itemsmanager')}>
      Items Manager
    </button>
  </div>
</div>  
  </div>
    </div>
  )
}

export default GrowerDash