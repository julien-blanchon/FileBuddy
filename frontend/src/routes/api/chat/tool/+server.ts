// import { nanoid } from '$lib/utils';
import type { Config } from '@sveltejs/adapter-vercel';
import { StreamingTextResponse } from 'ai';
import OpenAI from 'openai';
import { tool_prompt_template2 } from '$lib/prompt_templates';
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
	console.log("messages", messages);
	const toolClient = new OpenAI({
		// name: env.TOOL_MODEL,
		baseURL: env.TOOL_BASE_URL,
		apiKey: env.TOOL_APIKEY
	});

	const toolPrompt = tool_prompt_template2.replace("{example}", JSON.stringify(example)).replace("{user_question}", messages);

	const toolPayload = [
		{
			role: 'user',
			content: toolPrompt
		}
	]

	const toolResponse = await toolClient.chat.completions.create({
		model: "Qwen/Qwen2.5-72B-Instruct",
		stream: false,
		messages: toolPayload
	});

	console.log("toolPrompt", toolPrompt);



	// Get the ids entry of toolResponse.choices[0].message.content
	// const ids = JSON.parse(toolResponse.choices[0].message.content).ids;
	const ids = JSON.parse(toolResponse.choices[0].message.content.slice(1, -1)).ids;
	console.log("ids", ids);
	// Respond with the stream
	return new Response(JSON.stringify({ ids }), {
        headers: {
            'content-type': 'application/json'
        }
    });
}) satisfies RequestHandler;
