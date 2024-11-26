import React from "react";
import Services from "./Services";
import Developer from "./Developer";
import Reach from "./Reach";
import Products from "./Products";

function Dashboard() {
  return (
    <div>
      <img src="real.webp" alt="" className="w-full h-[500px]" />
      <Services />
      <Products/>
      {/* <Developer /> */}
      <Reach />
    </div>
  );
}

export default Dashboard;
