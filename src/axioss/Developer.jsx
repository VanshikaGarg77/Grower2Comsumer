import React from "react";

function Developer() {
  return (
    <div class="container mx-auto">
  <h1 class="text-4xl text-center mt-10 mb-2 p-2 bg-gray-800 text-white">Developed By</h1>
  <div class="flex flex-wrap justify-center">
    <div class="border w-full sm:w-1/2 flex justify-center items-center">
      <img src="RajeshSir.jpg" alt="" class="w-72 h-60 rounded-full" />
      <p class="font-bold text-xl text-center mt-4">
        Developed under guidance of:
        <br />
        Rajesh Bansal
        <br />
        Author of "Real Java"
      </p>
    </div>
    <div class="border w-full sm:w-1/2 flex justify-center items-center mt-4 sm:mt-0">
      <img src="profile.jpeg" alt="" class="w-72 h-60 rounded-full" />
      <p class="font-bold text-xl text-center mt-4">
        Developed by:
        <br />
        Vanshika
        <br />
        Email id: vanshika@gmail.com
        <br />
        Contact: 77176-94592
      </p>
    </div>
  </div>
</div>

  );
}

export default Developer;
