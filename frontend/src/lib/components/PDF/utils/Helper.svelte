<script context="module" lang="ts">
	/**
	 * Print entire PDF pages.
	 * @param url - The URL of the PDF to print.
	 */
	export const onPrint = (url: string): void => {
		let iframe: HTMLIFrameElement | null = null;
		if (!iframe) {
			iframe = document.createElement('iframe');
			document.body.appendChild(iframe);

			iframe.style.display = 'none';
			iframe.onload = function () {
				setTimeout(() => {
					iframe?.focus();
					iframe?.contentWindow?.print();
				}, 1);
			};
		}

		iframe.src = url;
	};

	/**
	 * Calculate the reading time of an entire PDF document.
	 * @param paraBody - The PDF text to calculate reading time.
	 * @returns The estimated reading time in minutes.
	 */
	export const calcRT = (paraBody: string): number | undefined => {
		const wordsPerMinute = 200; // Average case.
		const textLength = paraBody.split(' ').length; // Split by words.

		if (textLength > 0) {
			return Math.ceil(textLength / wordsPerMinute);
		}
	};

	/**
	 * Retrieves the text of a specific page within a PDF document using pdf.js.
	 * @param pageNum - The number of the page to retrieve text from.
	 * @param PDFDocumentInstance - The PDF document obtained via pdf.js.
	 * @returns A Promise that resolves to the text content of the page.
	 */
	export const getPageText = (pageNum: number, PDFDocumentInstance: any): Promise<string> => {
		return new Promise((resolve, reject) => {
			PDFDocumentInstance.getPage(pageNum)
				.then((pdfPage: any) => {
					pdfPage
						.getTextContent()
						.then((textContent: any) => {
							const textItems = textContent.items;
							let finalString = '';

							// Concatenate the string of the item to the final string.
							for (let i = 0; i < textItems.length; i++) {
								const item = textItems[i];
								finalString += item.str + ' ';
							}

							resolve(finalString);
						})
						.catch(reject);
				})
				.catch(reject);
		});
	};

	/**
	 * Saves a PDF Blob as a file with the given name.
	 * @param params - Object containing fileUrl, data, and name.
	 */
	export const savePDF = async ({
		fileUrl,
		data,
		name = 'download.pdf'
	}: {
		fileUrl?: string;
		data?: string;
		name?: string;
	}): Promise<void> => {
		const link = document.createElement('a');
		link.download = name;
		link.rel = 'noopener';

		if (!fileUrl) {
			fileUrl = `data:application/pdf;base64,${btoa(data || '')}`;
		}

		const blobs = await fetch(fileUrl).then((r) => r.blob());

		if (!blobs || !(blobs instanceof Blob)) {
			console.error('Invalid blob object passed to URL.createObjectURL()');
			return;
		}

		if (typeof URL.createObjectURL === 'undefined') {
			console.error('Your browser does not support URL.createObjectURL()');
			return;
		}

		const url = URL.createObjectURL(blobs);
		link.href = url;
		link.click();

		// Revoke the object URL to free up memory.
		URL.revokeObjectURL(link.href);
	};
</script>
