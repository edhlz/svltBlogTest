import type { Post } from '$lib/types'
import { json } from '@sveltejs/kit'


async function getPosts() {
	let posts: Post[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>
			const post = { ...metadata, slug } satisfies Post
			post.publicado && posts.push(post)
		}
	}

	posts = posts.sort((first: { data: string | number | Date }, second: { data: string | number | Date }) =>
    new Date(second.data).getTime() - new Date(first.data).getTime()
	)

	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}
