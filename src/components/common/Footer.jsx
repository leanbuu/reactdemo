import React, { useState } from "react";
// import { IoMailOpenOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
;
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSentMail = async () => {
    let dataEmail = new FormData();
    dataEmail.append("email", email);
    // console.log("check email", email);

  
  };
  return (
    <div className="m-1.5 px-3 lg:px-0 ">
      {/* footer block 1 */}
      <div className="bg-stone-500 flex items-center lg:flex-row flex-col p-3 justify-between ">
        <div className="flex items-center lg:ml-10">
          <span className="text-white mr-5">
            <HiOutlineMail size={"50px"} />
          </span>
          <div className="max-w-[300px] text-left text-white ">
            <h5 className="text-xl font-semibold">Nhận Thông Báo</h5>
            <span className="text-sm italic font-normal">
              Bạn Vui Lòng Để Lại Email Để Nhận Những Thông Báo Mới Nhất Từ ANCF
            </span>
          </div>
        </div>
        <div className="lg:w-[595px] w-full relative lg:mr-10 mt-2 lg:mt-0">
          <input
            className="px-1 pl-2 py-2 border-none outline-none rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="text-[#1435c3] absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer hover:text-[#8598f0]"
            onClick={handleSentMail}
          >
            <RiSendPlaneFill size={"20px"} />
          </div>
        </div>
      </div>
      {/* footer block 1 */}
      {/* footer block 2 */}
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-between">
          {/* block1 */}
          <div className="text-left xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              hệ thống cửa hàng
            </h3>
            <div className="mb-2">
              <h4 className="text-[13px]">Flagship store 1</h4>
              <p className="text-[12px]">
                12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh.
              </p>
           
            </div>
          </div>
          {/* block1 */}
          {/* block2 */}
          <div className="text-left xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              thông tin công ty
            </h3>
            <div>
              <p className="text-[13px] mb-1">Công ty Cổ Phần LÊ QUỐC AN</p>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold">Email liên hệ:</h4>
              <p className="text-[12px]">lequocanbuu2001@gmail.com</p>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold">Liên hệ hợp tác:</h4>
              <p className="text-[12px]">0889 506 570</p>
            </div>
          </div>
          {/* block2
      
          {/* block3 */}
          <div className="text-left  xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              thông tin chính sách
            </h3>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              <Link
                to="/chinh-sach-bao-hanh"
              
              >
                Chính sách bảo hành
              </Link>
            </p>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              {" "}
              <Link
                to="/chinh-sach-van-chuyen"
                
              >
                Chính sách vận chuyển
              </Link>
            </p>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              {" "}
              <Link
                to="/huong-dan-tra-gop"
                
              >
                Hướng dẫn trả góp
              </Link>
            </p>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              {" "}
              <Link
                to="/huong-dan-thanh-toan" 
              >
                Hướng dẫn thanh toán
              </Link>
            </p>
          </div> 
          
           
                 
              
              </div>
            </div>
     </div>
  )

  }
 export default Footer;
  