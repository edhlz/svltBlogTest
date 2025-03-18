export type Categorias = 'sveltekit' | 'svelte'

export type Post = {
    ordenar: any
    publicar: any
    titulo: string
    slug: string  
    descricao: string
    data: string
    categorias: Categorias[] 
    publicado: boolean
}
