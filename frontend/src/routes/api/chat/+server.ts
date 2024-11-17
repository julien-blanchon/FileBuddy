// import { nanoid } from '$lib/utils';
import type { Config } from '@sveltejs/adapter-vercel';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

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
	const { messages, previewToken } = json;

	// Create an OpenAI API client
	const config = new Configuration({
		apiKey: previewToken || env.OPENAI_API_KEY
	});
	const openai = new OpenAIApi(config);

	// Ask OpenAI for a streaming chat completion given the prompt
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages,
		temperature: 0.7,
		stream: true
	});


	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response, {
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
