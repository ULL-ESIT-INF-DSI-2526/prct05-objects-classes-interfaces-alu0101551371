import { Participante } from "./participante";
import { Jugador } from "./jugador";
import { Equipo } from "./equipo";

/**
 * Ejercicio: Implemente el conjunto de entidades necesarias 
 * para modelar el sistema de gestión de un torneo de 
 * videojuegos, siguiendo las especificaciones indicadas a 
 * continuación.
 * 
 * 3. Clase Torneo
 * 
 * La clase Torneo deberá gestionar tanto los participantes 
 * inscritos como las partidas disputadas. Concretamente deberá:
 * 
 * Mantener un registro de jugadores y equipos inscritos. El torneo 
 * tendrá un número máximo de plazas para jugadores individuales y 
 * otro para equipos, y no podrán inscribirse nuevos participantes 
 * si se han agotado las plazas del tipo correspondiente.
 * 
 * Gestionar las partidas: una partida enfrenta a dos participantes 
 * (ya sean jugadores, equipos, o uno de cada tipo) en una fecha y
 * hora concretas, y tiene un resultado asociado (identificador del 
 * ganador y puntuación obtenida por cada parte). Solo podrá 
 * registrarse una partida si ambos participantes están inscritos 
 * en el torneo.
 * 
 * Exponer un método que permita listar todos los jugadores o todos 
 * los equipos inscritos en el torneo.
 * 
 * Exponer un método que permita buscar un participante por su identificador
 * único o, en el caso de los jugadores, por su gamertag.
 * 
 * Exponer un método que permita filtrar participantes por rango competitivo.
 * 
 * Exponer un método que devuelva el ranking actualizado de participantes, 
 * ordenado de mayor a menor puntuación acumulada, indicando su posición 
 * en la clasificación.
 */

export interface Partida {
	participante1: Participante;
	participante2: Participante;
	fechaHora: Date;
	resultado: {
		ganadorId: number;
		puntuacionParticipante1: number;
		puntuacionParticipante2: number;
	};
}

export class Torneo {
	private jugadores: Jugador[] = [];
	private equipos: Equipo[] = [];
	private partidas: Partida[] = [];

	constructor() {}

	public inscribirJugador(jugador: Jugador): void {
		if (this.jugadores.length >= 2) {
			throw new Error('No se pueden inscribir más jugadores, plazas agotadas.');
		}
		this.jugadores.push(jugador);
	}

	public inscribirEquipo(equipo: Equipo): void {
		if (this.equipos.length >= 1) {
			throw new Error('No se pueden inscribir más equipos, plazas agotadas.');
		}
		this.equipos.push(equipo);
	}

	public registrarPartida(partida: Partida): void {
		const idsParticipantes: number[] = [partida.participante1.getIdentificador(), partida.participante2.getIdentificador()];
		const participantesInscritos: number[] = [...this.jugadores, ...this.equipos].map(p => p.getIdentificador());
		if (!idsParticipantes.every(id => participantesInscritos.includes(id))) {
			throw new Error('Ambos participantes deben estar inscritos en el torneo para registrar la partida.');
		}
		this.partidas.push(partida);
	}

	public listarJugadores(): Jugador[] {
		return this.jugadores;
	}

	public listarEquipos(): Equipo[] {
		return this.equipos;
	}

	public buscarParticipantePorId(id: number): Participante | undefined {
		return [...this.jugadores, ...this.equipos].find(p => p.getIdentificador() === id);
	}

	public buscarJugadorPorGamertag(gamertag: string): Jugador | undefined {
		return this.jugadores.find(j => j['gamertag'] === gamertag);
	}

	public filtrarParticipantesPorRango(rango: string): Participante[] {
		return this.jugadores.filter(j => j['rangoCompetitivo'] === rango);
	}

	public rankingParticipantes(): [number, Participante][] {
		const participantes: (Jugador|Equipo)[] = [...this.jugadores, ...this.equipos].sort((a, b) => b.getPuntuacion() - a.getPuntuacion());
		return participantes.map((p, index) => [index + 1, p]);
	}
}