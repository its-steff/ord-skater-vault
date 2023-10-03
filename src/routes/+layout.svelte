<script>
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	main {
		margin: $space-60 $space-20;
		@include mq-min-md {
			margin: $space-60 $space-36;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
