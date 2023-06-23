import React from 'react'
import "../Styles/Home.scss"
import Banner from "../assets/img/Banner.webp"
const Home = () => {
    return (
        <div className="homeContainer">
            <div className="slideBanner">

            </div>
            <div className="discount">
                <h1>KHUYẾN MÃI HÔM NAY</h1>
                <div className="bannerDiscount">
                    <img src={Banner} alt="" />
                </div>

                <div className="benefit">
                    <div className="benefit__item"><i className="fa-regular fa-paper-plane"></i>Miễn phí vận chuyển</div>
                    <div className="benefit__item"><i className="fa-solid fa-headphones-simple"></i>Hỗ trợ khách hàng 24/7</div>
                    <div className="benefit__item"><i class="fa-solid fa-cash-register"></i>Hoàn tiền 100%</div>


                </div>
            </div>

        </div>
    )
}

export default Home