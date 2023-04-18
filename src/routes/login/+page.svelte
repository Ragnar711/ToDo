<script>
	import { goto } from '$app/navigation';
	let email = '';
	let password = '';
	let error = '';
	const handleLogin = async () => {
		error = '';
		if (!email || !password) {
			error = 'Please enter both email and password';
		} else {
			goto('/');
		}
	};
</script>

<div class="cont bg-gray-300 w-full h-screen flex justify-center items-center">
	<div class="login_container p-4 w-[30%] h-[60%] flex flex-col justify-around items-center">
		<h1 class="text-white text-2xl font-bold">Sign in to your account</h1>
		<div class="w-[80%] rounded-md shadow-sm">
			<div>
				<label for="email-address" class="sr-only">Email address</label>
				<input
					bind:value={email}
					id="email-address"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="text-center relative bg-transparent block w-full rounded-t-md border-white border-b-2 py-1.5 text-white placeholder:text-white focus:z-10 focus:border-green-400 focus:outline-none sm:text-sm sm:leading-6"
					placeholder="Email address"
				/>
			</div>
			<div>
				<label for="password" class="sr-only">Password</label>
				<input
					bind:value={password}
					id="password"
					name="password"
					type="password"
					autocomplete="current-password"
					required
					class=" mt-8 text-center relative bg-transparent block w-full rounded-t-md border-white border-b-2 py-1.5 text-white placeholder:text-white focus:z-10 focus:border-green-400 focus:outline-none sm:text-sm sm:leading-6"
					placeholder="Password"
				/>
			</div>
		</div>
		<div class="w-[80%] flex flex-row justify-between items-center">
			<button
				class="group relative flex w-[45%] justify-center rounded-md bg-green-600 p-2 text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				on:click={handleLogin}>Login</button
			>
			<button
				class="group relative flex w-[45%] justify-center rounded-md bg-green-600 p-2 text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Google</button
			>
		</div>
	</div>
</div>

<style>
	.cont {
		background-image: url('../../assets/snow.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.login_container {
		border-radius: 25px;
		backdrop-filter: blur(20px);
		background-color: rgba(255, 255, 255, 0.3);
		box-shadow: 0 1px 12px rgba(0, 0, 0, 0.25);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
</style>
