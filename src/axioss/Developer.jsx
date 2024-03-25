import React from "react";

function Developer() {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10 mb-2 p-2 bg-gray-800 text-white">
        Developed By
      </h1>
      <div className="flex flex-wrap">
        <div className="border w-1/2 flex">
          <img src="RajeshSir.jpg" alt="" className="w-72 h-60 rounded-full" />
          <p className="font-bold text-xl text-center m-auto">
            Developed under guidance of:
            <br />
            Rajesh Bansal
            <br />
            Author of "Real Java"
          </p>
        </div>
        <div className="border w-1/2 flex">
          <img src="profile.jpeg" alt="" className="w-72 h-60 rounded-full" />
          <p className="font-bold text-xl text-center m-auto">
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
