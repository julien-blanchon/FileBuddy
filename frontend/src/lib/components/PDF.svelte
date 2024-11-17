<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	import { Document, Page, preferThisHeight, type MultipleOf90 } from '$lib/components/PDF';
	import ButtonOverlay from '$lib/components/PDF/Overlay/ButtonOverlay.svelte';

	let scale: number = 0.75;
	let num: number = 1;
	let max_pages: number = 1;
	let renderTextLayer: boolean = false;
	let target_height: number = 500;
	let rotation: MultipleOf90 = 0;

	let sizing: number = 1;

	function onLoadSuccess(event: CustomEvent) {
		max_pages = event.detail.numPages;
		// num = Math.min(num, max_pages);
		num = 2;
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

	let page: PDFPageProxy;
	let viewport: PageViewport;
	let overlay: HTMLElement;
</script>

{#if browser}
	<div class="relative w-full h-full flex items-center justify-center max-h-[80svh]">
		<!-- PDF Content -->
		<Document
			file="/pdf/visa.pdf"
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
							id={item.id.toString()}
							color="red"
							content="Document"
						/>
					{/each}
				</div>
			</div></Document
		>
	</div>
{/if}
