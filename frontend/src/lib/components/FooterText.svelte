<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p
	class={cn('px-2 text-center text-xs leading-normal text-muted-foreground', className)}
	{...$$restProps}
>
	Legal Buddy
</p>
