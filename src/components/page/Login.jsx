import React from 'react';
import '../../App.css'


function Login() {
  return (
        <div class="flex w-full  justify-center items-center bg-white space-y-8 mt-36">
            <div class="w-full m-1">
            <form class="bg-white  h-full">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">Chào Mừng Bạn Đến Với QLCF!</h1>
              <p class="text-sm font-normal text-gray-600 mb-8"></p>
              <div class="flex items-center mb-8 py-2 border-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Địa Chỉ Email" />
              </div>
              <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="Mật Khẩu" />
                
              </div>
              <button type="submit" class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
              <div class="flex justify-between mt-4">
                <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Quên Mật Khẩu?</span>

                <p  class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Bạn Chưa Có Tài Khoản?</p>
              </div>   
            </form>
            </div>
    </div>
   
  );
}
export default Login;