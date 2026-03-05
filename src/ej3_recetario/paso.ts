export interface elementosPaso {
  nombre: string;
	duracion: number;
	etiquetasClasificacion: string[];
	numVecesCompletado: number;
	pasoOpcional?: boolean;
}

export class Paso implements elementosPaso {
	constructor(
		public nombre: string,
		public duracion: number,
		public etiquetasClasificacion: string[],
		public numVecesCompletado: number,
		public pasoOpcional?: boolean
	) {}
}