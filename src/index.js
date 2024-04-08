import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './axioss/Profile';
import Signup from './axioss/Signup';
import Login from './axioss/Login';
import AvailProduct from './axioss/AvailProduct';
import ItemsManager from './axioss/ItemsManager';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './axioss/NavBar';
import FindGrower from './axioss/FindGrower';
import GrowerDash from './axioss/GrowerDash';
import JWTTest from './axioss/JWTTest';
import Dashboard from './axioss/Dashboard';
import Contact from './axioss/Contact';
import Footer from './axioss/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
    <NavBar/>
    {/* <Profile/> */}
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <AvailProduct/> */}
    {/* <ItemsManager/> */}
    {/* <FindGrower/> */}
    {/* <GrowerDash/> */}
    {/* <Dashboard/> */}
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/opengrower" element={<GrowerDash/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/avail" element={<AvailProduct/>}/>
        <Route path="/itemsmanager" element={<ItemsManager/>}/>
        <Route path="/openConsumer" element={<FindGrower/>}/>
        <Route path="/webtokentest" element={<JWTTest/>}></Route>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Footer/>
  </BrowserRouter>
  </div>
);
