import React, { useState } from 'react';
import axios from 'axios';
import { doSave ,doSearchAndValidateToken} from '../services/user-controller';

function Profile() {
    const [prev,setPrev]=useState("");
    const [obj,setObj]=useState({
        email:"",
        fname:"",
        lname:"", 
        mobile:"",
        address:"",
        village:"",
        city:"",
        aadhar:"",
        ppic:"",
        hdn:""
    })

    function doUpdate(event)
    {
        var {name,value}=event.target;
        setObj({...obj,[name]:value});
    }

    function updatePic(event)
    {
        setObj({...obj,["ppic"]:event.target.files[0]});
        //setPrev(URL.createObjectURL(event.target.files[0]));
    }
    async function doSaveWithPic()
    {
      const url="https://g2c-project-3.onrender.com/profile/add-grower";
      
      var formdata=new FormData();
      for(var prop in obj)
      {
        formdata.append(prop,obj[prop]);
      }
      const serverMsg=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});
      console.log(serverMsg);
      if(serverMsg.data.status===true)
            alert("Saved Successfullyyyyy");
        else    
            alert(serverMsg.data.msg+"  "+serverMsg.data.err);
    }

    async function doSaveMVC()
    {
      const serverMsg=await doSave(obj);
      console.log(serverMsg.status);
      if(serverMsg.data.status===true)
            alert("Registration Successfull");
        else    
            alert(serverMsg.data.err);
    }

    async function doUpdatedata()
    {
      const url="https://g2c-project-3.onrender.com/profile/update";
      
      var formdata=new FormData();
      for(var prop in obj)
      {
        formdata.append(prop,obj[prop]);
      }
      const serverMsg=await axios.post(url,formdata,{headers:{'Content-Type':'multipart/form-data'}});
      console.log(serverMsg);
      if(serverMsg.data.status===true)
            alert(serverMsg.data.msg);
        else    
            alert(serverMsg.data.msg+"  "+serverMsg.data.err);

    }
    async function doSearch()
    {
      const url="https://g2c-project-3.onrender.com/profile/fetch?email="+obj.email;

      const serverMsg=await axios.get(url);
     
      console.log(serverMsg.data);
      if(serverMsg.data.status===true)
       { setObj(serverMsg.data.prod);
        obj.hdn=obj.ppic;
        obj.ppic="";
       }
      else    
        alert(serverMsg.data.err);

        // alert(JSON.stringify(serverMsg.data));
        //setPrev(`http://localhost:2006/uploads/${serverMsg.data.prod.ppic}`);
    }

    async function doSearchWithToken()
    {
      const url="https://g2c-project-3.onrender.com/profile/fetch-token?email="+obj.email;

      const serverMsg=await doSearchAndValidateToken(obj.email);
     
      console.log(serverMsg.data);
      if(serverMsg.data.status===true)
       { setObj(serverMsg.data.prod);
        obj.hdn=obj.ppic;
        obj.ppic="";
       }
      else    
        alert(serverMsg.data.msg);        
    }
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-[200px]">
      <form>
  <div class="space-y-12">
    <div class="border-b border-gray-900/10 pb-4">
      <h2 class="text-xl font-semibold leading-7 text-gray-900">Profile</h2>
    </div>


    <div class="border-b border-gray-900/10 pb-12">
      {/* <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2> */}
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2 flex">
            <input id="email" name="email" type="email" onChange={doUpdate} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            <button type="button" onClick={doSearchWithToken} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div class="mt-2">
            <input type="text" name="fname" value={obj.fname} onChange={doUpdate} id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>


        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div class="mt-2">
            <input type="text" name="lname" value={obj.lname} id="lname" onChange={doUpdate} autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

      
        <div class="sm:col-span-3">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
          <div class="mt-2">
            <input id="country" type="number" name="mobile" value={obj.mobile} onChange={doUpdate} autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"/>
            </div>
        </div>

        <div class="col-span-full">
          <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
          <div class="mt-2">
            <input type="text" onChange={doUpdate} value={obj.address} name="address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div class="mt-2">
            <input type="text" name="city" value={obj.city} onChange={doUpdate} id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Village</label>
          <div class="mt-2">
            <input type="text" name="village" id="region" value={obj.village} onChange={doUpdate} autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Aadhar Number</label>
          <div class="mt-2">
            <input type="number" value={obj.aadhar} onChange={doUpdate} name="aadhar" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      

      {/* <div class="col-span-full">
        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
        <div class="mt-2 flex items-center gap-x-3">
          <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
          </svg>
          <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
        </div>
      </div> */}

      <div class="col-span-full">
        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Aadhar Card</label>
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
  <button type="button" onClick={doUpdatedata} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
  <button type="button" onClick={doSaveWithPic} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
    </div>
  )
}

export default Profile