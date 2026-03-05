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
export class Jugador extends Participante {
	constructor(
		identificador: number, 
		nombre: string, 
		region: string, 
		fechaInscripcion: Date, 
		puntuacion: number,
		private gamertag: string,
		private rangoCompetitivo: string,
		private partidasJugadas: number) {
			super(identificador, nombre, region, fechaInscripcion, puntuacion);
			this.gamertag = gamertag;
			this.rangoCompetitivo = rangoCompetitivo;
			this.partidasJugadas = partidasJugadas;
	}

	perfil(): string {
		return `Jugador: ${this.nombre}, Gamertag: ${this.gamertag}, Rango: ${this.rangoCompetitivo}, Partidas Jugadas: ${this.partidasJugadas}`;
	}
}