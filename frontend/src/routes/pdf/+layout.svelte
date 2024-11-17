<script lang="ts">
	import { set_pdfjs_context } from '$lib/components/PDF/utils/vite';

	set_pdfjs_context();
</script>

<slot />
