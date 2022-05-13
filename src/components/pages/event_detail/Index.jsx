import React from "react";
import Data from "../../dummy";
import Detail from "./Detail";

const EventDetail = () => {
	return (
		<>
			<Detail data={Data.event_detail} />
		</>
	);
};

export default EventDetail;
