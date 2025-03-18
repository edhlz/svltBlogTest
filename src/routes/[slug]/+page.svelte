<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.titulo}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.titulo} />
</svelte:head>

<main class="min-h-screen flex flex-col items-center p-6">
	<article class="max-w-3xl w-full">
		<hgroup class="text-center mb-8">
			<h1 class="text-3xl font-bold capitalize mb-2">{data.meta.titulo}</h1>
			<p class="text-gray-500 text-sm">Publicado em {formatDate(data.meta.data)}</p>
		</hgroup>

		<div class="flex gap-3 justify-center mb-12">
			{#each data.meta.categorias as category}
				<span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
					&num;{category}
				</span>
			{/each}
		</div>

		<div class="prose mx-auto text-left max-w-2xl markdown">
			<data.content />
		</div>
	</article>
</main>

