import { BROWSER } from 'esm-env';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import { onDestroy, setContext } from 'svelte';

export function set_pdfjs_context() {
	if (BROWSER) {
		const worker = new pdfjs.PDFWorker({
			port: new Worker(
				new URL('pdfjs-dist/legacy/build/pdf.worker.mjs', import.meta.url), { type: 'module' }
			) as unknown as null,
		});
		setContext('svelte_pdfjs_worker', worker);
		onDestroy(() => worker.destroy());
	}
}