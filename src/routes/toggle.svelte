<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'

	console.log('Theme', $theme);
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	<div in:fly={{ y: 10 }}>
		{#if $theme.includes('dark')}
			<Moon />
		{:else}
			<Sun />
		{/if}
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
