<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
	<h1 class="text-center text-4xl font-black text-[#8CAAEE]">Signup</h1>
	<form
		action="?/register"
		method="POST"
		class="mt-6 grid w-80 gap-4 rounded-xl bg-[#181825] p-8 shadow-md"
		use:enhance
	>
		<div class="grid gap-1">
			<label for="username" class="text-sm font-bold">Username</label>
			<input
				id="username"
				name="username"
				type="text"
				placeholder="johndoe120"
				class="w-full rounded-lg border-2 border-[#313244] bg-[#181825] p-2 outline-none"
				required
			/>
		</div>
		<div class="grid gap-1">
			<label for="password" class="text-sm font-bold">Password</label>
			<input
				id="password"
				name="password"
				type="password"
				class="w-full rounded-lg border-2 border-[#313244] bg-[#181825] p-2 outline-none"
				required
			/>
		</div>
		<button class="w-full rounded-lg bg-[#89b4fa] p-2 font-bold text-[#313244]" type="submit"
			>Signup</button
		>
		{#if form?.message}
			<p class="text-[#f38ba8]">{form?.message}</p>
		{/if}

		<p class="mt-5 text-center text-sm">
			Already have an account? <a href="/login" class="underline">Login</a>
		</p>
	</form>
</main>
