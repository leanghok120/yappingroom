<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-[#303446] text-[#C6D0F5]">
	{@render children()}
</div>
