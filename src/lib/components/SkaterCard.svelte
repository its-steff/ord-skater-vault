<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let skaterName: string;
	export let skaterNumber: string;
	export let index: number;
	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div
		in:fly={{
			y: 100,
			delay: 300 * index,
			easing: backOut
		}}
	>
		<span>
			{skaterNumber}
		</span>
		<span>
			{skaterName}
		</span>
	</div>
{/if}

<style lang="scss">
	div {
		background-color: white;
		color: black;
		font-size: 2.4rem;
		padding: 20px;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		margin-bottom: $space-12;

		@include mq-min-lg {
			margin-bottom: $space-20;
		}
	}
</style>
