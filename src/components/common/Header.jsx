import logo from "../../assets/logo.png";
import '../../App.css'
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FiHeadphones } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  BiBuildingHouse
} from "react-icons/bi";


function Header() {
  return (
    <div>
      <div id="header" >
      <div className="bg-stone-500 flex items-center justify-end p-3 text-[#fff] text-sm px-10">
        <Link to="/#">
          <div
            className="flex items-center ml-10"     
          >
            <BiBuildingHouse size={"18px"} className="mr-2" />
            Fanpage chính thức
          </div>
        </Link>
        <div className="flex items-center ml-10">
          <FiHeadphones size={"18px"} className="mr-2" />
          Tư vấn sử dụng :{" "}
          <span className="text-amber-400 ml-1">0889 506 570</span>
        </div>
       
        <Link to="/baoloi">
          <div className="flex items-center ml-10">
            <HiOutlineDesktopComputer className="mr-2" />
            Báo cáo lỗi
          </div>
        </Link>
      </div>
         <div id="menu li" class="flex flex-row">
           <div class="m-auto"><Link to="/?"><img width="50px" height="50px" src={logo} alt="#"></img></Link></div>
           <Link to="/qlsanpham" class="basi"><li>Sản Phẩm</li></Link>
           <Link to="/qlbanhang" class="basi"><li>Bán Hàng</li></Link>
           <Link to="/qlhoadon" class="basi"><li>Hóa Đơn</li></Link>
           <Link to="/qlnhanvien" class="basi"><li>Nhân Viên</li></Link>
           <Link to="/qlkhohang" class="basi"><li>Kho Hàng</li></Link>
           <Link to="/dangnhap" class="basi">
            <div className="icon--header text-xl mt-3 text-green-500 font-semibold">
              <RiAccountCircleLine size={"28px"} className="icon-login " />
              Đăng nhập
            </div>  
          </Link>
               
        </div> 
      </div>
    </div>
  )
}

export default Header