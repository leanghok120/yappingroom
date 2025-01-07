<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="mx-auto flex min-h-screen max-w-2xl flex-col">
	<form action="?/logout" method="POST" class="absolute right-5 top-5">
		<button type="submit">logout</button>
	</form>
	<h1 class="p-10 text-center text-4xl font-black text-[#8CAAEE]">Yapping Room</h1>

	<div class="flex-1 space-y-5">
		{#each data.messages as message}
			<div>
				<h2 class="font-semibold">{message.userName}</h2>
				<div class="w-fit rounded-xl border-2 border-[#313244] bg-[#181825] px-6 py-3 text-center">
					<p>{message.content}</p>
				</div>
			</div>
		{/each}
	</div>

	<form class="py-10" method="POST" action="?/sendMessage" use:enhance>
		<input
			type="text"
			name="content"
			placeholder="Type here..."
			class="w-full rounded-xl border-2 border-[#313244] bg-[#181825] p-3 outline-none"
		/>
	</form>
</main>
