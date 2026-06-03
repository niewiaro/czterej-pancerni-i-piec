<script setup lang="ts">
const config = useRuntimeConfig();
const { t } = useI18n();

const achievements = [
	{
		id: 1,
		place: t("achievements.items.item1.place"),
		badgeStyle: "bg-primary-500 text-white",
		date: t("achievements.items.item1.date"),
		title: t("achievements.items.item1.title"),
		category: t("achievements.items.item1.category"),
		description: t("achievements.items.item1.description"),
		repoLink: config.public.gitURL + "/MECHATON-AGH",
	},
	{
		id: 2,
		place: t("achievements.items.item2.place"),
		badgeStyle: "bg-primary-500 text-white",
		date: t("achievements.items.item2.date"),
		title: t("achievements.items.item2.title"),
		category: t("achievements.items.item2.category"),
		description: t("achievements.items.item2.description"),
		repoLink: config.public.gitURL + "/RCDC-2025",
	},
	{
		id: 3,
		place: t("achievements.items.item3.place"),
		badgeStyle: "bg-white/10 text-white",
		date: t("achievements.items.item3.date"),
		title: t("achievements.items.item3.title"),
		category: t("achievements.items.item3.category"),
		description: t("achievements.items.item3.description"),
		repoLink: config.public.gitURL + "/hacknarok-2026",
	},
	{
		id: 4,
		place: t("achievements.items.item4.place"),
		badgeStyle: "bg-white/10 text-white",
		date: t("achievements.items.item4.date"),
		title: t("achievements.items.item4.title"),
		category: t("achievements.items.item4.category"),
		description: t("achievements.items.item4.description"),
		repoLink: config.public.gitURL + "/BHL-2025-Hardware",
	},
	{
		id: 5,
		place: t("achievements.items.item5.place"),
		badgeStyle: "bg-white/5 text-secondary-300",
		date: t("achievements.items.item5.date"),
		title: t("achievements.items.item5.title"),
		category: t("achievements.items.item5.category"),
		description: t("achievements.items.item5.description"),
		repoLink: config.public.gitURL + "/RCDC-2026",
	},
];
</script>

<template>
	<section
		id="achievements"
		class="py-16 md:py-24 relative"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div class="mb-10 md:mb-16">
				<h2 class="font-heading font-black text-3xl md:text-4xl mb-3 md:mb-4 text-white">
					{{ t('achievements.heading') }}
				</h2>
				<p class="text-secondary-400 font-mono text-sm md:text-base">
					{{ t('achievements.description') }}
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
				<div
					v-for="item in achievements"
					:key="item.id"
					class="group bg-neutral-950 p-6 md:p-8 rounded-xl border border-white/10 transition-all duration-300 relative overflow-hidden hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10"
				>
					<div
						class="absolute top-0 right-0 font-mono text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-lg z-10"
						:class="item.badgeStyle"
					>
						{{ item.place }}
					</div>

					<div class="font-mono text-xs md:text-sm text-secondary-400 mb-2 mt-2 md:mt-0">
						{{ item.date }}
					</div>

					<h3 class="font-heading font-bold text-xl md:text-2xl mb-1 text-white group-hover:text-primary-400 transition-colors">
						{{ item.title }}
					</h3>

					<p class="text-primary-500 text-xs md:text-sm font-mono mb-4">
						{{ item.category }}
					</p>

					<p class="text-neutral-300 text-sm md:text-base mb-6 border-l-2 border-white/20 pl-4 group-hover:border-primary-500/50 transition-colors">
						{{ item.description }}
					</p>

					<NuxtLink
						:to="item.repoLink"
						target="_blank"
						class="inline-flex items-center font-mono text-sm text-secondary-300 hover:text-primary-500 transition-colors"
					>
						<UIcon
							name="i-heroicons-arrow-up-right"
							class="w-4 h-4 mr-2"
						/>
						{{ t('achievements.repoLink') }}
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>
