<script lang="ts">
	import { browser } from '$app/environment';

	import Header from '$lib/components/Header.svelte';

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

	import { set_pdfjs_context } from '$lib/components/PDF/utils/vite';

	set_pdfjs_context();
</script>

<svelte:head>
	<title>SvelteKit AI Chatbot</title>
</svelte:head>

<Header {chats} />
<main class="w-screen h-screen overflow-hidden">
	<slot />
</main>
