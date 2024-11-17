<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { IconArrowElbow, IconPlus } from '$lib/components/ui/icons';
	import { Tooltip, TooltipContent, TooltipTrigger } from '$lib/components/ui/tooltip';
	import type { UseChatHelpers } from 'ai/svelte';
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';
	// @ts-ignore
	import autosize from 'svelte-autosize';
	import { idToColor } from '$lib/utils';

	const dispatch = createEventDispatcher<{ submit: string }>();

	export let isLoading: UseChatHelpers['isLoading'];
	export let input: UseChatHelpers['input'];
	export let context: { id: string; content: string } | undefined = undefined;

	async function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			await dispatch('submit', $input);
			$input = '';
		}
	}
</script>

<form
	class="submit_chat"
	on:submit={async (event) => {
		event.preventDefault();
		if ($input === '') {
			return;
		}
		await dispatch('submit', $input);
		$input = '';
	}}
>
	<div
		class="relative flex w-full grow flex-col overflow-hidden bg-background pe-8 sm:rounded-md sm:border sm:pe-12"
	>
		<textarea
			use:autosize
			autofocus={true}
			tabindex={0}
			on:keydown={handleKeydown}
			rows={1}
			bind:value={$input}
			placeholder="Send a message."
			spellcheck={false}
			class="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
		/>
		<div class="absolute right-0 top-4 sm:right-4">
			<Tooltip>
				<TooltipTrigger>
					<Button type="submit" size="icon" disabled={$isLoading || $input === ''}>
						<IconArrowElbow />
						<span class="sr-only">Send message</span>
					</Button>
				</TooltipTrigger>
				<TooltipContent>Send message</TooltipContent>
			</Tooltip>
		</div>
	</div>
</form>
