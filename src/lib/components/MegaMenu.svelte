<script lang="ts">
	export let showMenu: boolean;
	export let handleClick: () => void;
</script>

{#if showMenu}
	<div class="megamenu" class:animate-in={showMenu}>
		<nav>
			<ul>
				<li>
					<a href="/search" on:click={handleClick}>Search</a>
				</li>
				<li><a href="/list-all" on:click={handleClick}>List All</a></li>
				<li><a href="/request" on:click={handleClick}>Request</a></li>
			</ul>
			<button on:click={handleClick}>
				<span />
				<span />
			</button>
		</nav>
	</div>
{/if}

<style lang="scss">
	.megamenu {
		background-color: black;
		color: $ord-orange;
		height: 100vh;
		width: 100vw;
		font-size: $font-size-2xl;
		position: fixed;
		padding: $space-30;
		right: -100vw;

		&.animate-in {
			animation: slideMenu;
			animation-duration: 0.3s;
			animation-fill-mode: forwards;
			animation-timing-function: linear;
		}

		nav {
			display: flex;
			justify-content: space-between;
			width: 100%;
			ul {
				li {
					font-size: $font-size-3xl;
					padding: $space-12 0;
					letter-spacing: 0.5px;
				}

				li:hover {
					opacity: 0.8;
				}
			}
		}

		button {
			width: 40px;
			height: 40px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			span {
				width: 100%;
				height: 5px;
				border: 1px solid $ord-orange;
				background-color: $ord-orange;

				border-radius: 10px;
			}
			span:first-child {
				transform: rotate(50deg);
			}
			span:last-child {
				transform: translateY(-4.5px) rotate(-50deg);
			}
		}
		button:hover {
			opacity: 0.8;
		}
	}

	@keyframes slideMenu {
		0% {
			right: -100vw;
		}
		100% {
			right: 0;
		}
	}
</style>
