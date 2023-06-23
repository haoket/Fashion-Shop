
import { Button } from '@mui/material'
import './App.scss'
import Home from './Components/Home'
import Login from './Components/Login'
import Logo from '../src/assets/img/logo.webp'
import Cart from '../src/assets/img/cart.png'
import { useState } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Register from './Components/Register'
import Contact from './Components/Contact'
import Product from './Components/Product'
import News from './Components/News'
import Introduce from './Components/Introduce'
function App() {
  const [open, setIsOpen] = useState(false);

  return (

    <div className='container'>
      <div className="top__header">
        <span>Hỗ trợ 24/7: 0386043213</span>
        <div className="btn__header">

          <Button> Đăng nhập</Button>
          <Button> Đăng ký</Button>
        </div>



      </div>
      <div className="header__logo">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="cart">
          <img src={Cart} alt="" />
        </div>

      </div>

      <div className="navbar ">

        {!open && <nav role="navigation">
          <Link to="/">Trang Chủ</Link>
          <div className="dropdown">
            <Link to="/product">Sản Phẩm</Link>
            <div className="dropdown__content">
              <Link to="#">Thời Trang Nam</Link>
              <Link to="#">Thời trang nữ</Link>
              <Link to="#">Phụ kiện</Link>
              <Link to="#">Thời trang hè</Link>
            </div>
          </div>

          <Link to="/news">Tin Tức</Link>
          <Link to="/introduce">Giới Thiệu</Link>
          <Link to="/contact">Liên Hệ</Link>


        </nav>}


        <div className="btn__mobile" onClick={() => setIsOpen(!open)}>
          <i className="fa-solid fa-bars"></i>

        </div>

        <div className="search">
          <input type="text" placeholder='Search' />
          <div className="btn__search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

      </div>

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/News' element={<News />}></Route>
        <Route path='/Introduce' element={<Introduce />}></Route>
      </Routes>






      <div className="submit__email">
        <h1>ĐĂNG KÝ NGAY ĐỂ NHẬN BẢN TIN </h1>
        <p>Nhận mã giảm giá 15% khi đăng ký</p>
        <div className="input__email">
          <input type="text" placeholder='Your Email' />
          <button>
            Theo dõi
          </button>
        </div>
      </div>

      <div className="footer">
        <div className="footer_desc">
          <h1>Về chúng tôi</h1>
          <p>Địa chỉ: Đà Nẵng </p>
          <p>Phone: 0386043213</p>
          <p>Email: haoketys@gmail.com</p>
        </div>
        <div className="footer_desc">
          <h1>Xu hướng</h1>
          <p>Sản phẩm khuyến mãi</p>
          <p>Sản phẩm nổi bật</p>
          <p>Tất cả sản phẩm</p>
        </div>
        <div className="footer_desc">
          <h1>Mở cửa</h1>
          <p>Thứ 2 - Thứ 7 </p>
          <p>Sáng 10:00 - Chiều 5:00</p>

        </div>


      </div>
      <div className="desc">
        <p>Copyrights by Hao Ket</p>
      </div>


    </div>

  )
}

export default App
