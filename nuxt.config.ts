const appName = "Czterej Pancerni i Piec";
const appDescription = "Drużyna hackathonowa specjalizująca się w Embedded Systems, IoT i Robotyce.";
const appUrl = "https://pancerni.niewiaro.cc/";
const gitProfileUrl = "https://github.com/Niewiaro";

export default defineNuxtConfig({
	modules: [
		"@nuxt/ui",
		"@nuxtjs/i18n",
		"@nuxt/eslint",
		"@nuxt/fonts",
	],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],

	runtimeConfig: {
		public: {
			appName: appName,
			appDescription: appDescription,
			author: "Jakub Niewiarowski",
			environment: "prod",
			appURL: appUrl,
			gitURL: gitProfileUrl,
			gitRepoURL: `${gitProfileUrl}/czterej-pancerni-i-piec`,
			linkedInURL: "https://www.linkedin.com/in/jakub-niewiarowski/",
		},
	},

	compatibilityDate: "2026-06-02",

	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},

	i18n: {
		baseUrl: appUrl,
		locales: [
			{ code: "pl", iso: "pl-PL", language: "pl", name: "Polski", file: "pl.json", dir: "ltr" },
			{ code: "en", iso: "en-US", language: "en", name: "English", file: "en.json", dir: "ltr" },
		],
		defaultLocale: "pl",
		strategy: "prefix_except_default",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
		},
	},
});
