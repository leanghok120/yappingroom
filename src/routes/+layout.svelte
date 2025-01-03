<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-[#303446] text-[#C6D0F5]">
	<main class="mx-auto max-w-xl">
		<h1 class="p-10 text-center text-4xl font-black text-[#8CAAEE]">Yapping Room</h1>
		{@render children()}
	</main>
</div>
