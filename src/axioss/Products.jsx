import React from 'react'

function Products() {
  return (
    <div>
        <h1 class="text-4xl text-center mt-10 mb-4 p-2 bg-gray-800 text-white">Products Available</h1>
       
        <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
   
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="fruits.jpeg"
          alt="Card Image"
          class="w-full h-56 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 text-center">Fruits</h2>
        </div>
      </div>

     
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="vegetables.jpeg"
          alt="Card Image"
          class="w-full h-56 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 text-center">Vegetables</h2>
        </div>
      </div>

      
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="milk.jpeg"
          alt="Card Image"
          class="w-full h-56 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800 text-center">Milk Products</h2>
        </div>
      </div>
    </div>
  </div>
        
    </div>
  )
}

export default Products