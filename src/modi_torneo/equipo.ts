import { Participante } from "./participante";

/**
 * 2. Clases Jugador y Equipo
 * Un jugador individual y un equipo también poseen 
 * características propias que los diferencian:
 * 
 * Un jugador cuenta con propiedades adicionales como 
 * su nombre de usuario o gamertag, su rango competitivo 
 * (por ejemplo: bronce, plata, oro, platino, diamante) 
 * y el número total de partidas jugadas a lo largo de 
 * su carrera.
 * 
 * Un equipo cuenta con propiedades adicionales como el 
 * nombre de la organización sponsor, una lista con los 
 * gamertags de sus integrantes (con un mínimo y un máximo 
 * de miembros configurable).
 * 
 * Defina ambas clases heredando de Participante, incorporando 
 * sus propiedades diferenciadoras e implementando la 
 * propiedad perfil(): string.
 */
export class Equipo extends Participante {
	constructor(
		identificador: number,
		nombre: string,
		region: string,
		fechaInscripcion: Date,
		puntuacion: number,
		private sponsor: string,
		private gamertags: string[],
		private minMaxMiembros: number[]) {
			super(identificador, nombre, region, fechaInscripcion, puntuacion);
			this.sponsor = sponsor;
			this.gamertags = gamertags;
			this.minMaxMiembros = minMaxMiembros;
		}

	perfil(): string {
		return `Equipo: ${this.nombre}, Sponsor: ${this.sponsor}, Miembros: ${this.gamertags.join(', ')}`;
	}
}