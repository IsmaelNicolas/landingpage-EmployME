<script>
	import image from '../media/image.jpg';
	import question from '../media/question.svg';
</script>

<div
	class="flex flex-col md:flex-row items-center justify-center md:p-10 pt-10 bg-cover bg-center pb-10"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('{image}')"
>
	<div class="w-1/5 h-1/5 md:w-1/5 md:h-1/5 md:mr-20">
		<img
			src={question}
			alt="icon"
			class="w=full object-contain md:mr-20 invert"
		/>
	</div>

	<div class="text-white mt-4 md:mt-0 md:ml-10 md:w-1/2 w-4/5">
		<h3 class="text-[#FF1053] text-2xl md:text-5xl mb-4 font-bold italic">
			¿Cómo conseguir empleo?
		</h3>
		<ul class="list-decimal md:pl-6 text-lg">
			<li class="mb-2">Regístrate: Crea una cuenta en la plataforma.</li>
			<li class="mb-2">
				Completa tu perfil: Proporciona información sobre ti, tu experiencia y habilidades.
			</li>
			<li class="mb-2">
				Publica o Solicita un empleo: Publica oportunidades laborales o busca empleo en la
				plataforma.
			</li>
			<li class="mb-2">
				Comunícate: Interactúa con empleadores y candidatos a través de mensajes y entrevistas.
			</li>
			<li>
				Vuelve a empezar: Siempre puedes repetir el proceso para encontrar nuevas oportunidades
				laborales.
			</li>
		</ul>
	</div>
</div>
