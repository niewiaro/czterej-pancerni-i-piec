<script setup lang="ts">
const config = useRuntimeConfig();
const { t } = useI18n();
</script>

<template>
	<section
		id="about"
		class="relative pt-20 pb-16 lg:pt-30 lg:pb-32 overflow-hidden bg-grid"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div class="inline-block bg-primary-500/10 border border-primary-500/30 text-primary-500 font-mono text-[10px] sm:text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
				{{ t('hero.badge') }}
			</div>

			<h1 class="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none md:leading-tight mb-6">
				{{ t('hero.titleLine1') }} <br>
				<span class="text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-orange-400 text-glow-primary">
					{{ t('hero.titleLine2') }}
				</span>
			</h1>

			<p class="text-secondary-400 text-base sm:text-lg md:text-xl max-w-2xl mb-8 md:mb-10 border-l-2 md:border-l-4 border-primary-500 pl-3 md:pl-4">
				{{ t('hero.paragraph') }}
			</p>

			<div class="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
				<UButton
					to="#achievements"
					color="primary"
					variant="solid"
					size="xl"
					class="w-full sm:w-auto justify-center font-mono font-bold text-white dark:text-white glow-primary transition-transform hover:-translate-y-1"
				>
					{{ t('hero.projects') }}
				</UButton>

				<UButton
					:to="config.public.gitURL"
					target="_blank"
					color="neutral"
					variant="outline"
					size="xl"
					class="w-full sm:w-auto justify-center font-mono border-white/20 text-white hover:bg-neutral-800 transition-transform hover:-translate-y-1"
				>
					{{ t('hero.github') }}
				</UButton>
			</div>
		</div>

		<div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-1/3 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary-500 rounded-full blur-[100px] md:blur-[150px] opacity-20 pointer-events-none" />
	</section>
</template>
