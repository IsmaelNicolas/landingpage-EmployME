<script>
	import fast from '../media/fast.svg';
	import flexible from '../media/flexible.svg';
	import safe from '../media/safe.svg';
	import Item from './Item.svelte';

	const fastDesc =
		'Los trabajos rápidos te permiten obtener resultados de manera eficiente y en un tiempo récord.';
	const flexibleDesc = 'La libertad de adaptar tus horarios y ubicación según tus necesidades.';
	const safeDesc =
		'Puedes confiar en un entorno laboral estable, donde tus derechos y bienestar son respetados.';
</script>

<div class="bg-white h-full p-20 flex flex-col md:flex-row justify-between pr-6 md:pr-36 pl-6 md:pl-36">
	<Item icon={fast} description={fastDesc} />
	<Item icon={flexible} description={flexibleDesc} />
	<Item icon={safe} description={safeDesc} />
</div>
