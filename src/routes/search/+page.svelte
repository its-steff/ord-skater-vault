<script lang="ts">
	import SkaterCard from '$lib/components/SkaterCard.svelte';
	import Card from '$lib/components/Card.svelte';
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
	<h1>Number Search</h1>
	<form on:submit|preventDefault={(event) => handleSubmit(event.currentTarget)}>
		<label for="number-check">Enter a number</label>
		<div class="input-container">
			<input id="number-check" type="number" placeholder="4" />
			<button type="submit">Search</button>
		</div>
	</form>
	<div class="message-container">
		<p>{message}</p>
		{#if similarMatchMessage && !match}
			<p>{similarMatchMessage}</p>
		{/if}
	</div>
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
		width: 100%;
		h1 {
			@include font-h1;
		}

		form {
			margin-top: 10px;
			padding: $space-18;
			border-radius: 10px;
			background-color: white;
			color: $ord-orange;
		}

		form {
			label,
			button,
			input {
				font-size: $font-size-2xl;

				@include mq-min-lg {
					font-size: $font-size-3xl;
				}
			}

			.input-container {
				display: flex;
				align-items: baseline;
				justify-content: space-between;
			}

			input {
				padding: 8px;
				margin-top: $space-10;
				width: 65%;
				border-radius: 10px;
			}

			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			button {
				padding: 9px;
				border-radius: 10px;
				color: white;
				line-height: 3rem;
				border: 1px solid white;
				background-color: $ord-orange;

				@include mq-min-md {
					padding: $space-12 $space-28;
				}
			}

			@include mq-min-lg {
				margin-top: $space-20;
				padding: $space-36 $space-40;
			}
		}

		.message-container {
			margin-top: 10px;
			padding: $space-8;
			line-height: 2.8rem;
			p {
				font-size: $font-size-2xl;
			}

			@include mq-min-lg {
				margin-top: $space-20;
				p {
					font-size: $font-size-3xl;
					margin-bottom: $space-20;
				}
			}
		}

		@include mq-min-lg {
			width: 70%;
		}
	}
</style>
