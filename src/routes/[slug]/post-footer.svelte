<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte'
</script>

<footer>
	<a href="/">
		<ArrowLeft />
		<span>Back</span>
	</a>
</footer>

<style>
	a {
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}
</style>
