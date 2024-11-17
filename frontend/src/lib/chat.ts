import type { Chat } from '$lib/types';

export async function getChats(userId?: string | null) {
	return [] as Chat[];
}

export async function getChat(id: string, userId: string) {
	return {} as Chat;
}
