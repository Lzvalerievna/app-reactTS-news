import React, {useState, useRef} from 'react';
import {values} from '../fileDate';
import { ContentListType, ButtonsListType} from '../modejs';
import ListEvents from '../ListEvents/ListEvents';
import Navigation, {PropsRefType} from '../Navigation/Navigation';
import {ContainerApp, AppName} from '../StyleComponent';
import gsap from 'gsap';

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
