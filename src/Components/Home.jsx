import React, { useState } from 'react'
import "../Styles/Home.scss"
import Banner from "../assets/img/Banner.webp"
import Banner1 from "../assets/img/banner1.webp"
import Banner2 from "../assets/img/banner2.webp"
import Banner3 from "../assets/img/banner3.webp"
import Model from "../assets/img/model.jpg"
import Img8 from "../assets/img/img_8.webp"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';






const Home = () => {


    ///component đếm ngược thời gian

    const { useState, useEffect } = React;

    const Countdown = () => {
        const [countdownDate, setCountdownDate] = useState(new Date('06/25/2024').getTime());
        const [state, setState] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });

        useEffect(() => {
            setInterval(() => setNewTime(), 1000);
        }, []);

        const setNewTime = () => {
            if (countdownDate) {
                const currentTime = new Date().getTime();

                const distanceToDate = countdownDate - currentTime;

                let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
                let hours = Math.floor(
                    (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                );
                let minutes = Math.floor(
                    (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
                );
                let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

                const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                days = `${days}`;
                if (numbersToAddZeroTo.includes(hours)) {
                    hours = `0${hours}`;
                } else if (numbersToAddZeroTo.includes(minutes)) {
                    minutes = `0${minutes}`;
                } else if (numbersToAddZeroTo.includes(seconds)) {
                    seconds = `0${seconds}`;
                }

                setState({ days: days, hours: hours, minutes, seconds });
            }
        };

        return (
            <div>
                <div className='countdown-wrapper'>
                    <div className='time-section'>
                        <div className='time'>{state.days || '0'}</div>
                        <small className="time-text">Days</small>
                    </div>
                    <div className='time-section'>
                        <div className='time'>:</div>
                    </div>
                    <div className='time-section'>
                        <div className='time'>{state.hours || '00'}</div>
                        <small className="time-text">Hours</small>
                    </div>
                    <div className='time-section'>
                        <div className='time'>:</div>
                    </div>
                    <div className='time-section'>
                        <div className='time'>{state.minutes || '00'}</div>
                        <small className="time-text">Minutes</small>
                    </div>
                    <div className='time-section'>
                        <div className='time'>:</div>
                    </div>
                    <div className='time-section'>
                        <div className='time'>{state.seconds || '00'}</div>
                        <small className="time-text">Seconds</small>
                    </div>
                </div>
            </div>
        );
    };




    //componet Home

    return (
        <div className="homeContainer">
            <div className="slideBanner">
                <Carousel infiniteLoop>
                    <div>
                        <img src={Banner1} alt="Slide 1" />
                    </div>
                    <div>
                        <img src={Banner2} alt="Slide 2" />
                    </div>
                    <div>
                        <img src={Banner3} alt="Slide 3" />
                    </div>
                </Carousel>
            </div>
            <div className="discount">
                <h1><span>KHUYẾN MÃI HÔM NAY</span></h1>
                <div className="bannerDiscount">
                    <img src={Banner} alt="" />
                </div>

                <div className="benefit">
                    <div className="benefit__item"><i className="fa-regular fa-paper-plane"></i>Miễn phí vận chuyển</div>
                    <div className="benefit__item"><i className="fa-solid fa-headphones-simple"></i>Hỗ trợ khách hàng 24/7</div>
                    <div className="benefit__item"><i class="fa-solid fa-cash-register"></i>Hoàn tiền 100%</div>


                </div>
            </div>

            <div className="product">
                <div className="product__title">
                    <p>SẢN PHẨM MỚI / BÁN CHẠY NHẤT / KHUYẾN MÃI</p>
                    <div className="arrow">
                        <i className="fa-solid fa-chevron-left"></i>
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
                <div className="list__product">
                    <div className="itemProduct">
                        <div className="productImg">
                            <span className='product__lable'>Sale</span>
                            <img src={Img8} alt="" />
                            <div className="product__action">
                                <div className="add__cart"><i className="fa-solid fa-cart-plus"></i></div>
                                <div className="view__detail"><i className="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                        <div className="productDesc">
                            <span className='nameProduct'>Áo Chery thời trang </span>
                            <p className='priceProduct'>200,000đ <span className='old__price'>300,000đ</span> </p>

                        </div>

                    </div>
                    <div className="itemProduct">
                        <div className="productImg">
                            <span className='product__lable'>Sale</span>
                            <img src={Img8} alt="" />
                            <div className="product__action">
                                <div className="add__cart"><i className="fa-solid fa-cart-plus"></i></div>
                                <div className="view__detail"><i className="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                        <div className="productDesc">
                            <span className='nameProduct'>Áo Chery thời trang </span>
                            <p className='priceProduct'>200,000đ <span className='old__price'>300,000đ</span> </p>

                        </div>

                    </div>
                    <div className="itemProduct">
                        <div className="productImg">
                            <span className='product__lable'>Sale</span>
                            <img src={Img8} alt="" />
                            <div className="product__action">
                                <div className="add__cart"><i className="fa-solid fa-cart-plus"></i></div>
                                <div className="view__detail"><i className="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                        <div className="productDesc">
                            <span className='nameProduct'>Áo Chery thời trang </span>
                            <p className='priceProduct'>200,000đ <span className='old__price'>300,000đ</span> </p>

                        </div>

                    </div>
                    <div className="itemProduct">
                        <div className="productImg">
                            <span className='product__lable'>Sale</span>
                            <img src={Img8} alt="" />
                            <div className="product__action">
                                <div className="add__cart"><i className="fa-solid fa-cart-plus"></i></div>
                                <div className="view__detail"><i className="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                        <div className="productDesc">
                            <span className='nameProduct'>Áo Chery thời trang </span>
                            <p className='priceProduct'>200,000đ <span className='old__price'>300,000đ</span> </p>
                        </div>

                    </div>
                </div>

            </div>

            <div className="time__sale">
                <div className="time__countdown">
                    <p className='time__title'>GIẢM 50%</p>
                    <p className='time__desc'>Thời trang Fashion-shop giảm từ 35% lên đến 50% đối với bộ sưu tập hè</p>
                    <Countdown />

                </div>
                <img src={Model} alt="" />
            </div>



            <div className="ads__footer">
                <p className='ads__title'>
                    HƠN 20,000 DOANH NGHIỆP, CÁ NHÂN ĐÃ CHỌN FASHION-SHOP
                </p>
                <p className='ads__titleDesc'> Hãy nghe khách hàng đã sử dụng nói về chúng tôi</p>
                <div className="ads__comment">
                    <div className="comment__box">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia minima necessitatibus, deleniti laboriosam natus assumenda temporibus neque sunt libero, at ad a est repudiandae.</p>
                        <hr />
                        <h3> ENGO</h3>
                        <p>CEO & Founder EngoCreative</p>
                        <div className="ads__userComment">

                        </div>
                    </div>
                    <div className="comment__box">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia minima necessitatibus, deleniti laboriosam natus assumenda temporibus neque sunt libero, at ad a est repudiandae.</p>
                        <hr />
                        <h3> ENGO</h3>
                        <p>CEO & Founder EngoCreative</p>
                        <div className="ads__userComment">

                        </div>
                    </div>
                    <div className="comment__box">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia minima necessitatibus, deleniti laboriosam natus assumenda temporibus neque sunt libero, at ad a est repudiandae.</p>
                        <hr />
                        <h3> ENGO</h3>
                        <p>CEO & Founder EngoCreative</p>
                        <div className="ads__userComment">

                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Home