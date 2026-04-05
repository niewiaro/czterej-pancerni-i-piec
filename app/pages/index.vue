<script setup lang="ts">
const config = useRuntimeConfig();
const { t } = useI18n();

useSeoMeta({
	description: () => t("seo.description"),
	ogTitle: () => t("seo.title"),
	ogDescription: () => t("seo.description"),
	author: config.public.author,
	themeColor: "#121212",
});

defineOgImage("Docs.takumi", {
	title: () => t("og.title"),
	description: () => t("og.description"),
});
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
						name="i-simple-icons-python"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-fastapi"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-django"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-javascript"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-vuedotjs"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-nuxtdotjs"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-cplusplus"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-platformio"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-arduino"
						class="size-10 shrink-0 mr-8"
					/>
					<UIcon
						name="i-simple-icons-espressif"
						class="size-10 shrink-0 mr-8"
					/>
				</UMarquee>
			</div>
		</UPageBody>
	</UPage>
</template>
