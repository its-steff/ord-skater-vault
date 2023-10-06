<script lang="ts">
	import { closeModal } from 'svelte-modals';

	// provided by Modals
	export let isOpen: boolean;

	export let title: string;
	export let message: string;
	export let buttonText: string;
</script>

{#if isOpen}
	<div role="dialog" class="modal">
		<div class="contents">
			<h2>{title}</h2>
			<p>{message}</p>
			<div class="actions">
				<button on:click={closeModal}>{buttonText}</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		//min-width: 240px;
		width: 90vw;
		border-radius: 6px;
		padding: 30px;
		background: white;
		color: black;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;

		@include mq-min-lg {
			width: 50vw;
		}
	}

	h2 {
		text-align: center;
		font-size: 24px;
	}

	p {
		text-align: center;
		margin-top: 16px;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		justify-content: flex-end;
		font-size: $font-size-2xl;
		border: 1px solid black;
		width: fit-content;
		padding: $space-12;
		border-radius: 10px;
		align-self: flex-end;

		&:hover {
			background-color: rgba(128, 128, 128, 0.09);
		}
	}
</style>
