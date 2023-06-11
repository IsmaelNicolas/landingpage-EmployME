<script>
	import Logo from '../media/employme.svg';
</script>

<div
	class=" bg-white md:p-5 md:pl-20 md:pr-20 flex justify-between items-center md:flex-row flex-col-reverse"
>
	<div class=" text-gray-800 md:py-6 w-9/12 md:w-1/3 mt-5 md:mr-16">
		<div class="container mx-auto md:px-4">
			<h2 class="text-2xl font-bold mb-4 text-center">Sobre Nosotros</h2>
			<p class="text-lg text-center">
				Buscamos brindar a la sociedad una nueva forma de encontrar empleos y que te encuentren las
				personas.
			</p>
		</div>
	</div>

	<div class=" flex flex-row md:w-auto justify-center items-center mt-5">
		<img src={Logo} alt="" class="w-1/4 md:w-1/5 h-full" />
		<p class="text-black text-2xl ml-4"><a href="/">Employ<span class="font-bold">ME</span></a></p>
	</div>

	<div class="w-1/3 flex justify-center">
		<button
			class="md:w-1/3 font-semibold bg-[#3DDC97] text-[#2B4162] px-5 py-3 cd:ml-16 mt-5 mb-5 rounded-full text-xl md:text-xl hover:scale-105 hover:shadow-xl"
		>
			Registrate
		</button>
	</div>
</div>
