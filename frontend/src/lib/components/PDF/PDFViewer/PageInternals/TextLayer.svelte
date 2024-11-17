<script lang="ts">
	import { BROWSER } from 'esm-env';
	import type { PageViewport, PDFPageProxy, TextLayer } from 'pdfjs-dist/legacy/build/pdf.mjs';

	export let page: PDFPageProxy;
	export let viewport: PageViewport;

	let render_task: TextLayer;
	let container: HTMLDivElement;

	async function render_text_layer() {
		container.textContent = '';
		const { TextLayer } = await import('pdfjs-dist/legacy/build/pdf.mjs');

		render_task?.cancel();
		render_task = new TextLayer({
			container,
			textContentSource: page.streamTextContent(),
			viewport
		});
		await render_task.render();
	}

	$: if (BROWSER && container && viewport) render_text_layer();
</script>

<div bind:this={container} />

<style>
	div {
		position: absolute;
		inset: 0;
		overflow: clip;
		opacity: 0.2;
		line-height: 1;
	}

	div > :global(span) {
		color: transparent;
		position: absolute;
		white-space: pre;
		cursor: text;
		transform-origin: 0% 0%;
	}
</style>
