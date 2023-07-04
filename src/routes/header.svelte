<script lang="ts">
	import { title } from './../lib/config.ts'
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>

<nav>
	<!-- Title -->
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<!-- Navigation -->
	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<!-- Theme -->
	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	a.title {
		font-size: var(--size-10);
	}

	.links {
		margin-block: var(--size-7);
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
