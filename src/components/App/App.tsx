import React, {useState, useRef} from 'react';
import {values} from '../fileDate';
import { ContentListType, ButtonsListType} from '../modejs';
import ListEvents from '../ListEvents/ListEvents';
import Navigation, {PropsRefType} from '../Navigation/Navigation';
import gsap from 'gsap';
import styled from "styled-components";

const ContainerApp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: 50%;
  transform: translate(-50%,-50%);
  width: 1248px;
  height: 1248px;
  background: 
    linear-gradient( #42567A, transparent 1px),
    linear-gradient(90deg,#42567A, transparent 1px);
    background-size: 624px 624px;
    border: 1px solid #42567A;
`;

const AppName = styled.h1`
  margin: 0;
  width: 353px;
  height: 134px;
  font-size: 56px;
  color: #696c7a;
  line-height: 120%;
  padding-left: 78px;
  padding-top: 178px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
`;

function App() {

  const [show] = useState(values);
  const [filterName, setFilterName] = useState<string>('История');
  const [buttonActive, setButtonActive] = useState<number>(1);
  const [corner, setCorner] = useState<number>(0);
  const chiledRef = useRef<PropsRefType>(null)

  const buttonOnClick = (id: number, filterName: string, cor: number, refButton: React.MutableRefObject<HTMLButtonElement | null>) => {
    setFilterName(filterName);
    setButtonActive(id);
    setCorner(cor);
    gsap.to(refButton.current, {scale: 1});
  };

  const onChangeNext = (buttons: ButtonsListType[], buttonActive: number) => {
    setButtonActive(buttonActive+1);
    setCorner(buttons[buttonActive].cor);
    setFilterName(buttons[buttonActive].name);
  };

  const onChangePrev = (buttons: ButtonsListType[], buttonActive: number) => {
    if(buttonActive > 1 && buttonActive <= 6) {
      setButtonActive(buttonActive-1);
      setCorner(corner-60);
      setFilterName(buttons[buttonActive-2].name);
    }
  };

  const filtered = (show: ContentListType[], filterName: string) => {
    switch (filterName) {
      case 'История':
        return show.filter((item) => item.valueName === 'История');
      case "Наука":
        return show.filter((item) => item.valueName === 'Наука');
      case "Музыка":
        return show.filter((item) => item.valueName === 'Музыка');
      case "Спорт":
        return show.filter((item) => item.valueName === 'Спорт');
      case "Экономика":
        return show.filter((item) => item.valueName === 'Экономика');
      case "Кино":
        return show.filter((item) => item.valueName === 'Кино');
      default:
        return show.filter((item) => item.valueName === 'История');
    }
  }

  const filteredEvents = filtered(show, filterName);

  return (
    <ContainerApp>
      <AppName>Исторические даты</AppName>
      <Navigation
        ref={chiledRef}
        filterName={filterName}
        corner={corner}
        buttonOnClick={buttonOnClick}
        buttonActive={buttonActive}
        onChangeNext={onChangeNext}
        onChangePrev={onChangePrev}/>
      <ListEvents filteredEvents = {filteredEvents}/>
    </ContainerApp>
  )
}

export default App
