<script lang="ts">
	export let icon: string;
	export let description: string;
</script>

<div class="flex flex-col items-center md:mr-12 mb-6 md:mb-0">
	<img src={icon} alt="icon" class="w-12 h-12 md:w-24 md:h-24" />
	<p class="text-lg md:text-2xl text-center text-black mt-4 md:mt-10">{description}</p>
</div>
