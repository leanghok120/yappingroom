<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-[#1e1e2e] text-[#cdd6f4]">
	{@render children()}
</div>
