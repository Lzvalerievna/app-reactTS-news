import Event from '../Event/Event';
import {EventsList} from '../StyleComponent';
import { ContentListType, TypeListEvents } from '../modejs';

function ListEvents({filteredEvents}: TypeListEvents) {

  const EventsRender = filteredEvents.map((value: ContentListType) => {
    const {...itemProps} = value;
    return <Event {...itemProps} key = {value.id}/>
  });

  return <EventsList>{EventsRender}</EventsList>

}

export default ListEvents;