import { getChats } from '$lib/chat';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	const chats = getChats(null);

	return {
		chats
	};
};
