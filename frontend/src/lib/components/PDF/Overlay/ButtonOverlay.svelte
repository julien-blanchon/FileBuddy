<script lang="ts">
	import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Button as ButtonPrimitive } from 'bits-ui';
	import type { BoundingBox } from './types';
	import { cn } from '$lib/utils';

	export let bbox: BoundingBox;
	export let scale: number;
	export let id: string;
	export let color: string;
	export let content: string;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<ButtonPrimitive.Root
	class={cn(
		'rounded-sm absolute border border-blue-500 z-10 overflow-hidden',
		'opacity-20 hover:opacity-80 p-5',
		className
	)}
	{...$$restProps}
	on:click
	on:keydown
	style="top: {bbox.top * scale - 8}px; left: {bbox.left * scale}px; width: {bbox.width *
		scale}px; height: {bbox.height * scale}px; background-color: {color};"
	{id}
></ButtonPrimitive.Root>
