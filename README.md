# solid-icalendar-link

> Ability to create link for downloading ics file

[![NPM](https://img.shields.io/npm/v/solid-icalendar-link.svg)](https://www.npmjs.com/package/solid-icalendar-link)

SolidJS version of [react-icalendar-link](https://github.com/josephj/react-icalendar-link).

## Install

```bash
npm install --save solid-icalendar-link
```

## Usage

```jsx
import ICalendarLink from 'solid-icalendar-link';
import { render } from 'solid-js/web';

const App = () => {
	const event = {
		title: 'My Title',
		description: 'My Description',
		startTime: '2018-10-07T10:30:00+10:00',
		endTime: '2018-10-07T12:00:00+10:00',
		location: '10 Carlotta St, Artarmon NSW 2064, Australia',
		attendees: ['Hello World <hello@world.com>', 'Hey <hey@test.com>'],
	};

	return <ICalendarLink event={event}>Add to Calendar</ICalendarLink>;
};

render(() => <App />, document.getElementById('app'));
```

### Using Raw Content

Currently it provides very few fields. You can provide the raw content for the extra fields instead.

```jsx
import ICalendarLink from 'solid-icalendar-link';
import { render } from 'solid-js/web';

const App = () => {
	const event = {
		title: 'My Title',
		description: 'My Description',
		startTime: '2018-10-07T10:30:00+10:00',
		location: '10 Carlotta St, Artarmon NSW 2064, Australia',
	};
	const rawContent = `ATTENDEE;CN="Cyrus Daboo";CUTYPE=INDIVIDUAL;PARTSTAT=ACCEPTED:mailto:cyrus@example.com
ATTENDEE;CN="Wilfredo Sanchez Vega";CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;ROLE=REQ-PARTICIPANT;RSVP=TRUE:mailto:wilfredo@example.com
ATTENDEE;CN="Bernard Desruisseaux";CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;ROLE=REQ-PARTICIPANT;RSVP=TRUE:mailto:bernard@example.net
ATTENDEE;CN="Mike Douglass";CUTYPE=INDIVIDUAL;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:mike@example.org`;

	return (
		<ICalendarLink event={event} rawContent={rawContent}>
			Add to Calendar
		</ICalendarLink>
	);
};
```

## License

MIT
