import React from 'react';
// const {arr}=require("./Cards");

function Contact(props) {
  console.log("***"+props);
  if(props.email!="")
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
       Grower Details
      </h5>
      <p>Email id: {props.email}</p>
      <p>First Name: {props.fname}</p>
      <p>Last Name: {props.lname}</p>
      <p>Address: {props.address}</p>
      <p>Mobile: {props.mobile}</p>
      <p>City: {props.city}</p>
      <p>Village: {props.village}</p>
    </div>
  </div>
  
  )
}

export default Contact