<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const config = useRuntimeConfig();
const localePath = useLocalePath();

const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: t("header.nav.about"),
		to: "/#about",
		icon: "i-heroicons-information-circle",
	},
	{
		label: t("header.nav.stats"),
		to: "/#stats",
		icon: "i-heroicons-chart-pie",
	},
	{
		label: t("header.nav.achievements"),
		to: "/#achievements",
		icon: "i-heroicons-trophy",
	},
	{
		label: t("header.nav.team"),
		to: "/#team",
		icon: "i-heroicons-user-group",
	},
	{
		label: t("header.nav.loot"),
		to: "/#loot",
		icon: "i-heroicons-cube-transparent",
	},
]);
</script>

<template>
	<UHeader mode="drawer">
		<template #left>
			<NuxtLink
				:to="localePath('/')"
				class="flex items-center gap-3"
			>
				<AppLogo class="w-10 h-10 text-primary-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,87,34,0.5)] transition-all duration-300" />

				<div class="flex flex-col">
					<span class="font-heading font-black text-xl tracking-wide uppercase text-white group-hover:text-primary-400 transition-colors">4 P i P</span>
					<span class="text-secondary-400 text-[10px] font-mono">{{ config.public.appName }}</span>
				</div>
			</NuxtLink>
		</template>

		<UNavigationMenu
			:items="items"
			variant="link"
			color="secondary"
			class="hidden lg:flex font-mono"
		/>

		<template #right>
			<UButton
				:to="config.public.gitURL"
				target="_blank"
				icon="i-simple-icons-github"
				color="neutral"
				variant="ghost"
				aria-label="GitHub Repository"
				class="hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
			/>
			<UDrawer>
				<UButton
					icon="i-lucide-languages"
					color="neutral"
					variant="ghost"
					:aria-label="t('i18n.selectLanguage')"
				/>

				<template #content>
					<div class="p-6 flex flex-col gap-2 max-w-4xl mx-auto w-full">
						<h3 class="text-lg font-semibold mb-4 text-center">
							{{ t('i18n.selectLanguage') }}
						</h3>

						<UButton
							v-for="l in locales"
							:key="l.code"
							:label="l.name"
							:to="switchLocalePath(l.code)"
							color="neutral"
							:variant="l.code === locale ? 'soft' : 'ghost'"
							size="xl"
							class="justify-between"
						>
							<template #trailing>
								<UIcon
									v-if="l.code === locale"
									name="i-lucide-check"
									class="shrink-0 size-5 text-primary"
								/>
							</template>
						</UButton>
					</div>
				</template>
			</UDrawer>

			<!-- <UColorModeButton /> -->
		</template>

		<template #body>
			<div class="p-6 flex flex-col gap-2 max-w-4xl mx-auto w-full">
				<UNavigationMenu
					:items="items"
					orientation="vertical"
					variant="link"
					color="secondary"
					class="-mx-2.5 mb-4 text-center [&_a]:text-lg [&_a]:font-semibold [&_button]:text-lg [&_button]:font-semibold font-mono"
				/>
			</div>
		</template>
	</UHeader>
</template>
