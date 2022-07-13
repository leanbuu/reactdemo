import React from 'react';
import '../../App.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function Listdaban() {
    return (
        <div class="w-full overflow-y-auto bg-slate-200 cao" >
        <div class="max-w-7xl mx-auto scroll-auto">
          <div class="grid grid-cols-1">

            {/* sản phảm */}
            <Link to="?"><div class=" flex flex-row h-24 m-1 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
                <img class="basis-1/4 w-24 h-24 rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
                  <div class="basis-1/4 text-xl font-bold text-black inline-block align-middle text-center">Cà Phê Đen Đá</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">40.000đ</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">M</div>
            </div></Link>
            <Link to="?"><div class=" flex flex-row h-24 m-1 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
                <img class="basis-1/4 w-24 h-24 rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
                  <div class="basis-1/4 text-xl font-bold text-black inline-block align-middle text-center">Cà Phê Đen Đá</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">40.000đ</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">M</div>
            </div></Link>
            <Link to="?"><div class=" flex flex-row h-24 m-1 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
                <img class="basis-1/4 w-24 h-24 rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
                  <div class="basis-1/4 text-xl font-bold text-black inline-block align-middle text-center">Cà Phê Đen Đá</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">40.000đ</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">M</div>
            </div></Link>
            <Link to="?"><div class=" flex flex-row h-24 m-1 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
                <img class="basis-1/4 w-24 h-24 rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
                  <div class="basis-1/4 text-xl font-bold text-black inline-block align-middle text-center">Cà Phê Đen Đá</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">40.000đ</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">M</div>
            </div></Link>
            <Link to="?"><div class=" flex flex-row h-24 m-1 bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
                <img class="basis-1/4 w-24 h-24 rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
                  <div class="basis-1/4 text-xl font-bold text-black inline-block align-middle text-center">Cà Phê Đen Đá</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">40.000đ</div>
                <div class="basis-1/4 text-xl font-bold uppercase text-teal-700 align-middle text-center">M</div>
            </div></Link>
           
      
          </div>
        </div>
      </div>
        
        )
    }
    
    export default Listdaban;