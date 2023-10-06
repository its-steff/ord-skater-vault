<footer>
	<div>
		<span>Made with ❤️ by Just Jeff</span>
		<a href="https://www.facebook.com/oslorollerderby" target="_blank">Oslo Roller Derby</a>
	</div>
</footer>

<style lang="scss">
	footer {
		width: 100%;
		font-size: $font-size-2xl;
		padding: $space-16 $space-20;
		border-top: 1px solid white;
		margin-top: auto;
		div {
			display: flex;
			flex-direction: column;
			gap: $space-10;
		}

		@include mq-min-lg {
			padding: $space-20 $space-30;

			div {
				flex-direction: row;
				justify-content: space-between;
				gap: 0;
			}
		}
	}
</style>
