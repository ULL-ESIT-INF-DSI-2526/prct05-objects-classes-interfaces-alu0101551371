import { Paso } from "./paso";

export interface elementosRecetario {
	nombre: string;
	anyoPublicacion: number;
	pasos: Paso[];
}

export class Recetas implements elementosRecetario {
	constructor(
		public nombre: string,
		public anyoPublicacion: number,
		public pasos: Paso[]
	) {}

	public getNumeroPasos(): number {
		return this.pasos.length;
	}

	public getDuracionTotal(): number[] {
		let duracionMinima = 0;
		let duracionMaxima = 0;
		this.pasos.forEach((paso) => {
			duracionMinima += paso.duracion;
			if (paso.pasoOpcional) {
				duracionMaxima += paso.duracion;
			}
		});
		return [duracionMinima, duracionMinima + duracionMaxima];
	}

	public filtradoPasos(filtro: {nombre?: string, duracion?: number, etiquetasClasificacion?: string, numVecesCompletado?: number, pasoOpcional?: boolean}): Paso[] {
		let filtrado: Paso[] = [];
		filtrado = this.pasos.filter((paso) => {
			if (filtro.nombre && filtro.nombre != paso.nombre) return false;
      		if (filtro.duracion && filtro.duracion != paso.duracion) return false;
     	 	if (filtro.etiquetasClasificacion && !paso.etiquetasClasificacion.includes(filtro.etiquetasClasificacion)) return false;
      		if (filtro.numVecesCompletado && filtro.numVecesCompletado != paso.numVecesCompletado) return false;
      		if (filtro.pasoOpcional != undefined && filtro.pasoOpcional != paso.pasoOpcional) return false;
      		return true;
		});
		return filtrado;
	}
}