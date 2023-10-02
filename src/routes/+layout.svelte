<script>
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style lang="scss">
	main {
		margin: $space-60;
		//height: 100%;

		@include mq-min-lg {
			margin: $space-60 200px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
