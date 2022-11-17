import React, {useRef, useEffect, RefObject} from 'react';
import {
    ContentBox,
    Container,
    ButtonContainer,
    ButtonName,
    NavPagination,
    ButtonNext,
    ButtonPrev,
    PaginationNum
} from '../StyleComponent';
import Button from '../Button/Button';
import { PropsTypeNav } from '../modejs';
import gsap from 'gsap';

export type PropsRefType = {
  nameRef: RefObject<HTMLParagraphElement>;
  containerRef: RefObject<HTMLParagraphElement>
};

const Navigation = React.forwardRef<PropsRefType, PropsTypeNav>((props, ref) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.from(nameRef.current,{opacity: 0});
    gsap.to(containerRef.current,{rotate: -props.corner, duration: 0.5});
    gsap.to(nameRef.current,{opacity: 1});
  },[props.corner]);


  const buttons = [
    {id: 1, name: 'История', cor: 0},
    {id: 2, name: 'Наука', cor: 60}, 
    {id: 3, name: 'Музыка', cor: 120},
    {id: 4, name: 'Кино', cor: 180},
    {id: 5, name: 'Спорт', cor: 240},
    {id: 6, name: 'Экономика', cor: 300}
  ];

  let classDsbPrev;
  let classDsbNext;

  if(props.buttonActive ===1 ) {
    classDsbPrev = true;
      }else if(props.buttonActive === 6) {
        classDsbNext = true;
      }else {
        classDsbPrev = false;
        classDsbNext = false;
  }

  const arc = 2 * Math.PI * (1 / buttons.length);

  const buttonRender = buttons.map(({name,id,cor}) => {

    const angle = id * arc;
    const y = 250 * Math.sin(angle);
    const x = 250 * Math.cos(angle);
    const isActive = props.filterName === name;
    let classActive;

    if(isActive) {
      classActive='true';
    }else {
      classActive='false';
    }

    return (
      <ButtonContainer key={id}>
        <Button buttonOnClick={props.buttonOnClick}
          x={-x}
          y={-y}
          id={id}
          classActive={classActive}
          name={name}
          cor={cor}
          corner={props.corner}
        />
      </ButtonContainer>
    )
  })

  return (
    <>
      <ContentBox>
        <ButtonName ref={nameRef}>{props.filterName}</ButtonName>
        <Container  ref={containerRef}>{buttonRender}</Container>
      </ContentBox>
      <NavPagination>
        <PaginationNum>0{props.buttonActive}/0{buttons.length}</PaginationNum>
        <ButtonPrev  onClick={() => props.onChangePrev(buttons, props.buttonActive)} disabled = {classDsbPrev}/>
        <ButtonNext onClick={() => props.onChangeNext(buttons, props.buttonActive)} disabled ={classDsbNext}/>
      </NavPagination>
    </>
  )
  });

export default Navigation