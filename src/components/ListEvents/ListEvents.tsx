import Event from '../Event/Event';
import { ContentListType, TypeListEvents } from '../modejs';
import styled from "styled-components";

const EventsList = styled.div`
  font-size: 25px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
`;

function ListEvents({filteredEvents}: TypeListEvents) {

  const EventsRender = filteredEvents.map((value: ContentListType) => {
    const {...itemProps} = value;
    return <Event {...itemProps} key = {value.id}/>
  });

  return <EventsList>{EventsRender}</EventsList>

}

export default ListEvents;