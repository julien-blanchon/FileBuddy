<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	import { Document, Page, preferThisHeight, type MultipleOf90 } from '$lib/components/PDF';
	import ButtonOverlay from '$lib/components/PDF/Overlay/ButtonOverlay.svelte';

	export let pdfFileUrl: string;
	export let scale: number = 0.8;
	let num: number = 1;
	let max_pages: number = 1;
	let renderTextLayer: boolean = true;
	let target_height: number = 500;
	let rotation: MultipleOf90 = 0;

	let sizing: number = 1;

	function onLoadSuccess(event: CustomEvent) {
		max_pages = event.detail.numPages;
		num = Math.min(num, max_pages);
		const canvas = document.querySelector('canvas');
		if (!canvas) {
			return;
		}
	}

	$: if (viewport) {
		overlay.style.width = `${viewport.width}px`;
		overlay.style.height = `${viewport.height}px`;
	}

	import { example } from '$lib/components/PDF/test';

	import type { PDFPageProxy } from 'pdfjs-dist';
	import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils.js';
	import { Button } from './ui/button';
	import { idToColor } from '$lib/utils';

	let page: PDFPageProxy;
	let viewport: PageViewport;
	let overlay: HTMLElement;

	export let highlighted_id: string[] | undefined;

	export let onClickOverlayButton: ({ id, bbox, page, content }: (typeof example)[0]) => void;
</script>

{#if browser}
	<div class="flex flex-col h-full w-full items-center justify-center">
		<div class="w-full h-full flex items-center justify-center max-h-[50svh] mb-10">
			<!-- PDF Content -->
			<Document
				file={pdfFileUrl}
				loadOptions={{ docBaseUrl: base }}
				on:loadsuccess={onLoadSuccess}
				on:loaderror={(e) => alert(e.detail + '')}
			>
				<div class="relative inline-block">
					<Page
						{scale}
						{num}
						{renderTextLayer}
						{rotation}
						getViewport={sizing === 1 ? undefined : preferThisHeight(target_height)}
						bind:page
						bind:viewport
					/>
					<!-- Overlay -->
					<div class="absolute z-10 top-0 left-0" bind:this={overlay}>
						{#each example.filter((item) => item.page === num) as item}
							<ButtonOverlay
								bbox={item.bbox}
								{scale}
								isHighlighted={highlighted_id?.includes(item.id.toString())}
								id={item.id.toString()}
								color={idToColor(item.content.toString())}
								content="Document"
								on:click={() => onClickOverlayButton(item)}
							/>
						{/each}
					</div>
				</div></Document
			>
		</div>

		<div class="text-center p-2 w-full h-10 flex justify-between">
			<!-- Previous Button -->
			<Button
				disabled={num <= 1}
				on:click={() => (num -= 1)}
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>Previous</Button
			>

			<!-- Page Counter -->
			<div class="flex items-end align-bottom">
				{num} / {max_pages}
			</div>

			<!-- Next Button -->
			<Button
				disabled={num >= max_pages}
				on:click={() => (num += 1)}
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</Button
			>
		</div>
	</div>
{/if}
