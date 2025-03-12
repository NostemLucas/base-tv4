import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'nuxt-lucide-icons',
		'@pinia/nuxt',
		'@vee-validate/nuxt',
		'@nuxt/image',
		'@vueuse/nuxt',
	],
	vite: {
		plugins: [tailwindcss()],
	},
	css: ['~/assets/css/main.css'],
});
