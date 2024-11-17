<script lang="ts">
	import ChatList from '$lib/components/ChatList.svelte';
	import ChatPanel from '$lib/components/ChatPanel.svelte';
	import EmptyScreen from '$lib/components/EmptyScreen.svelte';
	import { cn } from '$lib/utils';
	import { useChat, type Message } from 'ai/svelte';

	// TODO: Save in local storage
	let previewToken: string | null = null;

	export let id: string | undefined = undefined;
	export let initialMessages: Message[] | undefined = undefined;
	let className: string | undefined | null = undefined;
	export { className as class };
	export let highlighted_id: string[] | undefined = undefined;
	export const { messages, append, reload, stop, isLoading, input } = useChat({
		initialMessages,
		id,
		body: {
			id,
			previewToken
		}
	});

	export let context: { id: string; content: string } | undefined = undefined;
</script>

<div class="flex flex-col h-full overflow-scroll">
	<div class={cn(' pt-4 md:pt-10 mx-20  h-full flex flex-col gap-5 ', className)}>
		{#if $messages.length}
			<ChatList {messages} />
		{:else}
			<EmptyScreen {input} />
		{/if}
	</div>

	<div class="sticky bottom-0 max-h-40 z-10 h-full overflow-scroll">
		<ChatPanel
			bind:highlighted_id
			{id}
			{isLoading}
			{stop}
			{append}
			{reload}
			{messages}
			{input}
			{context}
		/>
	</div>
</div>
