<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()

	
</script>


<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section class="max-w-[800px] mx-auto p-8 text-white">
    <ul class="flex flex-col gap-8">
        {#each data.posts as post}
            <li class="bg-gray-900 border border-gray-700 rounded-lg p-6 transition-transform duration-200 ease-in hover:-translate-y-0.5">
                <a 
                    href={post.slug} 
                    class="text-2xl font-semibold text-gray-100 block mb-2 capitalize">
                    {post.titulo}
                </a>
                <p class="text-sm text-gray-400 mb-2">{formatDate(post.data)}</p>
                <p class="text-gray-300 leading-relaxed">{post.descricao}</p>
            </li>
        {/each}
    </ul>
</section>