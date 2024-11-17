<script lang="ts">
	import ButtonScrollToBottom from '$lib/components/ButtonScrollToBottom.svelte';
	import { Button } from '$lib/components/ui/button';
	import { IconRefresh, IconStop } from '$lib/components/ui/icons';
	import type { UseChatHelpers } from 'ai/svelte';
	import FooterText from '$lib/components/FooterText.svelte';
	import PromptForm from '$lib/components/PromptForm.svelte';

	export let id: string | undefined = undefined;
	export let isLoading: UseChatHelpers['isLoading'];
	export let stop: UseChatHelpers['stop'];
	export let append: UseChatHelpers['append'];
	export let reload: UseChatHelpers['reload'];
	export let messages: UseChatHelpers['messages'];
	export let input: UseChatHelpers['input'];
	export let highlighted_id: string[] | undefined = undefined;
	export let context: { id: string; content: string } | undefined = undefined;
</script>

<div class="mx-auto sm:max-w-2xl sm:px-4 overflow-scroll">
	<!-- <div class="flex h-10 items-center justify-center pb-4 sm:pb-6">
		{#if $isLoading}
			<Button variant="outline" on:click={() => stop()} class="bg-background">
				<IconStop class="mr-2" />
				Stop generating
			</Button>
		{:else if $messages?.length > 0}
			<Button variant="outline" on:click={() => reload()} class="bg-background mb-2">
				<IconRefresh class="mr-2 " />
				Regenerate response
			</Button>
		{/if}
	</div> -->
	<div
		class="space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4"
	>
		<PromptForm
			on:submit={async (event) => {
				// Call /api/chat/tool to get the highlighted_id
				// highlighted_id = ...
				console.log('uhiuhshsdhsdi');
				const res = await fetch('/api/chat/tool	', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ $messages })
				});

				if (res.ok) {
					const data = await res.json();
					highlighted_id = data.ids;
				} else {
					console.error('Failed to fetch');
				}

				await append({
					id,
					content: event.detail,
					role: 'user'
				});
			}}
			{input}
			{isLoading}
			{context}
		/>
		<FooterText class="hidden sm:block" />
	</div>
</div>
