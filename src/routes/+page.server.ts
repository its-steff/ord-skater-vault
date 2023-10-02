import { Client } from '@notionhq/client';
import { NOTION_KEY, NOTION_DATABASE_ID } from '$env/static/private';
import { get } from 'svelte/store';
import { storeSkaterList } from '$lib/store';
import type { SkaterList } from '$lib/store';

function sortByNumericalOrder(arr: SkaterList) {
	arr.sort((a, b) => {
		const numA = String(a.skaterNumber);
		const numB = String(b.skaterNumber);

		return numA.localeCompare(numB);
	});

	return arr;
}

export const load = async () => {
	const storedSkaters = get(storeSkaterList);

	if (storedSkaters !== null || undefined) {
		return;
	} else {
		const notion = new Client({ auth: NOTION_KEY });
 
		const response = await notion.databases.query({
			database_id: NOTION_DATABASE_ID,
			filter: {
				property: 'skater_name',
				rich_text: {
					is_not_empty: true
				}
			}
		});

		const results = response.results;

		const data: SkaterList = results.map((item) => ({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			skaterName: item.properties.skater_name.rich_text[0].plain_text,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			skaterNumber: item.properties.skater_number.rich_text[0].plain_text
		}));

		const sortedData = sortByNumericalOrder(data);

		storeSkaterList.set(sortedData);
	}
};
