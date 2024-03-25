import {publicAxios,privateReq} from './axios-config';

const doSave= (obj)=>
{
   return  publicAxios.post("/profile/add-grower",obj);
}

const doValidateTokenWithAxios=()=>{
   return privateReq.get("/profile/token-validation");
}

const doSearchAndValidateToken=(email)=>{
   return privateReq.get("/profile/fetch-token?email="+email);
}

export {doSave,doValidateTokenWithAxios,doSearchAndValidateToken};