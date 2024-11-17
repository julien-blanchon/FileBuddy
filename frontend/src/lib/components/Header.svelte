<script lang="ts">
	import { page } from '$app/stores';
	import ClearHistory from '$lib/components/ClearHistory.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import SidebarFooter from '$lib/components/SidebarFooter.svelte';
	import SidebarList from '$lib/components/SidebarList.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { IconGitHub, IconSeparator, IconSvelteChat, IconVercel } from '$lib/components/ui/icons';
	import type { Chat } from '$lib/types';
	import { cn } from '$lib/utils';

	export let chats: Chat[];
</script>

<header
	class="fixed top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl"
>
	<div class="flex items-center">
		<Sidebar>
			<SidebarList {chats} />
			<SidebarFooter>
				<ThemeToggle />
				<ClearHistory />
			</SidebarFooter>
		</Sidebar>
	</div>
</header>
