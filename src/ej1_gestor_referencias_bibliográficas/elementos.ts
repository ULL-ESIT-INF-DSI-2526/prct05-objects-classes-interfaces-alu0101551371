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
	/**
	 * Crear una nueva instancia de ElementoBibliografico
	 * @param titulo Título del elemento bibliográfico
	 * @param autor Lista de autores del documento
	 * @param palabrasClave Palabras clave relacionadas con el contenido
	 * @param resumen Resumen o descripción breve del elemento
	 * @param fechaPublicacion Fecha de publicación del elemento
	 * @param paginas Número total de páginas del documento
	 * @param editorial Editorial o casa publicadora
	 */
	constructor(
		public titulo: string,
		public autor: string[],
		public palabrasClave: string[],
		public resumen: string,
		public fechaPublicacion: Date,
		public paginas: number,
		public editorial: string
	) {}

	/**
	 * Obtiene la representación del elemento en formato IEEE
	 * @returns Cadena formateada según el estándar IEEE
	 */
	public getFormatoIEEE(): string {
		return `${this.autor.join(", ")}, "${this.titulo}," ${this.editorial}, ${this.fechaPublicacion.getFullYear()}.`;
	}
}

export class Revista extends ElementoBibliografico {
	/**
	 * Crear una nueva instancia de una Revista
	 * @param titulo Título del artículo o revista
	 * @param autor Lista de autores
	 * @param palabrasClave Palabras clave del artículo
	 * @param resumen Resumen del contenido
	 * @param fechaPublicacion Fecha de publicación
	 * @param paginas Número de páginas
	 * @param editorial Editorial de la revista
	 * @param numeroRevista Número de edición de la revista
	 * @param volumen Volumen de la revista
	 */
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

	/**
	 * Obtiene la representación de la revista en formato IEEE
	 * @returns Cadena formateada según el estándar IEEE con volumen y número
	 */
	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` Vol. ${this.volumen}, No. ${this.numeroRevista}.`;
	}
}

export class Congreso extends ElementoBibliografico {
	/**
	 * Crear una nueva instancia de un artículo de Congreso
	 * @param titulo Título del artículo presentado
	 * @param autor Lista de autores
	 * @param palabrasClave Palabras clave del trabajo
	 * @param resumen Resumen del artículo
	 * @param fechaPublicacion Fecha de publicación/presentación
	 * @param paginas Número de páginas
	 * @param editorial Publicador del congreso
	 * @param nombreCongreso Nombre del congreso donde fue presentado
	 * @param lugarCongreso Lugar donde se realizó el congreso
	 */
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

	/**
	 * Obtiene la representación del congreso en formato IEEE
	 * @returns Cadena formateada según el estándar IEEE con nombre y lugar del congreso
	 */
	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` presented at ${this.nombreCongreso}, ${this.lugarCongreso}.`;
	}
}

export class Libro extends ElementoBibliografico {
	/**
	 * Crear una nueva instancia de un Libro
	 * @param titulo Título del libro
	 * @param autor Lista de autores del libro
	 * @param palabrasClave Palabras clave relacionadas al contenido
	 * @param resumen Resumen o sinopsis del libro
	 * @param fechaPublicacion Fecha de publicación
	 * @param paginas Número total de páginas
	 * @param editorial Editorial del libro
	 * @param isbn Código ISBN del libro
	 */
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

	/**
	 * Obtiene la representación del libro en formato IEEE
	 * @returns Cadena formateada según el estándar IEEE con ISBN
	 */
	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` ISBN: ${this.isbn}.`;
	}
}

export class TFG extends ElementoBibliografico {
	/**
	 * Crear una nueva instancia de un Trabajo de Fin de Grado (TFG)
	 * @param titulo Título del trabajo de fin de grado
	 * @param autor Lista de autores/estudiantes
	 * @param palabrasClave Palabras clave del trabajo
	 * @param resumen Resumen del TFG
	 * @param fechaPublicacion Fecha de defensa/presentación
	 * @param paginas Número de páginas del documento
	 * @param editorial Universidad o institución
	 * @param tutor Nombre del tutor del TFG
	 */
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

	/**
	 * Obtiene la representación del TFG en formato IEEE
	 * @returns Cadena formateada según el estándar IEEE con tutor
	 */
	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` Tutor: ${this.tutor}.`;
	}
}

export class TFM extends ElementoBibliografico {
	/**
	 * Crear una nueva instancia de un Trabajo de Fin de Máster (TFM)
	 * @param titulo Título del trabajo de fin de máster
	 * @param autor Lista de autores/estudiantes
	 * @param palabrasClave Palabras clave del trabajo
	 * @param resumen Resumen del TFM
	 * @param fechaPublicacion Fecha de defensa/presentación
	 * @param paginas Número de páginas del documento
	 * @param editorial Universidad o institución
	 * @param tutor Nombre del tutor del TFM
	 */
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

	/**
	 * Obtiene la representación del TFM en formato IEEE
	 * @returns Cadena formateada según el estándar IEEE con tutor
	 */
	public getFormatoIEEE(): string {
		return super.getFormatoIEEE() + ` Tutor: ${this.tutor}.`;
	}
}