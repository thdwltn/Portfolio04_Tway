import { Link } from "react-router-dom";
import SwiperCore, { FreeMode,Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import './Home.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
SwiperCore.use([FreeMode,Autoplay])





function Home(){
  return(
  <div id="boxHome">
    <div>
      
      <div id="box01">
        <ul>
              <li>
                <a href="#">
                  <input type="checkbox" id="toggle" hidden />
                  <label htmlFor="toggle" className="toggleSwitch">
                    <span className="toggleButton">초특가<br/>모드</span>
                  </label>
                </a>
              </li>
            </ul>

            



      </div>





      <div id="box02">
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide><Link to="/"><img src="/images/01austrailia-sidney.png"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/02bietnam-danang.jpg"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/03japan-fukuoka.jpg"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/04japan-tokyo.jpg"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/05korea-busan.png"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/06korea-jeju.png"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/07korea-jeju2.jpg"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/08singapore-singapore.png"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/09tailand-bangkok.jpg"/></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src="/images/10usa-guam.jpg"/></Link></SwiperSlide>
      </Swiper>
      </div>
      <div id="box03">3</div>
      <div id="box04">4</div>
      <div id="box05">5</div>
      <div id="box06">6</div>
      <footer>
        <h4>오늘회 고객센터&nbsp;<b>1661-1319</b></h4>
        <ul>
          <li>고객센터 &middot; 이용약관 &middot;	 공지사항 &middot;	입점문의</li>
          <li>오늘식탁 채용</li>
          <li><i>(주)오늘식탁</i></li>
        </ul>
      </footer>
    </div>
  </div>
  )
}

export default Home;