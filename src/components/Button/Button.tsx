import React, { useRef, useEffect} from 'react';
import gsap from 'gsap';
import { PropsTypeBtn } from '../modejs';
import styled, {css} from "styled-components";

export const ButtonId = styled.button<{left: string, top: string, corner: string, classActive: string}>`
  position: absolute;
  left: ${({left}) => left};
  top: ${({top}) => top};
  border-radius: 50%;
  padding: 0;
  width: 15px;
  height:15px;
  margin-left: -7px;
  margin-top: -7px;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  background-color: #9D45CC;
  font-size: 7px;
  cursor: pointer;
  transform: rotate(${({corner}) => corner});
  font-family: 'Rubik', sans-serif;
  font-weight: 500;

${({classActive}) => {
  switch (classActive) {
     case 'true':
        return css `
           width: 50px;
           height: 50px;
           margin-left: -20px;
           margin-top: -27px;
           border-radius: 50%;
           align-items: center;
           justify-content: center;
           background-color: #9D45CC;
           color: white;
           font-size: 24px;
           cursor: not-allowed;
           font-family: 'Rubik', sans-serif;
           font-weight: 500;
        `;
        default:
            return css`
          `;
    }
}}
`;

function Button({cor, corner, x, y, id, name, classActive, buttonOnClick}: PropsTypeBtn) {

  const refButton = useRef<HTMLButtonElement  | null>(null);

  const handleMouseEnter = () => gsap.to(refButton.current, {scale: 3.5});
  const handleMouseLeave = () => gsap.to(refButton.current, {scale: 1});

  useEffect(() => {
    gsap.to(refButton.current, {rotate: corner-60});
  },[corner]);

  return (
    <>
      {classActive === 'false' ?
        <ButtonId onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => buttonOnClick(id,name,cor, refButton)}
          classActive={classActive}
          corner={-60+'deg'}
          left= {x+'px'}
          top= {y+'px'}
          ref={refButton}
        >{id}</ButtonId> :
        <ButtonId
          onMouseLeave={handleMouseLeave}
          classActive={classActive}
          corner={-60+'deg'}
          left= {x+'px'}
          top= {y+'px'}
          ref={refButton}
        >{id}</ButtonId>
      }
    </>
  )
}

export default Button