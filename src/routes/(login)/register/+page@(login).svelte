<script>
	// @ts-nocheck
	export let data;
</script>

<div
	class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
>
	<div class="flex min-h-full items-center justify-center py-0 px-4 sm:px-6 lg:px-8">
		<div class="w-full max-w-md space-y-8">
			<div>
				<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
					Register New Account
				</h2>
			</div>
			<form class="mt-8 space-y-6" method="POST" action="?/create">
				<input type="hidden" name="remember" value="true" />
				<div class="-space-y-px rounded-md shadow-sm">
					<div class="py-2">
						<label for="first-name" class="sr-only">Your First Name</label>
						<input
							id="first-name"
							name="first-name"
							type="name"
							autocomplete="first-name"
							required
							class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							placeholder="First Name"
						/>
					</div>
					<div>
						<div>
							<label for="last-name" class="sr-only">Your Last Name</label>
							<input
								id="last-name"
								name="last-name"
								type="name"
								autocomplete="last-name"
								required
								class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Last Name"
							/>
						</div>
						<div class="py-2">
							<label for="email-address" class="sr-only">Email address</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autocomplete="email"
								required
								class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Email address"
							/>
						</div>
						<div>
							<label for="password" class="sr-only">Password</label>
							<input
								id="password"
								name="password"
								type="password"
								autocomplete="current-password"
								required
								class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Password"
							/>
						</div>
					</div>

					<div class="flex items-center justify-between py-4" />

					<div>
						<button
							type="submit"
							class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-green-400 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2"
						>
							Register
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
