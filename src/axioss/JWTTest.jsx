import React from 'react';
import {doValidateTokenWithAxios} from "../services/user-controller";

function JWTTest() {

    async function doTest()
    {
        var serverMsg=await doValidateTokenWithAxios();
        //alert(JSON.stringify(serverMsg));
         if(serverMsg.data.status==true)
         {
             let obj=JSON.stringify(serverMsg.data.item);
             alert("Saved Successfullyyyyy" +serverMsg.data.msg+" object="+obj);
         }
             else    
             alert(serverMsg.data.msg);
    }
  return (
    <div>
        <input type="button" value="Do Validate Token" onClick={doTest} className="border border-black"/>
    </div>
  )
}

export default JWTTest