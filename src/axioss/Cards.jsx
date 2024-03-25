import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";


function Cards(props) {
  const navigate=useNavigate();
  const [arr,setArr]=useState([]);

  let ppath = `uploads/${props.ppic}`;
  //console.log(ppath);
  
  async function contact(email) {
  
    const url = `https://g2c-project-3.onrender.com/avail/contact-grower?email=${email}`;

    const serverMsg = await axios.get(url);

    //console.log(serverMsg.data.status);
    if (serverMsg.data.status === true) {
      alert(JSON.stringify(serverMsg.data.prod));
      setArr(serverMsg.data.prod);
      // navigate("/contact");
    } 
    else alert("No items are selected");
  }

  return (
    <div className="flex">
      <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src={ppath} alt="card-image" className="m-auto p-7" />
        </div>
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Details
          </h5>
          <p>Category: {props.category}</p>
          <p>Items: {props.items}</p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button" onClick={()=>contact(props.email)}>
            Contact Grower
          </button>
        </div>
      </div>
      <Contact {...arr}/>
    </div>
  );
}

export default Cards;
// export {arr};
