import { EventBoard } from "./EventBoard/EventBoard";
import { PageTitle } from "./PageTitle/PageTitle";
import upcomingEvents from '../upcoming-events.json'

export const App = () => {
  return (
    <div>
      <PageTitle text="1-st Traditional Annual Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  )
};
