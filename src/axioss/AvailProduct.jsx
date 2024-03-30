import React,{useState,useEffect} from 'react';
import axios from 'axios';

function AvailProduct() {
  
  const [prev,setPrev]=useState("");
  const [obj,setObj]=useState({
    email:"",
    category:"",
    items:"",
    ppic:""
  })
  const [prod,setProd]=useState([]);
  
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

    function addItem(event)
    {
      document.getElementById("category").disabled = true;
      let x=event.target.value;
      // x=x.substring(0, x. length - 1) 
      // setProd(x);
      setProd([...prod,x]);
    }
    useEffect(() => {
      setObj({ ...obj, items: prod.join(',') });
    }, [prod]);

  function updatePic(event)
  {
    setObj({...obj,["ppic"]:event.target.files[0]});
    //setPrev(URL.createObjectURL(event.target.files[0]));
  }
  async function doSave()
  {
    //document.getElementById("category").disabled = false;
    const url="https://g2c-project-3.onrender.com/avail/avail-product";
      
      var formdata=new FormData();
      for(var prop in obj)
      {
        formdata.append(prop,obj[prop]);
      }
      const serverMsg=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});
      console.log(serverMsg);
      if(serverMsg.data.status===true)
          {  alert(serverMsg.data.msg);
           // obj.items="";
            //type=null;
          }
        else    
            alert(serverMsg.data.err);
        
  }
  return (

    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-[200px] 2xl:mx-20">
        <h1 className='font-bold text-xl text-center py-2'>Avail Product</h1>
        <form>
       <div class="space-y-12">

       <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2 flex">
                    <input id="email" name="email" type="email" onChange={doUpdate} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
            <div class="sm:col-span-6 md:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Product Category</label>
                <div class="mt-2">
                    <select id="category" name="category" onChange={doUpdate} autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option value="Select" disabled selected>Select category</option>
                        <option value="Milk Products">Milk Products</option>
                        <option value="Vegetables">Vegetables </option>
                        <option value="Fruits">Fruits</option>
                        <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>
            <div class="sm:col-span-6 md:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Category items</label>
                <div class="mt-2">
                    <select onChange={addItem} autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option value="Select" disabled selected>Select item</option>
                        {options}
                    </select>
                </div>
            </div>
            <div class="sm:col-span-6">
                <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Items of selected category:</label>
                <div class="mt-2">
                    <input type="text" value={prod} name="items" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <div class="col-span-full">
        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Upload picture</label>
        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
            </svg>
            <div class="mt-4 flex text-sm leading-6 text-gray-600">
              <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="ppic" onChange={updatePic} type="file" class="sr-only"/>
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
    {/* <img src={prev} className="w-[600px] h-[200px]"/> */}
  <div class="mt-6 flex items-center justify-end gap-x-6">
  <button type="button" onClick={doSave} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Publish</button>
  </div>
  </div>
      
      </form>
    </div> 
  )
}

export default AvailProduct;