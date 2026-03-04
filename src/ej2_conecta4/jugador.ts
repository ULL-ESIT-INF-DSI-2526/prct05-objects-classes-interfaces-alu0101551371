export interface J {
	id: number;
	color: string;
	numFichas: number;
	soltarFicha(columna: number): boolean;
}

export class Jugador implements J {
  constructor(public id: number, public color: string, public numFichas: number = 21) {
		this.id = id;
		this.color = color;
	}

	soltarFicha(columna: number): boolean {
		if (this.numFichas > 0) {
			this.numFichas--;
			return true;
		}
		return false;
	}
}