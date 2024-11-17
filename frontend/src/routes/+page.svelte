<script lang="ts">
	import DragDrop from '$lib/components/DragDrop.svelte';
	import * as Resizable from '$lib/components/ui/resizable/index';
	import Chat from '$lib/components/Chat.svelte';
	import { cn, nanoid } from '$lib/utils';
	import Pdf from '$lib/components/PDF.svelte';

	const id = nanoid();
</script>

<Resizable.PaneGroup direction="horizontal" class="mt-10">
	<Resizable.Pane defaultSize={50} minSize={30} class="mt-10">
		<div class="overflow-y-scroll h-full">
			<Chat {id} />
		</div>
	</Resizable.Pane>
	<Resizable.Handle withHandle class="mt-10" />
	<Resizable.Pane defaultSize={50} minSize={30} class="mt-10">
		<div class="h-full overflow-y-scroll">
			<!-- <DragDrop /> -->
			<Pdf />
		</div>
	</Resizable.Pane>
</Resizable.PaneGroup>
