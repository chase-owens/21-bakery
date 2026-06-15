import events from '$lib/data/events/events.json';
import type { EventsPageContent } from '../../../../shared/types/Event';

import type { PageLoad } from './$types';

const fallbackContent = events as unknown as EventsPageContent;

export const load: PageLoad = async () => {
	if (import.meta.env.VITE_IS_MOCK === 'true') {
		return fallbackContent;
	}

	// try {
	// 	const res = await fetch('/data/homepage.json');

	// 	if (!res.ok) {
	// 		throw error(500, 'Homepage content failed to load');
	// 	}

	// 	return (await res.json()) as HomePageContent;
	// } catch (err) {
	// 	throw error(500, `Content failed to load ${err}`);
	// }

	return fallbackContent;
};
