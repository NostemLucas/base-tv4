<template>
	<div
		class="flex h-screen flex-col overflow-hidden bg-gradient-to-b from-blue-50 to-blue-200"
	>
		<!-- Main container with improved shadow -->
		<div
			class="m-2 flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-xl md:m-4"
		>
			<!-- Top navigation bar with improved styling -->
			<div
				class="sticky top-0 z-10 flex items-center border-b bg-white p-2 md:p-3"
			>
				<button
					class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-menu"
					>
						<line x1="4" x2="20" y1="12" y2="12" />
						<line x1="4" x2="20" y1="6" y2="6" />
						<line x1="4" x2="20" y1="18" y2="18" />
					</svg>
				</button>
				<h1 class="ml-4 hidden text-lg font-medium md:block">
					Manufacturing Metrics
				</h1>
				<div class="ml-4 flex items-center">
					<div class="group relative">
						<button
							class="rounded-md p-1 transition-colors duration-200 hover:bg-gray-100"
						>
							<span
								class="flex items-center rounded-md bg-blue-600 px-2 py-1 text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-circle mr-1"
								>
									<circle cx="12" cy="12" r="10" />
								</svg>
								<span class="hidden md:inline">General</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-chevron-down ml-1"
								>
									<path d="m6 9 6 6 6-6" />
								</svg>
							</span>
						</button>
						<div
							class="absolute top-full left-0 z-20 mt-1 hidden w-48 rounded-md bg-white shadow-lg group-hover:block"
						>
							<div class="py-1">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
								>
									Manufacturing
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
								>
									Sales
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
								>
									Logistics
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
								>
									Finance
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="relative mx-4 max-w-xl flex-grow">
					<div
						class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-search text-gray-400"
						>
							<circle cx="11" cy="11" r="8" />
							<path d="m21 21-4.3-4.3" />
						</svg>
					</div>
					<input
						type="search"
						class="block w-full rounded-md border p-2 pl-10 text-sm transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
						placeholder="Search"
					/>
				</div>
				<div class="flex items-center space-x-2 md:space-x-4">
					<div class="group relative">
						<button
							class="relative rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-bell"
							>
								<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
								<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
							</svg>
							<span
								class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"
							></span>
						</button>
						<div
							class="absolute top-full right-0 z-20 mt-1 hidden w-80 rounded-md bg-white shadow-lg group-hover:block"
						>
							<div class="border-b p-3">
								<h3 class="font-medium">Notifications</h3>
							</div>
							<div class="max-h-64 overflow-y-auto">
								<a href="#" class="block border-b p-3 hover:bg-gray-50">
									<div class="flex">
										<div class="mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-alert-circle text-blue-500"
											>
												<circle cx="12" cy="12" r="10" />
												<line x1="12" x2="12" y1="8" y2="12" />
												<line x1="12" x2="12.01" y1="16" y2="16" />
											</svg>
										</div>
										<div>
											<p class="text-sm font-medium">
												Production target reached
											</p>
											<p class="text-xs text-gray-500">
												North America facility exceeded target by 15%
											</p>
											<p class="mt-1 text-xs text-gray-400">2 hours ago</p>
										</div>
									</div>
								</a>
								<a href="#" class="block border-b p-3 hover:bg-gray-50">
									<div class="flex">
										<div class="mr-3 flex-shrink-0">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-alert-triangle text-yellow-500"
											>
												<path
													d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
												/>
												<path d="M12 9v4" />
												<path d="M12 17h.01" />
											</svg>
										</div>
										<div>
											<p class="text-sm font-medium">Inventory alert</p>
											<p class="text-xs text-gray-500">
												Raw materials running low in Asia facility
											</p>
											<p class="mt-1 text-xs text-gray-400">1 day ago</p>
										</div>
									</div>
								</a>
							</div>
							<div class="border-t p-2 text-center">
								<a href="#" class="text-sm text-blue-600 hover:text-blue-800">
									View all notifications
								</a>
							</div>
						</div>
					</div>
					<div class="group relative">
						<button
							class="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-settings"
							>
								<path
									d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
								/>
								<circle cx="12" cy="12" r="3" />
							</svg>
						</button>
						<div
							class="absolute top-full right-0 z-20 mt-1 hidden w-48 rounded-md bg-white shadow-lg group-hover:block"
						>
							<div class="py-1">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Account Settings
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Dashboard Settings
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Preferences
								</a>
							</div>
						</div>
					</div>
					<button
						class="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-download"
						>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" x2="12" y1="15" y2="3" />
						</svg>
					</button>
					<button
						class="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-help-circle"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
							<path d="M12 17h.01" />
						</svg>
					</button>
					<div class="group relative">
						<button
							class="rounded-full p-1 transition-all duration-200 hover:ring-2 hover:ring-blue-300"
						>
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t9FZ29hg7GZNrNUWL0VptImrFsCqfb.png"
								alt="User"
								class="h-8 w-8 rounded-full object-cover"
							/>
						</button>
						<div
							class="absolute top-full right-0 z-20 mt-1 hidden w-64 rounded-md bg-white shadow-lg group-hover:block"
						>
							<div class="border-b p-3">
								<div class="flex items-center">
									<img
										src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t9FZ29hg7GZNrNUWL0VptImrFsCqfb.png"
										alt="User"
										class="mr-3 h-10 w-10 rounded-full object-cover"
									/>
									<div>
										<p class="font-medium">John Doe</p>
										<p class="text-xs text-gray-500">john.doe@example.com</p>
									</div>
								</div>
							</div>
							<div class="py-1">
								<a
									href="#"
									class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-user mr-3"
									>
										<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
										<circle cx="12" cy="7" r="4" />
									</svg>
									Profile
								</a>
								<a
									href="#"
									class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-settings mr-3"
									>
										<path
											d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
										/>
										<circle cx="12" cy="12" r="3" />
									</svg>
									Settings
								</a>
								<div class="my-1 border-t"></div>
								<a
									href="#"
									class="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-log-out mr-3"
									>
										<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
										<polyline points="16 17 21 12 16 7" />
										<line x1="21" x2="9" y1="12" y2="12" />
									</svg>
									Sign out
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Second navigation bar with improved styling -->
			<div
				class="sticky top-14 z-10 flex flex-wrap items-center border-b bg-white p-2 text-sm"
			>
				<div class="mr-2 flex items-center space-x-1">
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-home"
						>
							<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							<polyline points="9 22 9 12 15 12 15 22" />
						</svg>
					</button>
					<span class="hidden text-xs text-gray-500 sm:inline">Home</span>
				</div>
				<div class="mx-2 hidden h-6 border-l sm:block"></div>
				<div class="flex flex-wrap">
					<div class="group relative">
						<button
							class="flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-file mr-1"
							>
								<path
									d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
								/>
								<polyline points="14 2 14 8 20 8" />
							</svg>
							<span class="hidden sm:inline">File</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-chevron-down ml-1"
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							class="absolute top-full left-0 z-20 mt-1 hidden w-48 rounded-md bg-white shadow-lg group-hover:block"
						>
							<div class="py-1">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									New
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Open
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Save
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Save As
								</a>
								<div class="my-1 border-t"></div>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Print
								</a>
							</div>
						</div>
					</div>
					<div class="group relative">
						<button
							class="flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-arrow-up-right-from-square mr-1"
							>
								<path
									d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
								/>
								<path d="m21 3-9 9" />
								<path d="M15 3h6v6" />
							</svg>
							<span class="hidden sm:inline">Export</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-chevron-down ml-1"
							>
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							class="absolute top-full left-0 z-20 mt-1 hidden w-48 rounded-md bg-white shadow-lg group-hover:block"
						>
							<div class="py-1">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									PDF
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Excel
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									CSV
								</a>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								>
									Image
								</a>
							</div>
						</div>
					</div>
					<button
						class="flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-share mr-1"
						>
							<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
							<polyline points="16 6 12 2 8 6" />
							<line x1="12" x2="12" y1="2" y2="15" />
						</svg>
						<span class="hidden sm:inline">Share</span>
					</button>
					<button
						class="flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-message-square mr-1"
						>
							<path
								d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
							/>
						</svg>
						<span class="hidden sm:inline">Chat in Teams</span>
					</button>
					<button
						class="flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-lightbulb mr-1"
						>
							<path
								d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
							/>
							<path d="M9 18h6" />
							<path d="M10 22h4" />
						</svg>
						<span class="hidden sm:inline">Get insights</span>
					</button>
					<button
						class="flex items-center rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-pen mr-1"
						>
							<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
						</svg>
						<span class="hidden sm:inline">Edit</span>
					</button>
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-more-horizontal"
						>
							<circle cx="12" cy="12" r="1" />
							<circle cx="19" cy="12" r="1" />
							<circle cx="5" cy="12" r="1" />
						</svg>
					</button>
				</div>
				<div class="ml-auto flex items-center space-x-2">
					<button
						class="rounded-full bg-green-500 p-2 text-white transition-colors duration-200 hover:bg-green-600"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-check"
						>
							<polyline points="20 6 9 17 4 12" />
						</svg>
					</button>
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-bookmark"
						>
							<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
						</svg>
					</button>
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-check-square"
						>
							<polyline points="9 11 12 14 22 4" />
							<path
								d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
							/>
						</svg>
					</button>
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-refresh-cw"
						>
							<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
							<path d="M21 3v5h-5" />
							<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
							<path d="M3 21v-5h5" />
						</svg>
					</button>
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-message-square"
						>
							<path
								d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
							/>
						</svg>
					</button>
					<button
						class="rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-star"
						>
							<polygon
								points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Main content area with sidebar and content -->
			<div class="flex flex-1 overflow-hidden">
				<!-- Left sidebar with improved styling -->
				<div class="hidden w-16 flex-col bg-white shadow-inner md:flex">
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-home"
							>
								<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
								<polyline points="9 22 9 12 15 12 15 22" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Home
							</span>
						</button>
						<span class="text-xs text-gray-500">Home</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-plus"
							>
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Create
							</span>
						</button>
						<span class="text-xs text-gray-500">Create</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-folder"
							>
								<path
									d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
								/>
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Browse
							</span>
						</button>
						<span class="text-xs text-gray-500">Browse</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-database"
							>
								<ellipse cx="12" cy="5" rx="9" ry="3" />
								<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
								<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Data hub
							</span>
						</button>
						<span class="text-xs text-gray-500">Data hub</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-activity"
							>
								<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Monitoring hub
							</span>
						</button>
						<span class="text-center text-xs text-gray-500">
							Monitoring hub
						</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-trophy"
							>
								<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
								<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
								<path d="M4 22h16" />
								<path
									d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
								/>
								<path
									d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
								/>
								<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Metrics
							</span>
						</button>
						<span class="text-xs text-gray-500">Metrics</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-layout-grid"
							>
								<rect width="7" height="7" x="3" y="3" rx="1" />
								<rect width="7" height="7" x="14" y="3" rx="1" />
								<rect width="7" height="7" x="14" y="14" rx="1" />
								<rect width="7" height="7" x="3" y="14" rx="1" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Workspaces
							</span>
						</button>
						<span class="text-xs text-gray-500">Workspaces</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t9FZ29hg7GZNrNUWL0VptImrFsCqfb.png"
								alt="User"
								class="h-8 w-8 rounded-full object-cover"
							/>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								My workspace
							</span>
						</button>
						<span class="text-center text-xs text-gray-500">My workspace</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-bar-chart-2"
							>
								<line x1="18" x2="18" y1="20" y2="10" />
								<line x1="12" x2="12" y1="20" y2="4" />
								<line x1="6" x2="6" y1="20" y2="14" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Manufacturing Indicators
							</span>
						</button>
						<span class="text-center text-xs text-gray-500">
							Manufacturing Indicators
						</span>
					</div>
					<div class="flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-more-horizontal"
							>
								<circle cx="12" cy="12" r="1" />
								<circle cx="19" cy="12" r="1" />
								<circle cx="5" cy="12" r="1" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								More options
							</span>
						</button>
						<span class="text-xs text-gray-500">More...</span>
					</div>
					<div class="mt-auto flex flex-col items-center py-4">
						<button
							class="group relative mb-2 rounded-md p-2 transition-colors duration-200 hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-bar-chart"
							>
								<line x1="12" x2="12" y1="20" y2="10" />
								<line x1="18" x2="18" y1="20" y2="4" />
								<line x1="6" x2="6" y1="20" y2="16" />
							</svg>
							<span
								class="absolute left-full ml-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							>
								Analytics
							</span>
						</button>
						<span class="text-xs text-gray-500">Analytics</span>
					</div>
				</div>

				<!-- Main content with improved styling -->
				<div class="flex-1 overflow-auto">
					<div class="p-4">
						<!-- Tabs with improved styling -->
						<div class="mb-4 flex space-x-2 overflow-x-auto pb-2">
							<button
								class="flex items-center rounded-t-lg bg-blue-500 px-4 py-2 whitespace-nowrap text-white shadow-md transition-colors duration-200 hover:bg-blue-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-factory mr-2"
								>
									<path
										d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
									/>
									<path d="M17 18h1" />
									<path d="M12 18h1" />
									<path d="M7 18h1" />
								</svg>
								MANUFACTURING AND SALES EFFICIENCY
							</button>
							<button
								class="rounded-t-lg px-4 py-2 whitespace-nowrap text-gray-600 transition-colors duration-200 hover:bg-gray-100"
							>
								CO₂ emissions by GDP
							</button>
							<button
								class="rounded-t-lg px-4 py-2 whitespace-nowrap text-gray-600 transition-colors duration-200 hover:bg-gray-100"
							>
								Sales metrics
							</button>
						</div>

						<!-- Main dashboard content -->
						<div class="flex flex-col gap-4 lg:flex-row">
							<!-- Left side content -->
							<div class="w-full rounded-lg bg-white p-6 shadow-md lg:w-2/3">
								<div class="mb-2 font-medium text-blue-600">
									MANUFACTURING AND SALES EFFICIENCY
								</div>
								<h2 class="mb-4 text-2xl font-semibold">
									Production efficiency has improved around the world in the
									last 20 years
								</h2>

								<div class="flex flex-col gap-6 md:flex-row">
									<!-- Filters with improved styling -->
									<div class="w-full md:w-1/4">
										<div class="rounded-lg bg-white p-4 shadow-sm">
											<div
												class="mb-4 transition-transform duration-200 hover:scale-105"
											>
												<label class="flex cursor-pointer items-center">
													<input
														type="checkbox"
														class="form-checkbox h-4 w-4 rounded text-blue-600 transition-colors duration-200"
													/>
													<span class="ml-2 text-sm">North America</span>
												</label>
											</div>
											<div
												class="mb-4 transition-transform duration-200 hover:scale-105"
											>
												<label class="flex cursor-pointer items-center">
													<input
														type="checkbox"
														class="form-checkbox h-4 w-4 rounded text-blue-600 transition-colors duration-200"
													/>
													<span class="ml-2 text-sm">Asia</span>
												</label>
											</div>
											<div
												class="mb-4 transition-transform duration-200 hover:scale-105"
											>
												<label class="flex cursor-pointer items-center">
													<input
														type="checkbox"
														class="form-checkbox h-4 w-4 rounded text-blue-600 transition-colors duration-200"
													/>
													<span class="ml-2 text-sm">Europe</span>
												</label>
											</div>
											<div
												class="mb-4 transition-transform duration-200 hover:scale-105"
											>
												<label class="flex cursor-pointer items-center">
													<input
														type="checkbox"
														class="form-checkbox h-4 w-4 rounded text-blue-600 transition-colors duration-200"
													/>
													<span class="ml-2 text-sm">South America</span>
												</label>
											</div>
											<div
												class="mb-4 transition-transform duration-200 hover:scale-105"
											>
												<label class="flex cursor-pointer items-center">
													<input
														type="checkbox"
														class="form-checkbox h-4 w-4 rounded text-blue-600 transition-colors duration-200"
													/>
													<span class="ml-2 text-sm">Oceania</span>
												</label>
											</div>
										</div>
									</div>

									<!-- Globe visualization with improved styling -->
									<div class="flex w-full flex-col items-center md:w-3/4">
										<div
											class="mb-2 animate-pulse text-6xl font-bold text-gray-800"
										>
											78%
										</div>
										<div class="mb-6 text-sm text-gray-600">
											manufacturing efficiency worldwide in 2021
										</div>

										<div class="relative h-64 w-full md:h-80">
											<!-- Globe visualization placeholder with animation -->
											<div
												class="absolute inset-0 flex items-center justify-center"
											>
												<div
													class="relative h-64 w-64 overflow-hidden rounded-full border-8 border-blue-900 shadow-2xl transition-transform duration-500 hover:scale-105"
												>
													<div class="absolute inset-0 bg-blue-100"></div>
													<div
														class="absolute top-1/4 left-1/4 h-1/2 w-1/2 rotate-45 transform rounded-full bg-blue-700"
													></div>
													<div
														class="absolute top-1/3 left-1/2 h-1/4 w-1/4 rounded-full bg-blue-500"
													></div>
													<div
														class="absolute right-1/4 bottom-1/4 h-1/3 w-1/3 rounded-full bg-blue-800"
													></div>
													<div
														class="absolute top-1/2 right-1/3 h-1/5 w-1/5 rounded-full bg-blue-600"
													></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- Legend with improved styling -->
								<div class="mt-6">
									<div class="mb-2 text-sm text-gray-600">
										Manufacturing efficiency by region:
									</div>
									<div class="flex items-center">
										<div class="mr-2 text-sm">&lt;20%</div>
										<div class="flex h-4 overflow-hidden rounded-md shadow-sm">
											<div
												class="h-4 w-4 bg-blue-100 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-200 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-300 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-400 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-500 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-600 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-700 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-800 transition-all duration-200 hover:h-5"
											></div>
											<div
												class="h-4 w-4 bg-blue-900 transition-all duration-200 hover:h-5"
											></div>
										</div>
										<div class="ml-2 text-sm">&gt;80%</div>
									</div>
								</div>

								<!-- Timeline chart with improved styling -->
								<div class="mt-8 rounded-lg bg-white p-4 shadow-md">
									<div class="mb-2 flex items-center">
										<div class="mr-2 rounded-md bg-blue-600 p-1 shadow-sm">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="white"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-factory"
											>
												<path
													d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
												/>
												<path d="M17 18h1" />
												<path d="M12 18h1" />
												<path d="M7 18h1" />
											</svg>
										</div>
										<div>
											<div class="text-sm font-medium">Production</div>
											<div class="text-xs text-gray-600">
												Units without defects
											</div>
										</div>
									</div>

									<!-- Chart with hover effects -->
									<div class="relative h-24">
										<div
											class="absolute inset-x-0 bottom-0 flex h-16 items-end"
										>
											<div
												class="mx-px h-8 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-10 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-9 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-11 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-14 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-10 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-blue-600 transition-colors duration-200 hover:bg-blue-500"
											></div>
											<div
												class="mx-px h-8 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-10 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-14 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-10 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-14 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-12 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-16 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
											<div
												class="mx-px h-14 w-1/20 bg-gray-200 transition-colors duration-200 hover:bg-blue-300"
											></div>
										</div>
									</div>

									<!-- Years -->
									<div class="mt-1 flex justify-between text-xs text-gray-500">
										<div>2000</div>
										<div>2005</div>
										<div>2010</div>
										<div>2015</div>
										<div>2020</div>
									</div>
								</div>
							</div>

							<!-- Right side charts with improved styling -->
							<div class="w-full lg:w-1/3">
								<div class="rounded-lg bg-white p-4 shadow-md">
									<div class="mb-2 flex items-center">
										<div
											class="mr-2 rounded-md bg-blue-600 p-1 text-white shadow-sm"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-users"
											>
												<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
												<circle cx="9" cy="7" r="4" />
												<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
												<path d="M16 3.13a4 4 0 0 1 0 7.75" />
											</svg>
										</div>
										<div class="font-medium">
											Production (%) by facility type
										</div>
									</div>

									<div class="mb-2">
										<div class="mb-1 flex items-center text-sm">
											<span class="mr-2">Location:</span>
											<span class="mr-4 flex items-center">
												<span
													class="mr-1 h-3 w-3 rounded-full bg-blue-900"
												></span>
												<span>Urban</span>
											</span>
											<span class="flex items-center">
												<span
													class="mr-1 h-3 w-3 rounded-full bg-blue-300"
												></span>
												<span>Rural</span>
											</span>
										</div>

										<div
											class="flex h-6 w-full overflow-hidden rounded-md shadow-sm"
										>
											<div
												class="flex w-3/5 items-center justify-center bg-blue-900 text-xs text-white transition-all duration-500 hover:w-2/3"
											>
												54%
											</div>
											<div
												class="flex w-2/5 items-center justify-center bg-blue-300 text-xs text-white transition-all duration-500 hover:w-1/3"
											>
												46%
											</div>
										</div>
									</div>

									<!-- Charts with hover effects -->
									<div class="mt-6 space-y-6">
										<!-- Chart 1 -->
										<div
											class="transform transition-transform duration-200 hover:scale-105"
										>
											<div class="mb-1 text-sm font-medium">North America</div>
											<div
												class="relative h-24 overflow-hidden rounded-md bg-gray-50 shadow-sm"
											>
												<!-- Line chart -->
												<svg viewBox="0 0 100 50" class="h-full w-full">
													<path
														d="M0,40 C10,35 20,20 30,25 C40,30 50,15 60,10 C70,5 80,15 90,10 L90,50 L0,50 Z"
														fill="rgba(59, 130, 246, 0.2)"
													></path>
													<path
														d="M0,40 C10,35 20,20 30,25 C40,30 50,15 60,10 C70,5 80,15 90,10"
														fill="none"
														stroke="#3b82f6"
														stroke-width="2"
													></path>
												</svg>
											</div>
										</div>

										<!-- Chart 2 -->
										<div
											class="transform transition-transform duration-200 hover:scale-105"
										>
											<div class="mb-1 text-sm font-medium">Europe</div>
											<div
												class="relative h-24 overflow-hidden rounded-md bg-gray-50 shadow-sm"
											>
												<!-- Line chart -->
												<svg viewBox="0 0 100 50" class="h-full w-full">
													<path
														d="M0,30 C10,25 20,35 30,30 C40,25 50,15 60,20 C70,25 80,10 90,5 L90,50 L0,50 Z"
														fill="rgba(59, 130, 246, 0.2)"
													></path>
													<path
														d="M0,30 C10,25 20,35 30,30 C40,25 50,15 60,20 C70,25 80,10 90,5"
														fill="none"
														stroke="#3b82f6"
														stroke-width="2"
													></path>
												</svg>
											</div>
										</div>

										<!-- Chart 3 -->
										<div
											class="transform transition-transform duration-200 hover:scale-105"
										>
											<div class="mb-1 text-sm font-medium">Asia</div>
											<div
												class="relative h-24 overflow-hidden rounded-md bg-gray-50 shadow-sm"
											>
												<!-- Line chart -->
												<svg viewBox="0 0 100 50" class="h-full w-full">
													<path
														d="M0,45 C10,40 20,35 30,25 C40,15 50,10 60,5 C70,10 80,15 90,10 L90,50 L0,50 Z"
														fill="rgba(59, 130, 246, 0.2)"
													></path>
													<path
														d="M0,45 C10,40 20,35 30,25 C40,15 50,10 60,5 C70,10 80,15 90,10"
														fill="none"
														stroke="#3b82f6"
														stroke-width="2"
													></path>
												</svg>
											</div>
										</div>

										<!-- Chart 4 -->
										<div
											class="transform transition-transform duration-200 hover:scale-105"
										>
											<div class="mb-1 text-sm font-medium">South America</div>
											<div
												class="relative h-24 overflow-hidden rounded-md bg-gray-50 shadow-sm"
											>
												<!-- Line chart -->
												<svg viewBox="0 0 100 50" class="h-full w-full">
													<path
														d="M0,35 C10,40 20,30 30,35 C40,40 50,30 60,25 C70,20 80,25 90,20 L90,50 L0,50 Z"
														fill="rgba(59, 130, 246, 0.2)"
													></path>
													<path
														d="M0,35 C10,40 20,30 30,35 C40,40 50,30 60,25 C70,20 80,25 90,20"
														fill="none"
														stroke="#3b82f6"
														stroke-width="2"
													></path>
												</svg>
											</div>
										</div>
									</div>

									<div class="mt-2 flex justify-between text-xs text-gray-500">
										<div>2000</div>
										<div>2010</div>
										<div>2020</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right sidebar filters with improved styling -->
				<div class="hidden w-16 bg-gray-900 text-white shadow-inner xl:block">
					<div class="flex h-full flex-col items-center py-4">
						<span
							class="writing-vertical-lr mb-8 rotate-180 transform text-xs font-medium text-gray-400"
						>
							FILTERS
						</span>
						<div class="flex flex-col items-center space-y-6">
							<button
								class="group relative rounded-md p-2 transition-colors duration-200 hover:bg-gray-800"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-sliders-horizontal"
								>
									<line x1="21" x2="14" y1="4" y2="4" />
									<line x1="10" x2="3" y1="4" y2="4" />
									<line x1="21" x2="12" y1="12" y2="12" />
									<line x1="8" x2="3" y1="12" y2="12" />
									<line x1="21" x2="16" y1="20" y2="20" />
									<line x1="12" x2="3" y1="20" y2="20" />
									<line x1="14" x2="14" y1="2" y2="6" />
									<line x1="8" x2="8" y1="10" y2="14" />
									<line x1="16" x2="16" y1="18" y2="22" />
								</svg>
								<span
									class="absolute right-full mr-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
								>
									Adjust filters
								</span>
							</button>
							<button
								class="group relative rounded-md p-2 transition-colors duration-200 hover:bg-gray-800"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-bar-chart-3"
								>
									<path d="M3 3v18h18" />
									<path d="M18 17V9" />
									<path d="M13 17V5" />
									<path d="M8 17v-3" />
								</svg>
								<span
									class="absolute right-full mr-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
								>
									Chart options
								</span>
							</button>
							<button
								class="group relative rounded-md p-2 transition-colors duration-200 hover:bg-gray-800"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-calendar"
								>
									<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
									<line x1="16" x2="16" y1="2" y2="6" />
									<line x1="8" x2="8" y1="2" y2="6" />
									<line x1="3" x2="21" y1="10" y2="10" />
								</svg>
								<span
									class="absolute right-full mr-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
								>
									Date range
								</span>
							</button>
							<button
								class="group relative rounded-md p-2 transition-colors duration-200 hover:bg-gray-800"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-filter"
								>
									<polygon
										points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
									/>
								</svg>
								<span
									class="absolute right-full mr-2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
								>
									Advanced filters
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Footer with improved styling -->
			<div class="flex items-center justify-between bg-white p-2 shadow-inner">
				<div class="flex items-center">
					<button
						class="mr-2 rounded-md p-1 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-minus"
						>
							<path d="M5 12h14" />
						</svg>
					</button>
					<input
						type="range"
						min="0"
						max="100"
						value="80"
						class="h-1 w-24 cursor-pointer appearance-none rounded-lg bg-gray-300"
					/>
					<button
						class="ml-2 rounded-md p-1 transition-colors duration-200 hover:bg-gray-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-plus"
						>
							<path d="M5 12h14" />
							<path d="M12 5v14" />
						</svg>
					</button>
					<span class="ml-2 text-sm">80%</span>
				</div>
				<button
					class="rounded-md p-1 transition-colors duration-200 hover:bg-gray-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-maximize-2"
					>
						<polyline points="15 3 21 3 21 9" />
						<polyline points="9 21 3 21 3 15" />
						<line x1="21" x2="14" y1="3" y2="10" />
						<line x1="3" x2="10" y1="21" y2="14" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.writing-vertical-lr {
		writing-mode: vertical-lr;
	}
</style>
