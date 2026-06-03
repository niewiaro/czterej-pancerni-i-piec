<script setup lang="ts">
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";

const { t } = useI18n();

// Rejestrujemy moduły dla wykresu słupkowego
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Chronologiczna lista hackathonów
const labels = ["RCDC", "Mechaton AGH", "BEST Hacking League", "Hacknarök"];

// Mapowanie Waszych zdobyczy na wykres (każda tablica odpowiada hackathonom z labels)
const chartData = ref({
	labels: labels,
	datasets: [
		{
			label: t("loot.datasets.powerbanks"),
			backgroundColor: "#ff5722", // Nasz Furnace Primary
			data: [0, 1, 1, 1], // RCDC: 0, Mechaton: 1, BEST: 1, Hacknarok: 1
		},
		{
			label: t("loot.datasets.legos"),
			backgroundColor: "#eab308", // Klasyczny żółty LEGO
			data: [1, 0, 0, 0], // RCDC: 1, reszta: 0
		},
		{
			label: t("loot.datasets.headphones"),
			backgroundColor: "#95a5a6", // Steel
			data: [0, 1, 0, 0],
		},
		{
			label: t("loot.datasets.keyboards"),
			backgroundColor: "#ffffff", // Platinum
			data: [0, 1, 0, 0],
		},
		{
			label: t("loot.datasets.mice"),
			backgroundColor: "#4b5563", // Ciemny szary
			data: [0, 1, 0, 0],
		},
	],
});

// Konfiguracja wyglądu wykresu
const chartOptions: ChartOptions<"bar"> = {
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			stacked: true, // Kumulujemy słupki jeden na drugim
			grid: {
				display: false,
			},
			ticks: {
				color: "#95a5a6",
				font: { family: "'JetBrains Mono', monospace" },
			},
		},
		y: {
			stacked: true,
			beginAtZero: true,
			grid: {
				color: "rgba(255, 255, 255, 0.05)",
			},
			ticks: {
				stepSize: 1, // Krok co 1, bo nie wygrywa się "pół myszki"
				color: "#95a5a6",
				font: { family: "'JetBrains Mono', monospace" },
			},
		},
	},
	plugins: {
		legend: {
			position: "bottom",
			labels: {
				color: "#ffffff",
				font: { family: "'JetBrains Mono', monospace" },
				padding: 20,
				usePointStyle: true, // Zamienia kwadraty na ładniejsze kropki w legendzie
			},
		},
		tooltip: {
			mode: "index",
			intersect: false,
			backgroundColor: "rgba(26, 26, 29, 0.9)",
			titleFont: { family: "'JetBrains Mono', monospace" },
			bodyFont: { family: "'JetBrains Mono', monospace" },
			borderColor: "#ff5722",
			borderWidth: 1,
		},
	},
};
</script>

<template>
	<section
		id="loot"
		class="py-16 md:py-24 bg-neutral-900 border-t border-white/5 relative overflow-hidden"
	>
		<div class="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<div class="flex flex-col lg:flex-row gap-12 items-center">
				<div class="lg:w-1/3">
					<div class="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 text-primary-500 font-mono text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
						{{ t('loot.badge') }}
					</div>

					<h2 class="font-heading font-black text-3xl md:text-4xl mb-4 text-white">
						{{ t('loot.titleLine1') }} <br>
						{{ t('loot.titleLine2') }}
					</h2>
					<p class="text-secondary-400 font-mono text-sm leading-relaxed mb-6">
						{{ t('loot.paragraph') }}
					</p>

					<div class="border-l-2 border-primary-500 pl-4 py-2 mt-8">
						<div class="text-xs text-secondary-400 font-mono uppercase tracking-wider">
							{{ t('loot.totalLabel') }}
						</div>
						<div class="text-4xl font-heading font-black text-primary-500">
							{{ t('loot.totalCount') }}
						</div>
					</div>
				</div>

				<div class="lg:w-2/3 w-full">
					<div class="bg-neutral-950 border border-white/10 rounded-xl p-4 md:p-6 shadow-2xl relative">
						<div class="font-mono text-xs text-secondary-400 mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
							<span>{{ t('loot.timespanHeader') }}</span>
							<UIcon
								name="i-heroicons-chart-bar"
								class="w-4 h-4 text-primary-500"
							/>
						</div>

						<div class="h-[300px] md:h-[400px] w-full">
							<ClientOnly>
								<Bar
									:data="chartData"
									:options="chartOptions"
								/>

								<template #fallback>
									<div class="w-full h-full flex items-center justify-center font-mono text-secondary-400 animate-pulse">
										{{ t('loot.loading') }}
									</div>
								</template>
							</ClientOnly>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
