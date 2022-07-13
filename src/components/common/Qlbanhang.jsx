import Header from './Header';
import '../../App.css'
import Listbanhang from '../page/Listbanhang';
import Footer from './Footer';
import Listdaban from '../page/Listdaban';

function Qlbanhang() {
  return (
    <div>  
          <Header></Header>
          <div class="flex flex-row">
          <div className='basis-3/5 ml-1'><Listbanhang></Listbanhang></div>
          <div class="basis-2/5 bg-white rounded-t-lg rounded-b-lg mr-1"> 
          <div className='border-zinc-800'>
            <div className='w-full py-3   h-10 rounded-t-lg rounded-b-lg mb-1 text-2xl text-bold text-center '>Sản Phẩm Đã Bán</div>
            <div className='w-full py-3  h-10 rounded-t-lg rounded-b-lg mb-4 text-sm text-bold text-center '><button className='text-center bg-cyan-500 text-white align-middle border-white align-center'>Xem Tất Cả</button></div>
            <div class="flex flex-row m-1 bg-white rounded-lg font-bold align-middle text-center">
            <div className='basis-1/4 '></div>
            <div className='basis-1/4'>Tên Sản Phẩm</div>
            <div className='basis-1/4'>Giá</div>
            <div className='basis-1/4'>Size</div>
          </div>
          </div> 
           <Listdaban></Listdaban> </div>
      </div>
      <Footer></Footer>
   </div>
         
    
  )
}

export default Qlbanhang;