"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { CreditCard } from "./credit-card";

const cards = [
  {
    balance: 5756,
    holder: "Eddy Cusuma",
    validThru: "12/26",
    number: "3778 4211 6578 1234",
    color: "from-indigo-500 to-blue-500",
    cvv: "123",
  },
  {
    balance: 3120,
    holder: "Nazar Malakhovskyi",
    validThru: "08/25",
    number: "5523 7651 6434 8844",
    color: "from-purple-500 to-pink-500",
    cvv: "456",
  },
  {
    balance: 980,
    holder: "Igor Developer",
    validThru: "03/27",
    number: "4211 1323 1321 2077",
    color: "from-teal-500 to-emerald-500",
    cvv: "789",
  },
];

export const CardSwiper: React.FC = () => {

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        style={{ width: "320px", height: "180px" }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <CreditCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
