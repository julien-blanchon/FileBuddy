// import { nanoid } from '$lib/utils';
import type { Config } from '@sveltejs/adapter-vercel';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';
import { chat_prompt_template } from '$lib/prompt_templates';
import { example } from '$lib/components/PDF/test';
import { env } from '$env/dynamic/private';
// You may want to replace the above with a static private env variable
// for dead-code elimination and build-time type-checking:
// import { OPENAI_API_KEY } from '$env/static/private'

import type { RequestHandler } from './$types';

export const config: Config = {
	runtime: 'edge'
};

export const POST = (async ({ request }) => {
	const json = await request.json();
	const { messages } = json;

	const ChatClient = new OpenAI({
		// name: env.CHAT_MODEL,
		baseURL: env.CHAT_BASE_URL,
		apiKey: env.CHAT_APIKEY
	});

	// Create a prompt with the user's messages
	const chatPrompt = chat_prompt_template.replace("{example}", JSON.stringify(example)).replace("{user_question}", messages[0].content);

	const chatpayload = [
		{
			role: 'user',
			content: chatPrompt
		}
	]

	const chatResponse = await ChatClient.chat.completions.create({
		model: "llama-3.1-70b-versatile",
		stream: true,
		messages: chatpayload
	});

	console.log("chatResponse", chatResponse);
		
	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(chatResponse, {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		async onCompletion(completion) {
			// const title = messages[0].content.substring(0, 100);
			// const id = json.id ?? nanoid();
			// const createdAt = Date.now();
			return
		}
	});

	// Respond with the stream
	return new StreamingTextResponse(stream);
}) satisfies RequestHandler;
