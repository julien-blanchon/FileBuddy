<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	import { Document, Page, preferThisHeight, type MultipleOf90 } from '$lib/components/PDF';
	import ButtonOverlay from '$lib/components/PDF/Overlay/ButtonOverlay.svelte';

	let scale: number = 1;
	let num: number = 1;
	let filename: string = 'tackling-ts-preview-book.pdf';
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

	import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
	import type { PageViewport } from 'pdfjs-dist/types/src/display/display_utils.js';

	let page: PDFPageProxy;
	let viewport: PageViewport;
	let overlay: HTMLElement;
</script>

<section class="settings">
	Page <input type="number" bind:value={num} step="1" min="1" max={max_pages} /> of {max_pages}

	<select bind:value={filename}>
		<option>tackling-ts-preview-book.pdf</option>
		<option>impatient-js-preview-book.pdf</option>
		<option value="a.pdf">non existent file</option>
	</select>

	<input type="checkbox" bind:checked={renderTextLayer} /> Render text layer

	<fieldset>
		<legend>Dimensions</legend>
		<select bind:value={sizing}>
			<option value={1}>Scale: {scale}x</option>
			<option value={2}>
				Fixed height: {target_height}px
			</option>
		</select>

		{#if sizing === 2}
			<input type="range" bind:value={target_height} min="200" max="700" step="50" />
		{:else}
			<input type="range" bind:value={scale} min="0.5" max="4" step="0.25" />
		{/if}

		<label>
			Rotation
			<select bind:value={rotation}>
				<option>0</option>
				<option>90</option>
				<option>180</option>
				<option>270</option>
			</select>
		</label>
	</fieldset>
</section>

{#if browser}
	<div class="relative w-full h-full flex items-center justify-center">
		<!-- Overlay -->
		<!-- {#each example.filter((item) => item.page === num) as item}
			<ButtonOverlay
				bbox={{
					height: 0,
					left: 0,
					top: 10,
					width: 30
				}}
				id={item.id.toString()}
				color="red"
				content="Document"
			/>
		{/each} -->

		<!-- <ButtonOverlay
			bbox={{ top: 0, left: 10, width: 500, height: 200 }}
			id="overlay-1"
			color="red"
			content="Document"
		/>
		<div
			class="overlay absolute z-10 overflow-hidden"
			style="display: none; top: 500px; left: 10px;"
		>
			<span class="text-red-500 text-4xl font-bold uppercase whitespace-nowrap">Document</span>
		</div>

		<div class="overlay absolute z-10 overflow-hidden" style="display: none; top: 60px; left: 0px;">
			<span class="text-red-500 text-4xl font-bold uppercase whitespace-nowrap"
				>Dosdoijojdscument</span
			>
		</div> -->

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
