<script>
	import Footer from '../components/Footer.svelte';
	import FrontCover from '../components/FrontCover.svelte';
	import Info from '../components/Info.svelte';
	import Process from '../components/Process.svelte';
</script>

<div class="h-screen ">
	<div  class="h-[65%]">
		<FrontCover />
	</div>
	<div class="h-fit">
		<Info/>
	</div>
	<div class="h-fit">
		<Process/>
	</div>
	<div class="h-fit">
		<Footer/>
	</div>
</div>
