import { writable } from 'svelte/store';

export type Skater = {
	skaterName: string;
	skaterNumber: string;
};

export type SkaterList = Skater[];

export const storeSkaterList = writable<SkaterList | null>(null);
