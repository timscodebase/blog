<script lang="ts">
	import { fly } from 'svelte/transition'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	<div in:fly={{ y: 10 }}>
		<span>{$theme}</span>
	</div>
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
