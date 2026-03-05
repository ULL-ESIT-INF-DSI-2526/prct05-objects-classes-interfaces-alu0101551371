import { Chef } from "./chef";
import { Recetas } from "./recetario";

export class Sistema {
	private chefs: Chef[];

	constructor(chefs: Chef[]) {
		this.chefs = chefs;
	}

	public getChefs(): Chef[] {
		return this.chefs;
	}

	public setChefs(chefs: Chef[]): void {
		this.chefs = chefs;
	}

	public agregarChef(chef: Chef): void {
		this.chefs.push(chef);
	}

	public filtradoChefs(filtro: {nombre?: string, seguidores?: number, recetario?: Recetas[]}): Chef[] {
		let filtrado: Chef[] = [];
		filtrado = this.chefs.filter((chef) => {
			if (filtro.nombre && filtro.nombre != chef.nombre) return false;
			if (filtro.seguidores && filtro.seguidores != chef.seguidores) return false;
			if (filtro.recetario && !filtro.recetario.some(receta => chef.recetario.includes(receta))) return false;
		return true;
		});
		return filtrado;
	}

	public tablaChefs(): any[] {
		return this.chefs.flatMap(c =>
      c.recetario.flatMap(r =>
        r.pasos.map(p => ({
            chef: c.nombre,
            receta: r.nombre,
            anyo: r.anyoPublicacion,
            pasos_totales: r.getNumeroPasos(),
            tiempo_min: r.getDuracionTotal()[0],
            tiempo_max: r.getDuracionTotal()[1],
            paso: p.nombre,
            duracion: p.duracion,
            etiquetas: p.etiquetasClasificacion.join(", ")
        }))
      )
    );
	}

	public showChefs(): void {
		console.table(this.tablaChefs());
	}
}