import type { Component } from 'solid-js';
import { render } from 'solid-js/web';

import ICalendarLink, { ICalEvent } from '../../src';

const App: Component = () => {
	const event: ICalEvent = {
		title: 'My Title',
		description: 'My Description',
		startTime: '2018-10-07T10:30:00+10:00',
		endTime: '2018-10-07T12:00:00+10:00',
		location: '10 Carlotta St, Artarmon NSW 2064, Australia',
		attendees: ['Hello World <hello@world.com>', 'Hey <hey@test.com>'],
	};

	return <ICalendarLink event={event}>Add to Calendar</ICalendarLink>;
};

render(() => <App />, document.getElementById('root') as HTMLElement);
