// import { error } from '@sveltejs/kit';
// import type { Occasion } from '../../../shared/types/Event';
// import occasionsData from '../../src/lib/data/occasions.json';
// import howItWorksData from '../../src/lib/data/how-it-works.json';

// import type { LayoutLoad } from './$types';

// export const ssr = false;
// export const prerender = 'auto';

// type OccasionsResponse = {
// 	occasions: Occasion[];
// };

// type SidebarResponse = Sidebar;

// async function fetchJson<T>(fetch: typeof globalThis.fetch, path: string): Promise<T> {
// 	const res = await fetch(path);

// 	if (!res.ok) {
// 		const body = await res.text();

// 		throw error(
// 			500,
// 			[
// 				`Failed to fetch ${path}`,
// 				`URL: ${path}`,
// 				`Status: ${res.status} ${res.statusText}`,
// 				`Body preview: ${body.slice(0, 300)}`
// 			].join('\n')
// 		);
// 	}

// 	return (await res.json()) as T;
// }

// export const load: LayoutLoad = async () => {
// 	const [occasions] = await Promise.all([
// 		fetchJson<OccasionsResponse>(fetch, '/data/occasions.json')
// 	]);

// 	return {
// 		occasions: occasionsData.occasions,
// 		steps: howItWorksData.steps
// 	};
// };
