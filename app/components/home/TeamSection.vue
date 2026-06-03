<script setup lang="ts">
const config = useRuntimeConfig();
const { t } = useI18n();

const team = [
	{
		id: 1,
		name: t("team.items.item1.name"),
		role: t("team.items.item1.role"),
		description: t("team.items.item1.description"),
		linkedin: "https://www.linkedin.com/in/igor-janiszewski/",
		avatar: "",
	},
	{
		id: 2,
		name: t("team.items.item2.name"),
		role: t("team.items.item2.role"),
		description: t("team.items.item2.description"),
		linkedin: "https://www.linkedin.com/in/kamila-karasinska/",
		avatar: "",
	},
	{
		id: 3,
		name: t("team.items.item3.name"),
		role: t("team.items.item3.role"),
		description: t("team.items.item3.description"),
		linkedin: config.public.linkedInURL,
		avatar: "",
	},
	{
		id: 4,
		name: t("team.items.item4.name"),
		role: t("team.items.item4.role"),
		description: t("team.items.item4.description"),
		linkedin: config.public.linkedInURL,
		avatar: "",
	},
];
</script>

<template>
	<section
		id="team"
		class="py-16 md:py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden"
	>
		<div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-primary-500/5 blur-[120px] pointer-events-none" />

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div class="mb-12 md:mb-20 text-center">
				<h2 class="font-heading font-black text-3xl md:text-4xl mb-3 md:mb-4 text-white">
					{{ t('team.heading') }}
				</h2>
				<p class="text-secondary-400 font-mono text-sm md:text-base max-w-2xl mx-auto">
					{{ t('team.description') }}
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<div
					v-for="member in team"
					:key="member.id"
					class="group bg-neutral-950/80 p-6 md:p-8 rounded-2xl border border-white/5 transition-all duration-300 hover:border-primary-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col"
				>
					<div class="mb-6">
						<UAvatar
							:src="member.avatar"
							:alt="member.name"
							size="3xl"
							class="ring-2 ring-white/10 group-hover:ring-primary-500 transition-all duration-300 shadow-lg"
						/>
					</div>

					<h3 class="font-heading font-bold text-2xl text-white mb-1 group-hover:text-primary-400 transition-colors">
						{{ member.name }}
					</h3>
					<div class="font-mono text-xs text-primary-500 mb-4 tracking-wider uppercase">
						{{ member.role }}
					</div>

					<p class="text-secondary-400 text-sm mb-6 flex-grow leading-relaxed">
						{{ member.description }}
					</p>

					<UButton
						:to="member.linkedin"
						target="_blank"
						color="neutral"
						variant="ghost"
						class="mt-auto -ml-2 text-white hover:text-primary-500 hover:bg-primary-500/10 font-mono font-medium transition-colors inline-flex items-center w-fit"
					>
						{{ t('team.button') }}
						<UIcon
							name="i-heroicons-arrow-up-right"
							class="w-4 h-4 ml-1"
						/>
					</UButton>
				</div>
			</div>
		</div>
	</section>
</template>
