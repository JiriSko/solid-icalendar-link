import type { ParentProps } from 'solid-js';
import html from 'solid-js/html';

import { buildUrl, downloadBlob, isCrappyIE, isIOSSafari, isIOSChrome } from './utils';
import type { ICalEvent } from './utils';

interface Props {
	className?: string;
	event: ICalEvent;
	filename?: string;
	href?: string;
	rawContent?: string;
}

const isSupported = !isIOSChrome();

export default function ICalLink(props: ParentProps<Props>) {
	const className = () => props.className || '';
	const href = () => props.href || '#add-to-calendar';

	const handleClick = (event: MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();

		const filename = () => props.filename || 'download.ics';
		const rawContent = () => props.rawContent || '';

		const url = buildUrl(props.event, isIOSSafari(), rawContent());
		const blob = new Blob([url], { type: 'text/calendar;charset=utf-8' });

		if (isCrappyIE()) {
			window.navigator.msSaveOrOpenBlob(blob, filename());
		} else if (isIOSSafari()) {
			window.open(url, '_blank');
		} else {
			downloadBlob(blob, filename());
		}
	};

	return html`<a class=${className} href=${href} onClick=${handleClick}>${() => props.children}<//>`;
}

export { ICalEvent, isSupported };
