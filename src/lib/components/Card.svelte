<script lang="ts">
	export let title: string;
	export let text: string;
	export let secondText: string | null;
</script>

<div>
	<h1>{title}</h1>
	<p>{text}</p>
	<p>
		{#if secondText}{secondText}{/if}
	</p>
</div>

<style lang="scss">
	div {
		border: 1px solid white;
		padding: $space-18;
		background-color: white;
		color: black;
		border-radius: 10px;

		h1 {
			@include font-h1;
			margin-bottom: $space-16;
			color: $ord-orange;
		}

		p {
			line-height: 2.8rem;
		}
	}
</style>
