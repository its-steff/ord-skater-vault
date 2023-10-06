<script>
	import '../app.scss';
	import { Modals, closeModal } from 'svelte-modals';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Modals>
	<div slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>
<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
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
