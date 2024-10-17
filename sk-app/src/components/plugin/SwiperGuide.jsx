import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/swiper_guide.scss';

import $ from "jquery";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { headerdata } from '../data/headerarea';
import { Link } from 'react-router-dom';

export default function SwiperGuide() {

    const hData = headerdata;
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  // 글자 등장함수
  const appearText = (swp, ridx) => {
    $(swp.slides[ridx])
      .find(".htitle")
      .addClass("on")
      .parent()
      .siblings(".swiper-slide")
      .find(".htitle")
      .removeClass("on");
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="SwiperGuide"
        onInit={(swp)=>{
          appearText(swp, 0); // 글자 등장 함수호출
        }}
        onSlideChange={(swp) => {
          let ridx = swp.realIndex;
          // console.log(swp.slides[ridx]); // swiper.realIndex is the current slide index
          appearText(swp, ridx); // 글자 등장 함수호출
        }}
      >
        {hData.map((v, i) => (
          <SwiperSlide key={i}>
            <div className="header-slide">
              <Link to="/cookguide">
                <img
                  src={process.env.PUBLIC_URL + `/image/${v.imgName}.jpg`}
                  alt="가이드 이미지"
                />
              </Link>
            </div>
            <div className="htitle">
              <span>
                {v.title.indexOf("*") == -1 ? (
                  v.title
                ) : (
                  <>
                    {v.title.split("*")[0]}
                    <br />
                    {v.title.split("*")[1]}
                  </>
                )}
              </span>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </>
  );
}
