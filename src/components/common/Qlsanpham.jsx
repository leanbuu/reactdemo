import Header from './Header'
import '../../App.css'
import Chucnang from '../page/Chonchucnang';
import Footer from './Footer';
import Danhsach from '../page/Danhsachcn';
import Congcu from '../page/Congcu';
function Qlsanpham() {
  return (
    
    <div>
      <Header></Header>
      <div class="flex flex-row ">
        <div class="basis-3/5 mr-9 ml-1 grid grid-flow-row auto-rows-max">
          <Chucnang></Chucnang> 
          <Congcu></Congcu></div>
          
        <div class="basis-2/5 bg-white rounded-t-lg rounded-b-lg mr-1"> 
          <div className='border-zinc-800'>
            <div className='w-full py-3   h-10 rounded-t-lg rounded-b-lg mb-1 text-2xl text-bold text-center '>Danh Sách Sản Phẩm</div>
            <div className='w-full py-3  h-10 rounded-t-lg rounded-b-lg mb-4 text-sm text-bold text-center '><button className= 'align-middle text-center bg-cyan-500 text-white  border-white'>Xem Tất Cả</button></div>
          </div> 
         <Danhsach></Danhsach></div>
      </div>
      <Footer></Footer>
   </div>
  );
}
export default Qlsanpham;