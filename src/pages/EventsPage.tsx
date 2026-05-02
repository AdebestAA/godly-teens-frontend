import React from "react";
import Events from "../components/Events";
import PastEvents from "../components/PastEvents";

const EventsPage: React.FC = () => {
  return (
    <div>
      <Events />
      <PastEvents />
    </div>
  );
};

export default EventsPage;
