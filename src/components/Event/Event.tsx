import React from 'react';
import {SwiperSlide, Swiper} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { DateListType } from '../modejs';
import styled from "styled-components";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const FirstDate = styled.div`
  color: #5D5FEF;
`;

const LastDate = styled.div`
  color: #EF5DA8;
  padding-left: 60px;
`;

const MySwiper = styled.div`
  width: 1060px;
  margin-top: 170px;
  margin-left: 95px;
  overflow: hidden;
`;
const SliderDate = styled.h1`
  font-size: 26px;
  color: #3877EE;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
`;

const SliderText = styled.p`
  padding-bottom: 30px;
  color: #565861;
  font-size: 24px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

const EventDates = styled.div`
  display: flex;
  font-size: 200px;
  margin-top: -365px;
  margin-left: 120px;
`;

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Event({dates}: DateListType) {

  const arrayDates: string[] = Object.keys(dates);
  const arrayDatesText: string[] = Object.values(dates);
   
  return (
    <>
      <EventDates>
        <FirstDate>{arrayDates[0]}</FirstDate>
        <LastDate>{arrayDates[5]}</LastDate>
      </EventDates>
      <MySwiper>
        <Swiper  
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true}}
        >
          {arrayDates.map((date, index) => (
            <SwiperSlide key={date} virtualIndex={index}>
                <SliderDate>{date}</SliderDate>
                <SliderText>{arrayDatesText[index]}</SliderText>
            </SwiperSlide>
          ))}
        </Swiper>
      </MySwiper>
    </>
  )
}
  
export default Event