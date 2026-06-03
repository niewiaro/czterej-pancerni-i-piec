<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();
const i18nHead = useLocaleHead({
	seo: true,
});

const lang = computed(() => i18nHead.value.htmlAttrs?.lang || "pl");
const dir = computed(() => locales[locale.value as keyof typeof locales]?.dir || "ltr");

useHead(() => ({
	htmlAttrs: {
		lang: lang.value,
		dir: dir.value,
		class: "dark",
		style: "color-scheme: dark;",
	},
	link: [
		...(i18nHead.value.link || []),
		{ rel: "icon", type: "image/png", href: "/favicon-96x96.png?v=20260603", sizes: "96x96" },
		{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=20260603" },
		{ rel: "shortcut icon", href: "/favicon.ico?v=20260603" },
		{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=20260603" },
		{ rel: "manifest", href: "/site.webmanifest?v=20260603" },
	],
	meta: [
		...(i18nHead.value.meta || []),
		{ name: "apple-mobile-web-app-title", content: "4PIP" },
		{ name: "theme-color", content: "#1A1A1D" },
	],
}));
</script>

<template>
	<UApp :locale="locales[locale as keyof typeof locales]">
		<NuxtAnnouncer />
		<NuxtRouteAnnouncer />

		<NuxtLoadingIndicator color="#f97316" />

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
