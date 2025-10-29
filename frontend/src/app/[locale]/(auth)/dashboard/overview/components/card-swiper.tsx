"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CreditCard } from "./credit-card";
import { cards } from "@/utils/Data";

export const CardSwiper: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1.1}
      style={{ height: "170px", margin: "0" }}
      breakpoints={{
        400: {
          slidesPerView: 1.2,
        },
        500: {
          slidesPerView: 1.4,
          spaceBetween: 30,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 20,
          allowTouchMove: false,
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <CreditCard {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
