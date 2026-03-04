export interface ElementoInformacion {
	titulo: string;
	autor: string[];
	palabrasClave: string[];
	resumen: string;
	fechaPublicacion: Date;
	paginas: number;
	editorial: string;
}

export class ElementoBibliografico implements ElementoInformacion {
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string
	) {}

	public getFormatoIEEE(): string {
		return `${this.autor.join(", ")}, "${this.titulo}," ${this.editorial}, ${this.fechaPublicacion.getFullYear()}.`;
	}
}

export class Revista extends ElementoBibliografico {
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string,
		public numeroRevista: number,
		public volumen: number
	) { super(titulo, autor, palabrasClave, resumen, fechaPublicacion, paginas, editorial); }

	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` Vol. ${this.volumen}, No. ${this.numeroRevista}.`;
	}
}

export class Congreso extends ElementoBibliografico {
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string,
		public nombreCongreso: string,
		public lugarCongreso: string
	) { super(titulo, autor, palabrasClave, resumen, fechaPublicacion, paginas, editorial); }

	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` presented at ${this.nombreCongreso}, ${this.lugarCongreso}.`;
	}
}

export class Libro extends ElementoBibliografico {
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string,
		public isbn: string
	) { super(titulo, autor, palabrasClave, resumen, fechaPublicacion, paginas, editorial); }

	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` ISBN: ${this.isbn}.`;
	}
}

export class TFG extends ElementoBibliografico {
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string,
		public tutor: string
	) { super(titulo, autor, palabrasClave, resumen, fechaPublicacion, paginas, editorial); }

	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` Tutor: ${this.tutor}.`;
	}
}

export class TFM extends ElementoBibliografico {
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string,
		public tutor: string
	) { super(titulo, autor, palabrasClave, resumen, fechaPublicacion, paginas, editorial); }

	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` Tutor: ${this.tutor}.`;
	}
}