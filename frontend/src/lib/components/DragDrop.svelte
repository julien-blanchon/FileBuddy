<script lang="ts">
	import Dropzone from 'svelte-file-dropzone';
	import Icon from '@iconify/svelte';
	import { getLocalStore, updateLocalStore, removeLocalStore } from '$lib/utils';
	import toast from 'svelte-french-toast';
	import { onMount } from 'svelte';

	export let pdfFileUrl: string | undefined = undefined;

	onMount(() => {
		const localStore = getLocalStore('pdf-file', null);
		console.log('localStore', localStore);

		if (localStore) {
			pdfFileUrl = localStore;
		}
	});

	async function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;

		if (fileRejections.length) {
			console.log('fileRejections', fileRejections);
			toast.error('File type not supported');
			return;
		}

		const file = acceptedFiles[0];

		const formData = new FormData();
		formData.append('file', file);
		console.log('File selected:', formData);

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || 'Failed to upload the file.');
			}

			const { url: uploaded } = await response.json();
			updateLocalStore('pdf-file', uploaded);
			pdfFileUrl = uploaded;
			toast.success('File uploaded successfully');
			console.log('Uploaded file URL:', uploaded);
		} catch (error) {
			toast.error('Failed to upload the file, please try again');
		}
	}

	function handleRemoveFile() {
		pdfFileUrl = undefined;
		removeLocalStore('pdf-file');
	}
</script>

{#if !pdfFileUrl}
	<Dropzone
		on:drop={handleFilesSelect}
		accept={['.pdf']}
		containerClasses="bg-[hsl(var(--background))] flex flex-1 h-[86%] mt-5 flex-col items-center text-gray-400 outline-none transition-border duration-200 ease-in-out border border-primary border-dashed rounded-lg"
		disableDefaultStyles
	>
		<div class="flex flex-col items-center justify-center h-full">
			<button>Click to choose pdf to upload</button>
			<p>or</p>
			<p>Drag and drop them here</p>
		</div>
	</Dropzone>
{/if}

<!-- Display Pdf file  -->
{#if pdfFileUrl}
	<div class="flex flex-col w-full items-center justify-center h-[86%]">
		<iframe
			title="pdf-viewer"
			src={pdfFileUrl}
			class="flex w-full flex-1 mt-5 flex-col items-center text-gray-400 outline-none transition-border duration-200 ease-in-out"
		></iframe>
		<button on:click={handleRemoveFile}>
			<Icon icon="iconamoon:trash-duotone" class="w-8 h-8 mt-5" />
		</button>
	</div>
{/if}
