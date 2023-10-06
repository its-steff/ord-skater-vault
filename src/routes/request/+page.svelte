<script>
	import { openModal } from 'svelte-modals';
	import Modal from '$lib/components/Modal.svelte';

	export let form;

	if (form?.incorrect) {
		openModal(Modal, {
			title: 'Invalid Number',
			message:
				'This number is taken! Which you would have known if you checked first, as per the instructions 😜 Try again and 10 burpees for you next training!',
			buttonText: 'Sorry, I understand!'
		});
	}

	if (form?.success) {
		openModal(Modal, {
			title: 'Submission successful',
			message:
				'Your email has been sent! You will receive a personal message regarding your request once it has been reviwed',
			buttonText: 'Close'
		});
	}
</script>

<section>
	<h1>Number Request</h1>
	<p>
		If you have checked the availability of the number you want, go ahead and send a number request!
		Our magic elves will add it to the master list.
		<br /><br />
		⚠️ Please be mindful and do not spam this email
	</p>

	<form action="?/requestnumber" method="POST">
		<label for="user_name">Your name</label>
		<input type="text" name="user_name" />
		<label for="derby_name">Derby name</label>
		<input type="text" name="user_derby_name" />
		<label for="message">Number Requested</label>
		<input type="number" name="requested_number" />
		<button type="submit">Send</button>
	</form>
	<p />
</section>

<style lang="scss">
	section {
		width: 100%;

		h1 {
			@include font-h1;
			margin-bottom: $space-12;
		}

		form {
			margin-top: $space-12;
			//padding: $space-18;
			font-size: $font-size-2xl;
			padding: $space-18;
			border-radius: 10px;
			background-color: white;
			color: $ord-orange;
			display: flex;
			flex-direction: column;
			gap: $space-12;

			input {
				padding: $space-8;
				margin-top: $space-4;
				font-size: $font-size-2xl;
			}

			input::-webkit-outer-spin-button,
			input::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}

			button {
				background-color: $ord-orange;
				color: white;
				text-align: center;
				padding: $space-16;

				&:hover {
					opacity: 0.8;
				}
			}

			@include mq-min-lg {
				margin-top: $space-20;
				font-size: $font-size-3xl;
				padding: $space-36 $space-40;
			}
		}

		@include mq-min-lg {
			width: 70%;
		}
	}
</style>
