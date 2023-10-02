<script lang="ts">
	import SkaterCard from '$lib/components/SkaterCard.svelte';
	import type { Skater } from '$lib/store.js';
	export let data;
	const storedSkaters = data.data;

	let message: string;
	let similarMatchMessage: string;
	let match: Skater | undefined;
	let similarMatches: Skater[] | undefined;

	message = 'Need a skater number? Look it up to see if it is taken or available';
	$: match;
	$: similarMatches;
	$: message;

	// @ts-ignore
	const handleSubmit = (event) => {
		const inputNumber = event[0].value;

		if (storedSkaters) {
			match = storedSkaters.find((skater) => skater.skaterNumber == inputNumber);

			similarMatches = storedSkaters.filter(
				(skater) => skater.skaterNumber.toString().at(0) == inputNumber.at(0)
			);

			if (match) {
				message = 'That number is taken!';
			} else if (!match && similarMatches && similarMatches.length > 0) {
				similarMatchMessage = 'Here are skaters with similar numbers';
				message = 'That number is available!';
			} else if (!match) {
				message = 'That number is available!';
				similarMatchMessage = '';
			}
		} else {
			message = "we can't find any skaters in the database";
		}
	};
</script>

<section>
	<div>
		<h1>Number Search</h1>
		<p>
			{message}
			{#if similarMatchMessage}
				<p>{similarMatchMessage}</p>
			{/if}
		</p>
	</div>
	<form on:submit|preventDefault={(event) => handleSubmit(event.currentTarget)}>
		<label for="number-check">Enter a number</label>
		<div>
			<input id="number-check" type="number" placeholder="4" />
			<button type="submit">Search</button>
		</div>
	</form>
	{#if match}
		<SkaterCard index={0} skaterNumber={match.skaterNumber} skaterName={match.skaterName} />
	{:else if similarMatches && similarMatches.length > 0 && match === undefined}
		{#each similarMatches as skater, i}
			<SkaterCard index={i} skaterNumber={skater.skaterNumber} skaterName={skater.skaterName} />
		{/each}
	{/if}
</section>

<style lang="scss">
	section {
		@include mq-min-lg {
			width: 70%;
		}
	}

	div {
		margin-bottom: $space-24;

		h1 {
			font-size: $font-size-4xl;
			margin-bottom: $space-10;
		}
	}

	form {
		label,
		button,
		input {
			font-size: $font-size-2xl;
		}

		input {
			padding: 8px;
			margin-top: 8px;
		}

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		button {
			background-color: white;
			padding: 12px 10px;
			border-radius: 10px;
			margin-left: 10px;
			color: black;
		}
	}
</style>
