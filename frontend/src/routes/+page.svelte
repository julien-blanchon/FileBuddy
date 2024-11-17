<script lang="ts">
	import DragDrop from '$lib/components/DragDrop.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import Chat from '$lib/components/Chat.svelte';
	import { cn, nanoid } from '$lib/utils';
	import Pdf from '$lib/components/PDF.svelte';

	const id = nanoid();

	let pdfFileUrl: string | undefined = undefined;

	import type { UseChatHelpers } from 'ai/svelte';
	let isLoading: UseChatHelpers['isLoading'];
	let stop: UseChatHelpers['stop'];
	let append: UseChatHelpers['append'];
	let reload: UseChatHelpers['reload'];
	let messages: UseChatHelpers['messages'];
	let input: UseChatHelpers['input'];

	let context: { id: string; content: string } | undefined = undefined;

	let highlighted_id: string[] | undefined = undefined;
	let scale: number = 0.8;
</script>

<Resizable.PaneGroup direction="horizontal" class="mt-10">
	<Resizable.Pane defaultSize={50} minSize={30} class="mt-10">
		<div class="overflow-y-scroll h-full">
			<Chat
				{id}
				bind:input
				bind:isLoading
				bind:stop
				bind:append
				bind:reload
				bind:messages
				bind:context
				bind:highlighted_id
			/>
		</div>
	</Resizable.Pane>
	<Resizable.Handle withHandle class="mt-10 mb-16 mx-4 w-2 rounded-xl" />
	<Resizable.Pane defaultSize={50} minSize={30} class="mt-10">
		<div class="flex justify-center items-center space-x-4">
			<!-- Scale slider -->
			<input type="range" min="0.1" max="2" step="0.1" bind:value={scale} class="w-1/3" />
		</div>
		<div class="h-full overflow-y-scroll m-5">
			{#if pdfFileUrl}
				<Pdf
					{scale}
					{pdfFileUrl}
					bind:highlighted_id
					onClickOverlayButton={async ({ id, bbox, page, content }) => {
						// input.set(content);
						input.set('You are a visa assistant, you must answer in english' + content);
						context = { id: id.toString(), content: content };

						// Wait for 0.5s than submit and than reset context and input
						await new Promise((resolve) => setTimeout(resolve, 500))
							.then(() => {
								document
									.querySelector('.submit_chat')
									?.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
							})
							.then(() => {
								context = undefined;
								input.set('');
							});
					}}
				/>
			{:else}
				<DragDrop bind:pdfFileUrl />
			{/if}
		</div>
	</Resizable.Pane>
</Resizable.PaneGroup>
