/**
 * 1. Clase abstracta Participante
 * Tanto un jugador individual como un equipo pueden inscribirse 
 * en un torneo, y ambos comparten características comunes: un 
 * identificador único, un nombre, un país de origen, la fecha 
 * de inscripción en el torneo y una puntuación acumulada. 
 * Implemente una clase abstracta Participante que incorpore 
 * dichas propiedades de forma privada, permitiendo acceder 
 * a ellas únicamente a través de getters y setters con las 
 * validaciones pertinentes (por ejemplo, la puntuación acumulada 
 * no puede ser negativa, el nombre no puede estar vacío, la 
 * fecha de inscripción no puede ser futura, etc.). Esta clase 
 * deberá definir además una propiedad abstracta perfil(): 
 * string que deberán implementar las clases hijas.
 */
export abstract class Participante {
	constructor(
		protected identificador: number, 
		protected nombre: string, 
		protected region: string,
		protected fechaInscripcion: Date,	
		protected puntuacion: number) {
			this.identificador = identificador;
			this.nombre = nombre;
			this.region = region;
			this.fechaInscripcion = fechaInscripcion;
			this.puntuacion = puntuacion;
		}

	getIdentificador(): number {
		return this.identificador;
	}

	getNombre(): string {
		return this.nombre;
	}

	getRegion(): string {
		return this.region;
	}

	getFechaInscripcion(): Date {
		return this.fechaInscripcion;
	}

	getPuntuacion(): number {
		return this.puntuacion;
	}

	setIdentificador(identificador: number): void {
		this.identificador = identificador;
	}

	setNombre(nombre: string): void {
		if (nombre === '') {
			throw new Error('El nombre no puede estar vacío.');
		}
		this.nombre = nombre;
	}

	setRegion(region: string): void {
		this.region = region;
	}

	setFechaInscripcion(fechaInscripcion: Date): void {
		const hoy = new Date();
		if (fechaInscripcion > hoy) {
			throw new Error('La fecha de inscripción no puede ser futura.');
		}
		this.fechaInscripcion = fechaInscripcion;
	}

	setPuntuacion(puntuacion: number): void {
		if (puntuacion < 0) {
			throw new Error('La puntuación acumulada no puede ser negativa.');
		}
		this.puntuacion = puntuacion;
	}

	abstract perfil(): string;
}