<script setup lang="ts">
const config = useRuntimeConfig();
const i18nHead = useLocaleHead({
	seo: true,
});

useHead(() => ({
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs!.lang,
	},
	link: [
		...(i18nHead.value.link || []),
		{ rel: "manifest", href: "/site.webmanifest" },
	],
	meta: [...(i18nHead.value.meta || [])],
}));

useSchemaOrg([
	defineWebSite({
		name: config.public.appName,
	}),
	defineWebPage(),
	defineOrganization({
		name: config.public.appName,
		description: config.public.appDescription,
		logo: `${config.public.appURL}/web-app-manifest-512x512.png`,
		url: config.public.appURL,
		sameAs: [
			config.public.gitRepoURL,
		],
	}),
]);
</script>

<template>
	<UApp>
		<NuxtAnnouncer />
		<NuxtRouteAnnouncer />

		<NuxtLoadingIndicator color="#f97316" />

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
