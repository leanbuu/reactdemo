import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Qlsanpham from './components/common/Qlsanpham';
import Qlnhanvien from './components/common/Qlnhanvien';
import Dangnhap from './components/common/Dangnhap';
import Qlkhohang from './components/common/Qlkhohang';
import Qlhoadon from './components/common/Qlhoadon';
import Qlbanhang from './components/common/Qlbanhang';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
          <Routes>
             <Route path="/" element={<App />}></Route>
             <Route path='Qlsanpham' element={<Qlsanpham />} ></Route>
             <Route path='Qlnhanvien' element={<Qlnhanvien />} ></Route>
             <Route path='Dangnhap' element={<Dangnhap />} ></Route>
             <Route path='Qlkhohang' element={<Qlkhohang />} ></Route>
             <Route path='Qlhoadon' element={<Qlhoadon />} ></Route>
             <Route path='Qlbanhang' element={<Qlbanhang />} ></Route>
         </Routes>
  </BrowserRouter>
);
reportWebVitals();
