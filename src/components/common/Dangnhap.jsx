
import '../../App.css'
import logo1 from '../../assets/logo1.png'
import Login from '../page/Login';

function Dangnhap() {
  return (
    <div>  
       <main className='w-full flex flex-row'>
        <div className='basis-1/3'><img width="auto" height="auto" src={logo1} alt="#"></img></div>
      <div className='basis-2/3 bg-white text-center' width="auto"><Login></Login></div>
      </main>
    </div>
  )
}

export default Dangnhap;