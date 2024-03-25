import React, { useState } from 'react'
import axios from 'axios';
import Cards from './Cards';

function FindGrower() {
  const [obj,setObj]=useState({
    email:"",
    category:"",
    items:"",
    ppic:"",
    city:""
  })
  const [arr,setArr]=useState([]);
  const [card,setCard]=useState([]);
  
  function doUpdate(event)
    {
        var {name,value}=event.target;
        setObj({...obj,[name]:value});
    }

    let type=null;
    let options=null;
    const milk=["Milk","Curd","Ghee","Cheese"];
    const fruits=["Apple","Grapes","Banana","Mango"];
    const Vegetables=["Carrot","Potato","Onion","Cabbage","Cauliflower"];
    const fv=["Apple","Grapes","Banana","Mango","Carrot","Potato","Onion","Cabbage","Cauliflower"]


    if(obj.category==="Milk Products")
    type=milk;
    else if(obj.category==="Fruits")
    type=fruits;
    else if(obj.category==="Vegetables")
    type=Vegetables;
    else if(obj.category==="Fruits and Vegetables")
    type=fv;
    
    if (type) { 
      options = type.map((el) => <option value={el}>{el}</option>); 
    }
  async function fillCity(event)
  {
    obj.items=event.target.value;
    
    const url=`https://g2c-project-3.onrender.com/avail/fetch-item?items=${obj.items}`;
    const serverMsg=await axios.get(url);
     
      console.log(serverMsg.data);
      if(serverMsg.data.status===true)
       {  
        const unique=new Set();
         for(let i=0;i<serverMsg.data.prod.length;i++)
         {
          // alert(JSON.stringify(serverMsg.data.prod[i].city));
          var x=serverMsg.data.prod[i].city;
          unique.add(x);
          // setArr([...arr,x]);
          // setArr(arr => [...arr, x]);
         }
         const uniqueArray=Array.from(unique);
         setArr(uniqueArray);
       }
      else    
        alert(serverMsg.data.err);
  }

  async function findGrowers()
  {
    const url=`https://g2c-project-3.onrender.com/avail/find-grower?city=${obj.city}&items=${obj.items}`;

    const serverMsg=await axios.get(url);
   
    //console.log(serverMsg.data.status);
    if(serverMsg.data.status===true)
     { 
      // alert(JSON.stringify(serverMsg.data.prod));
      for(let i=0;i<serverMsg.data.prod.length;i++)
      {
       var x=serverMsg.data.prod[i];
       setCard(card => [...card, x]);
      }
     }
      else
      alert("No items are selected")
  }

  
  return (
    <div>
    <h1 className='font-bold text-xl text-center py-2'>Find Growers</h1>
        <form className="w-[800px] m-auto">
       <div class="space-y-12">
       <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Product Category</label>
          <div class="mt-2">
            <select name="category" onChange={doUpdate} class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="Select" disabled selected>Select category</option>
            <option value="Milk Products">Milk Products</option>
            <option value="Vegetables">Vegetables </option>
            <option value="Fruits">Fruits</option>
            <option value="Fruits and Vegetables">Fruits and Vegetables</option>
            {/* <option value="Others">Others</option> */}
            </select>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Category item</label>
          <div class="mt-2">
            <select autocomplete="country-name" onChange={fillCity} name="items" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="Select" disabled selected>Select item</option>
           {options}
            </select>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">City/Village</label>
          <div class="mt-2">
            <select autocomplete="country-name" onChange={doUpdate} name="city" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="Select" disabled selected>Select city</option>
           {
            arr.map((el) => <option value={el}>{el}</option>)
           }
            </select>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
  <button type="button" onClick={findGrowers} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Find Growers</button>
  </div>
        </div>
       
    </div> 
    </form>
    <div  className="flex flex-wrap mx-[100px] my-4">
    {
      card.map((obj)=>{
        return(
          <Cards {...obj}>
          {/* {obj.ppic} */}
          </Cards>
        )
      })
    }
    </div>
      </div>
  )
}

export default FindGrower;