import cookiesContent from '$lib/data/cookies/cookies.json';
import type { CookiesPageContent } from '../../../../shared/types/Cookies';

import type { PageLoad } from './$types';

const fallbackContent = cookiesContent as unknown as CookiesPageContent;

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
