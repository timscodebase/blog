import type { Post } from '$lib/types'

export const prerender = true

export async function load({ fetch }: { fetch: typeof fetch }): Promise<{ posts: Post[] }> {
	const response = await fetch('api/posts')
	return { posts: await response.json() }
}
