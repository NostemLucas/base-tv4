import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', {
	state: () => ({
		// Configuración de la API almacenada en localStorage
		config: useStorage('api_config', {
			baseUrl: 'https://api.example.com',
			timeout: 5000,
			headers: {
				'Content-Type': 'application/json',
			},
		}),

		// Token de autenticación
		token: useStorage('api_token', ''),

		// Datos en caché
		cachedData: useStorage('api_cached_data', {}),

		// Estado de carga
		isLoading: false,

		// Estado de error
		error: null as string | null,
	}),

	getters: {
		isAuthenticated(): boolean {
			return !!this.token;
		},

		getHeaders(): Record<string, string> {
			return {
				...this.config.headers,
				...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
			};
		},
	},

	actions: {
		// Configurar la API
		setConfig(config: Partial<typeof this.config>) {
			this.config = { ...this.config, ...config };
		},

		// Establecer token
		setToken(token: string) {
			this.token = token;
		},

		// Limpiar token
		clearToken() {
			this.token = '';
		},

		// Guardar datos en caché
		setCachedData(key: string, data: any) {
			this.cachedData[key] = {
				data,
				timestamp: Date.now(),
			};
		},

		// Obtener datos en caché
		getCachedData(key: string, maxAge = 300000) {
			// 5 minutos por defecto
			const cached = this.cachedData[key];
			if (!cached) return null;

			const isExpired = Date.now() - cached.timestamp > maxAge;
			if (isExpired) {
				delete this.cachedData[key];
				return null;
			}

			return cached.data;
		},

		// Limpiar caché
		clearCache() {
			this.cachedData = {};
		},

		// Realizar petición a la API
		async fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
			try {
				this.isLoading = true;
				this.error = null;

				const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
					...options,
					headers: {
						...this.getHeaders,
						...options.headers,
					},
				});

				if (!response.ok) {
					throw new Error(`Error HTTP: ${response.status}`);
				}

				const data = await response.json();
				return data;
			} catch (error) {
				this.error =
					error instanceof Error ? error.message : 'Error desconocido';
				throw error;
			} finally {
				this.isLoading = false;
			}
		},
	},
});
