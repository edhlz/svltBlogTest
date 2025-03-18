<script lang="ts">
	import '../app.css';
	import Copyright from '../components/Copyright.svelte';
	let { children } = $props();
</script>



{@render children()}

<Copyright />

