import React, { useRef, useEffect} from 'react';
import {ButtonId} from '../StyleComponent';
import gsap from 'gsap';
import { PropsTypeBtn } from '../modejs';

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