import homepageContent from '$lib/data/homepage.json';

import type { PageLoad } from './$types';
import type { HomePageContent } from '../../../shared/types/HomePageContent';

const fallbackContent = homepageContent as unknown as HomePageContent;

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
