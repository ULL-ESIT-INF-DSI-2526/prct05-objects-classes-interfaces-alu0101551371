import { Recetas } from "./recetario";

export interface elementosChef {
	nombre: string;
	seguidores: number;
	recetario: Recetas[];
}

export class Chef implements elementosChef {
	constructor(
		public nombre: string,
		public seguidores: number,
		public recetario: Recetas[]
	) {}

	public filtradoRecetario(filtro: {nombre?: string, anyoPublicacion?: number}): Recetas[] {
		let filtrado: Recetas[] = [];
		filtrado = this.recetario.filter((receta) => {
			if (filtro.nombre && filtro.nombre != receta.nombre) return false;
	  	if (filtro.anyoPublicacion && filtro.anyoPublicacion != receta.anyoPublicacion) return false;
	  	return true;
		});
		return filtrado;
	}
}