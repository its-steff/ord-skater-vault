<script>
	import MegaMenu from './MegaMenu.svelte';

	$: showMenu = false;

	const handleClick = () => {
		showMenu = !showMenu;
	};
</script>

{#if showMenu}
	<MegaMenu {showMenu} />
{/if}
<header>
	<span><a href="/">🐯 ORD Skater Vault</a></span>
	<nav>
		<ul>
			<li>
				<a href="/search">Search</a>
			</li>
			<li><a href="/list-all">List All</a></li>
			<li><a href="/request">Request</a></li>
		</ul>
		<button class="burgerIcon-container" on:click={handleClick}>
			<span />
			<span />
			<span />
		</button>
	</nav>
</header>

<style lang="scss">
	header {
		background-color: rgb(239, 122, 51, 0.3);
		color: white;
		letter-spacing: 0.5px;
		display: flex;
		font-size: $font-size-2xl;
		justify-content: space-between;
		align-items: center;
		padding: $space-28 $space-30;
		span {
			font-weight: 600;

			@include mq-min-md {
				font-size: $font-size-3xl;
			}
		}
		span:hover {
			opacity: 0.8;
		}

		nav {
			ul {
				display: none;
				@include mq-min-md {
					display: flex;
					gap: 20px;

					li {
						cursor: pointer;
					}
					li:hover {
						opacity: 0.8;
					}
				}
			}
			.burgerIcon-container {
				//border: 1px solid black;
				//all: unset;
				width: 40px;
				height: 30px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				span {
					width: 100%;
					height: 5px;
					background-color: white;
					border: 1px solid white;
					border-radius: 10px;
				}

				@include mq-min-md {
					display: none;
				}
			}

			.burgerIcon-container:hover {
				cursor: pointer;
				opacity: 0.8;
			}
		}
	}
</style>
