<script setup lang="ts">
// const config = useRuntimeConfig();
// const { t } = useI18n();

// useSeoMeta({
// 	title: () => t("seo.title"),
// 	description: () => t("seo.description"),
// 	ogTitle: () => t("seo.title"),
// 	ogDescription: () => t("seo.description"),
// 	author: config.public.author,
// 	themeColor: "#1A1A1D",
// });
</script>

<template>
	<div class="space-y-0">
		<HomeHeroSection />
		<HomeStatsSection />
		<HomeAchievementsSection />
		<HomeTeamSection />
		<HomeLootSection />
	</div>
</template>
