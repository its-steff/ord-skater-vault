import { get } from 'svelte/store';
import { storeSkaterList } from '$lib/store';

export const load = async () => {
	const skaterList = get(storeSkaterList);

	if (skaterList) {
		return {
			data: skaterList
		};
	}
};
