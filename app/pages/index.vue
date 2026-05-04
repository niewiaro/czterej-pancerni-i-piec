<script setup lang="ts">
const config = useRuntimeConfig();
const { t } = useI18n();

useSeoMeta({
	description: () => t("seo.description"),
	// ogTitle: () => t("seo.title"),
	// ogDescription: () => t("seo.description"),
	author: config.public.author,
	themeColor: "#121212",
});

const techIcons = [
	"i-simple-icons-python",
	"i-simple-icons-fastapi",
	"i-simple-icons-django",
	"i-simple-icons-javascript",
	"i-simple-icons-vuedotjs",
	"i-simple-icons-nuxtdotjs",
	"i-simple-icons-cplusplus",
	"i-simple-icons-platformio",
	"i-simple-icons-arduino",
	"i-simple-icons-espressif",
];
</script>

<template>
	<UPage class="max-w-4xl mx-auto w-full overflow-x-hidden">
		<UPageHero
			:title="t('homepage.title')"
			:description="t('homepage.description')"
			:headline="t('homepage.welcome')"
		/>
		<UPageBody>
			<div class="relative flex w-full max-w-full overflow-hidden">
				<UMarquee
					pause-on-hover
					class="py-10"
				>
					<UIcon
						v-for="icon in techIcons"
						:key="icon"
						:name="icon"
						class="size-10 shrink-0 mr-8"
					/>
				</UMarquee>
			</div>
		</UPageBody>
	</UPage>
</template>
