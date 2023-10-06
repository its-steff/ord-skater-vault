<script>
	import SkaterCard from '$lib/components/SkaterCard.svelte';
	export let data;
	const skaterData = data.data;
</script>

<section>
	<h1>Current Registered Skaters</h1>
	{#if skaterData}
		{#each skaterData as skater, i}
			<SkaterCard skaterNumber={skater.skaterNumber} skaterName={skater.skaterName} index={i} />
		{/each}
	{:else}
		<p>There was a problem loading skater data</p>
	{/if}
</section>

<style lang="scss">
	h1 {
		font-size: $font-size-4xl;
		margin-bottom: 28px;
		color: white;
	}
	section {
		display: flex;
		flex-direction: column;

		@include mq-min-lg {
			width: 70%;
		}
	}
</style>
