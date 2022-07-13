import { Link } from 'react-router-dom'
import '../../App.css'
import logo from "../../assets/logo.png"

function Danhsach() {
  return (
    <div class="w-full overflow-y-auto bg-slate-200 cao" >
    <div class="max-w-7xl mx-auto scroll-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:gap-2">
        {/* sản phảm */}
        <Link to="?"><div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
            <img class="rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
            <div class="p-2">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Cà Phê Đen Đá</h5>
              <div class="text-xl font-bold uppercase text-teal-700 mt-1 mb-2">40.000đ</div>
              <h5 class="mb-2 text-sl underline tracking-tight text-black hover:text-b"><Link to="?">Chỉnh Sửa</Link></h5>
            </div>
        </div></Link>
        <Link to="?"><div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
            <img class="rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
            <div class="p-2">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Cà Phê Đen Đá</h5>
              <div class="text-xl font-bold uppercase text-teal-700 mt-1 mb-2">40.000đ</div>
              <h5 class="mb-2 text-sl underline tracking-tight text-black hover:text-b"><Link to="?">Chỉnh Sửa</Link></h5>
            </div>
        </div></Link>
        <Link to="?"><div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
            <img class="rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
            <div class="p-2">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Cà Phê Đen Đá</h5>
              <div class="text-xl font-bold uppercase text-teal-700 mt-1 mb-2">40.000đ</div>
              <h5 class="mb-2 text-sl underline tracking-tight text-black hover:text-b"><Link to="?">Chỉnh Sửa</Link></h5>
            </div>
        </div></Link>
        <Link to="?"><div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
            <img class="rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
            <div class="p-2">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Cà Phê Đen Đá</h5>
              <div class="text-xl font-bold uppercase text-teal-700 mt-1 mb-2">40.000đ</div>
              <h5 class="mb-2 text-sl underline tracking-tight text-black hover:text-b"><Link to="?">Chỉnh Sửa</Link></h5>
            </div>
        </div></Link>
        <Link to="?"><div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 hover:bg-gray-200 ">
            <img class="rounded-t-lg px-2 py-2"  src={logo} alt="#"></img> 
            <div class="p-2">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">Cà Phê Đen Đá</h5>
              <div class="text-xl font-bold uppercase text-teal-700 mt-1 mb-2">40.000đ</div>
              <h5 class="mb-2 text-sl underline tracking-tight text-black hover:text-b"><Link to="?">Chỉnh Sửa</Link></h5>
            </div>
        </div></Link>
       
  
      </div>
    </div>
  </div>
    
  )
}

export default Danhsach