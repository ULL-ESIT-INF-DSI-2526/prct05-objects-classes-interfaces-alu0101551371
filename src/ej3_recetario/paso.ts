export interface elementosPaso {
  nombre: string;
	duracion: number;
	etiquetasClasificacion: string[];
	numVecesCompletado: number;
	pasoOpcional?: boolean;
}

export class Paso implements elementosPaso {
	/**
	 * Crear una nueva instancia de un Paso de una receta
	 * @param nombre Nombre descriptivo del paso
	 * @param duracion Duración en minutos del paso
	 * @param etiquetasClasificacion Lista de etiquetas que clasifican el tipo de paso
	 * @param numVecesCompletado Número de veces que el paso ha sido completado
	 * @param pasoOpcional Indica si el paso es opcional en la receta
	 */
	constructor(
		public nombre: string,
		public duracion: number,
		public etiquetasClasificacion: string[],
		public numVecesCompletado: number,
		public pasoOpcional?: boolean
	) {}
}