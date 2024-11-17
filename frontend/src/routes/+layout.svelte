<script lang="ts">
	import { browser } from '$app/environment';
	import * as Resizable from "$lib/components/ui/resizable/index";
	import Header from '$lib/components/Header.svelte';
	import DragDrop from '$lib/components/DragDrop.svelte';


	import { resolvedTheme } from '$lib/theme';

	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../app.postcss';
	import type { LayoutServerData } from './$types';
	import { onDestroy } from 'svelte';

	export let data: LayoutServerData;
	const { chats } = data;

	onDestroy(
		resolvedTheme.subscribe((value) => {
			if (!browser) return;
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(value);
		})
	);
</script>

<svelte:head>
	<title>SvelteKit AI Chatbot</title>
</svelte:head>

<main>
	<Resizable.PaneGroup
  direction="vertical"
  class="min-h-screen max-w-full"
>
  <Resizable.Pane defaultSize={7} minSize={5}>
    <div class="flex h-full">
      <Header {chats} />
    </div>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={93} minSize={90}>
		<Resizable.PaneGroup
			direction="horizontal"
			class="min-h-screen max-w-full"
		>
			<Resizable.Pane defaultSize={50} minSize={30}>
				<div class="flex flex-col h-full w-full">
					<slot />
				</div>
			</Resizable.Pane>
			<Resizable.Handle withHandle />
			<Resizable.Pane defaultSize={50} minSize={30}>
				<div class="flex h-full w-full">
					<DragDrop />
				</div>
			</Resizable.Pane>
		</Resizable.PaneGroup>
  </Resizable.Pane>
</Resizable.PaneGroup>
</main>
