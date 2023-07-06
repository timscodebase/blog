<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'

	let is_dark = false
	// when the theme changes, update the is_dark variable
	$: {
		is_dark = JSON.stringify($theme).includes('dark')
		console.log('Is dark: ', is_dark)
	}
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	<div in:fly={{ y: 10 }}>
		{#if is_dark}
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
