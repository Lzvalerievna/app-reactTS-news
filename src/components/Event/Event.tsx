import React from 'react';
import {FirstDate, LastDate, SliderDate, SliderText, MySwiper, EventDates} from '../StyleComponent';
import {SwiperSlide, Swiper} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { DateListType } from '../modejs';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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