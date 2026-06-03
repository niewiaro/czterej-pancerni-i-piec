<script setup lang="ts">
import { ref, onMounted } from "vue";

const { t } = useI18n();

const statsRef = ref<HTMLElement | null>(null);

const goldMedals = ref(0);
const thirdPlaces = ref(0);
const fourthPlaces = ref(0);

const animateValue = (refVar: { value: number }, target: number, duration: number) => {
	let startTimestamp: number | null = null;
	const step = (timestamp: number) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);

		const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
		refVar.value = Math.floor(easeOut * target);

		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
		else {
			refVar.value = target;
		}
	};
	window.requestAnimationFrame(step);
};

onMounted(() => {
	const observer = new IntersectionObserver((entries) => {
		const entry = entries[0];
		if (entry?.isIntersecting) {
			animateValue(goldMedals, 2, 1000);
			animateValue(thirdPlaces, 2, 1000);
			animateValue(fourthPlaces, 1, 1000);

			observer.disconnect();
		}
	}, { threshold: 0.5 });

	if (statsRef.value) {
		observer.observe(statsRef.value);
	}
});
</script>

<template>
	<section
		id="stats"
		ref="statsRef"
		class="py-16 md:py-20 bg-neutral-950/50 border-y border-white/5"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-0 text-center">
				<div class="border-r border-white/10 flex flex-col justify-center">
					<div class="font-heading font-black text-5xl md:text-6xl text-white mb-2">
						{{ goldMedals }}
					</div>
					<div class="font-mono text-primary-500 text-xs sm:text-sm uppercase tracking-widest">
						{{ t('stats.goldMedals') }}
					</div>
				</div>

				<div class="border-r-0 md:border-r border-white/10 flex flex-col justify-center">
					<div class="font-heading font-black text-5xl md:text-6xl text-white mb-2">
						{{ thirdPlaces }}
					</div>
					<div class="font-mono text-secondary-400 text-xs sm:text-sm uppercase tracking-widest">
						{{ t('stats.thirdPlaces') }}
					</div>
				</div>

				<div class="border-r border-white/10 flex flex-col justify-center">
					<div class="font-heading font-black text-5xl md:text-6xl text-white mb-2">
						{{ fourthPlaces }}
					</div>
					<div class="font-mono text-secondary-400 text-xs sm:text-sm uppercase tracking-widest">
						{{ t('stats.fourthPlaces') }}
					</div>
				</div>

				<div class="flex flex-col justify-center items-center">
					<div class="h-[48px] md:h-[60px] flex items-center justify-center mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-14 h-14 text-primary-500 drop-shadow-[0_0_10px_rgba(255,87,34,0.6)] infinity-svg"
						>
							<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
						</svg>
					</div>
					<div class="font-mono text-secondary-400 text-xs sm:text-sm uppercase tracking-widest">
						{{ t('stats.burnedLEDs') }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.infinity-svg path {
	stroke-dasharray: 60;
	stroke-dashoffset: 60;
	animation: draw-loop 3s linear infinite;
}

@keyframes draw-loop {
	0% { stroke-dashoffset: 60; }
	50% { stroke-dashoffset: 0; }
	100% { stroke-dashoffset: -60; }
}
</style>
