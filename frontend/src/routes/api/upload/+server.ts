import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private'

export const POST = async ({ request }) => {

	const form = await request.formData();
	const file = form.get('file') as File;

	if (!file) {
		throw error(400, { message: 'No file to upload.' });
	}

	const { url } = await put(file.name, file, {
		access: 'public',
		token: BLOB_READ_WRITE_TOKEN,
	 });

	console.log('uploading file', url);


	return new Response(JSON.stringify({ url }), {
		headers: {
			'content-type': 'application/json'
		}
	});
};
