import React,{useState} from 'react';
import axios from 'axios';

function ItemsManager() {
  const [item,addItem]=useState([]);
  const [obj,setObj]=useState({
    email:""
  })
  function doUpdate(event)
  {
    var {name,value}=event.target;
    setObj({...obj,[name]:value});
  }
  function doAdd(arr){
    addItem([...arr]);
  }

  async function removeTask (category,items)
   {
    //const newTasks = [...item];
    //newTasks.splice(index, 1);
    //addItem(newTasks);
    // let temp="";
    // for(let i=0;i<newTasks.length;i++)
    // {
    //   temp+=newTasks[i]+',';
    // }
    
    //let temp = newTasks.join(',');
    // alert(temp)

    const url=`https://g2c-project-3.onrender.com/avail/update?email=${obj.email}&items=${items}&category=${category}`;

    const serverMsg=await axios.get(url);
    if(serverMsg.data.status===true)
       { 
        alert(JSON.stringify(serverMsg.data.msg));   
        doSearch();
      }
      else    
        alert(serverMsg.data.err);
  }

  async function doSearch()
    {
      const url=`https://g2c-project-3.onrender.com/avail/fetch?email=${obj.email}`;

      const serverMsg=await axios.get(url);
     
      if(serverMsg.data.status===true)
       { //alert(JSON.stringify(serverMsg.data.prod));
        // for(let i=0;i<serverMsg.data.prod.length;i++)
        // {
        //   var x=serverMsg.data.prod[i];
        //   addItem(item => [...item, x]);
        // }
       
        const newItems = serverMsg.data.prod;
        addItem(newItems);
        // if(res!="")
        // {var arr = res.split(',');
        // doAdd(arr);
       //}
        //else
        //alert("No items are selected")
      }
      else    
        alert(serverMsg.data.err);
    }

  return (
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="w-full md:w-[800px] m-auto">
        <h1 class="text-xl font-semibold leading-7 text-gray-900 pt-7">Items Manager</h1>
        <br/>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2 flex">
                    <input id="email" name="email" type="email" onChange={doUpdate} autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    <button type="button" onClick={doSearch} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Search</button>
                </div>
            </div>
        </div>
        <div>
            <br/>
            <h3 class="block text-sm font-medium leading-6 text-gray-900">Items Selected</h3>
            <ul class="p-2">
                {item.map((obj,index) => (
                    <li class='flex flex-col md:flex-row m-2 text-sm font-medium leading-6 text-gray-600'>
                        <div class="w-full md:w-[120px]">{index+1}</div>
                        <div class="w-full md:w-[160px]">{obj.category}</div>
                        <div class="w-full md:w-[160px]">{obj.items}</div>
                        <img src={`uploads/${obj.ppic}`} alt="card-image" class="m-auto w-full md:w-[100px] p-2"/>
                        <input type="button" value="Remove" class="rounded-md bg-indigo-600 m-5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => removeTask(obj.category,obj.items)}></input>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>

  )
}

export default ItemsManager