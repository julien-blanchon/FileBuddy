<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<!-- <svg
	fill="currentColor"
	viewBox="0 0 24 24"
	role="img"
	xmlns="http://www.w3.org/2000/svg"
	class={cn('h-4 w-4', className)}
	{...$$restProps}
>
	<title>LegalBuddy icon</title>
</svg> -->
<Icon
	icon="mdi:legal"
	class={cn('h-4 w-4', className)}
	{...$$restProps}
	color="currentColor"
	viewBox="0 0 24 24"
	role="img"
	xmlns="http://www.w3.org/2000/svg"
/>
