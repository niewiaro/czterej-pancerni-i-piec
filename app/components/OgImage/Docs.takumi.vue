<script setup>
defineProps({
	title: { type: String, required: false, default: "Documentation" },
	description: { type: String, required: false, default: "Comprehensive documentation for your project" },
	primaryColor: { type: String, required: false, default: "hsla(83.46, 55.19%, 47.25%, 0.3)" },
	primaryTextColor: { type: String, required: false, default: "hsl(85.45, 33%, 60.78%)" },
});
</script>

<template>
	<div
		class="w-full h-full relative flex flex-col overflow-hidden bg-neutral-950 text-white"
		:style="{
			backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, transparent)`,
		}"
	>
		<div class="flex flex-col w-full h-full px-20 py-16 relative justify-center items-center text-center">
			<div
				class="flex flex-col items-center gap-8 mb-14"
				style="width: 1000px; max-width: 1000px;"
			>
				<div
					class="text-[74px] font-extrabold"
					style="line-height: 1.1; letter-spacing: -0.04em; width: 100%;"
				>
					<span class="block w-full text-center">{{ title }}</span>
				</div>

				<div
					class="text-[30px] font-normal text-neutral-400"
					style="line-height: 1.3; width: 850px; letter-spacing: -0.01em;"
				>
					{{ description }}
				</div>
			</div>

			<div class="flex flex-col items-center gap-6">
				<div
					:style="{
						height: '4px',
						width: '80px',
						backgroundColor: primaryColor,
						borderRadius: '2px',
					}"
				/>
				<div
					class="text-[28px] font-bold font-mono"
					:style="{
						letterSpacing: '0.15em',
						color: primaryTextColor,
						opacity: 0.9,
					}"
				>
					&gt;_ hardware_team_ready
				</div>
			</div>
		</div>
	</div>
</template>
