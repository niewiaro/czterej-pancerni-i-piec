const appName = "Czterej Pancerni i Piec";
const appDescription = "Drużyna hackathonowa specjalizująca się w Embedded Systems, IoT i Robotyce.";
const appUrl = "https://pancerni.niewiaro.cc/";
const gitProfileUrl = "https://github.com/Niewiaro";

export default defineNuxtConfig({
	modules: [
		"@nuxt/ui",
		"@nuxtjs/i18n",
		"@nuxt/eslint",
		"@nuxtjs/seo",
		"@nuxt/fonts",
	],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],

	site: {
		url: appUrl,
		name: appName,
		description: appDescription,
		defaultLocale: "pl",
		indexable: true,
		trailingSlash: true,
	},

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

	compatibilityDate: "2024-05-04",

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

	fonts: {
		families: [
			{ name: "Inter", weights: [400, 500], global: true },
			{ name: "Montserrat", weights: [700, 800, 900], global: true },
			{ name: "JetBrains Mono", weights: [400, 700], global: true },
		],
	},

	i18n: {
		baseUrl: appUrl,
		locales: [
			{ code: "pl", iso: "pl-PL", name: "Polski", file: "pl.json" },
			{ code: "en", iso: "en-US", name: "English", file: "en.json" },
		],
		defaultLocale: "pl",
		strategy: "prefix_and_default",
	},
});
