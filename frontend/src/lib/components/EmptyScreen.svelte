<script lang="ts">
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import { Button } from '$lib/components/ui/button';
	import { IconArrowRight } from '$lib/components/ui/icons';
	import type { UseChatHelpers } from 'ai/svelte';

	export let input: UseChatHelpers['input'];

	const exampleMessages = [
		{
			heading: 'Clarify legal terms',
			message: `What does "force majeure" mean in a contract?`
		},
		{
			heading: 'Help with a legal form',
			message: `How do I fill out the "Power of Attorney" form?`
		},
		{
			heading: 'Draft a legal letter',
			message: `Draft a formal letter to dispute a parking ticket.`
		}
	];
</script>

<div class="mx-auto max-w-2xl px-4">
	<div class="rounded-lg border bg-background p-8">
		<h1 class="mb-2 text-lg font-semibold">Welcome to Legal Buddy!</h1>
		<p class="mb-2 leading-normal text-muted-foreground">
			Your AI-powered assistant for navigating complex legal forms and documents. Built with
			<ExternalLink href="https://kit.svelte.dev">SvelteKit</ExternalLink> and
			<ExternalLink href="https://vercel.com/storage/kv">Vercel KV</ExternalLink>.
		</p>
		<p class="leading-normal text-muted-foreground">
			You can ask for assistance or try one of these examples:
		</p>
		<div class="mt-4 flex flex-col items-start space-y-2">
			{#each exampleMessages as message}
				<Button
					variant="link"
					class="h-auto p-0 text-base"
					on:click={() => ($input = message.message)}
				>
					<IconArrowRight class="mr-2 text-muted-foreground" />
					{message.heading}
				</Button>
			{/each}
		</div>
	</div>
</div>
