import { expect, describe, test, beforeEach } from "vitest";
import { Torneo } from '../src/modi_torneo/torneo';
import { Jugador } from '../src/modi_torneo/jugador';
import { Equipo } from '../src/modi_torneo/equipo';

describe("Torneo", () => {
	let torneo: Torneo;
	let jugador1: Jugador;
	let jugador2: Jugador;
	let equipo1: Equipo;
	let equipo2: Equipo;

	beforeEach(() => {
		torneo = new Torneo();
		jugador1 = new Jugador(1, "Lucas", "SPAIN", new Date("2023-01-01"), 1500, "LucasGT", "ORO", 20);
		jugador2 = new Jugador(2, "Manolo", "USA", new Date("2022-01-01"), 1200, "ManoloGT", "PLATA", 15);
		equipo1 = new Equipo(3, "T1", "KOREA", new Date("2026-02-06"), 1400, "Los Iluminati", ["Faker", "Doran", "Oner", "Peyz", "Keria"], [5, 6]);
		equipo2 = new Equipo(4, "G2", "EUROPE", new Date("2025-03-10"), 1300, "Los Oscuros", ["Caps", "Jankos", "Perkz", "Mikyx", "Wunder"], [5, 6]);
	});

	test("Inscripción de jugadores sin error", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirJugador(jugador2);
		expect(torneo.listarJugadores()).toEqual([jugador1, jugador2]);
	});

	test("Inscripción de equipos sin error", () => {
		torneo.inscribirEquipo(equipo1);
		expect(torneo.listarEquipos()).toEqual([equipo1]);
	});

	test("Inscripción de jugadores con error", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirJugador(jugador2);
		expect(() => torneo.inscribirJugador(new Jugador(5, "Pepe", "MEXICO", new Date("2024-01-01"), 1000, "PepeGT", "BRONCE", 10))).toThrowError('No se pueden inscribir más jugadores, plazas agotadas.');
	});

	test("Inscripción de equipos con error", () => {
		torneo.inscribirEquipo(equipo1);
		expect(() => torneo.inscribirEquipo(equipo2)).toThrowError('No se pueden inscribir más equipos, plazas agotadas.');
	});

	test("Registro de partida", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirEquipo(equipo1);
		const partida = {
			participante1: jugador1,
			participante2: equipo1,
			fechaHora: new Date("2024-06-01T15:00:00"),
			resultado: {
				ganadorId: 1,
				puntuacionParticipante1: 10,
				puntuacionParticipante2: 5
			}
		};
		torneo.registrarPartida(partida);
		expect(torneo['partidas']).toEqual([partida]);
	});

	test("Registro de partida con error", () => {
		const partida = {
			participante1: jugador1,
			participante2: equipo1,
			fechaHora: new Date("2024-06-01T15:00:00"),
			resultado: {
				ganadorId: 1,
				puntuacionParticipante1: 10,
				puntuacionParticipante2: 5
			}
		};
		expect(() => torneo.registrarPartida(partida)).toThrowError('Ambos participantes deben estar inscritos en el torneo para registrar la partida.');
	});

	test("Listar jugadores", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirJugador(jugador2);

		expect(torneo.listarJugadores()).toEqual([jugador1, jugador2]);
	});

	test("Listar equipos", () => {
		torneo.inscribirEquipo(equipo1);

		expect(torneo.listarEquipos()).toEqual([equipo1]);
	});

	test("Buscar participante por ID", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirEquipo(equipo1);

		expect(torneo.buscarParticipantePorId(1)).toEqual(jugador1);
		expect(torneo.buscarParticipantePorId(3)).toEqual(equipo1);
		expect(torneo.buscarParticipantePorId(2)).toBeUndefined();
	});

	test("Buscar jugador por gamertag", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirJugador(jugador2);

		expect(torneo.buscarJugadorPorGamertag("LucasGT")).toEqual(jugador1);
		expect(torneo.buscarJugadorPorGamertag("ManoloGT")).toEqual(jugador2);
		expect(torneo.buscarJugadorPorGamertag("PepeGT")).toBeUndefined();
	});

	test("Filtrar participantes por rango", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirJugador(jugador2);

		expect(torneo.filtrarParticipantesPorRango("ORO")).toEqual([jugador1]);
		expect(torneo.filtrarParticipantesPorRango("PLATA")).toEqual([jugador2]);
		expect(torneo.filtrarParticipantesPorRango("BRONCE")).toEqual([]);
	});

	test("Ranking de participantes", () => {
		torneo.inscribirJugador(jugador1);
		torneo.inscribirJugador(jugador2);
		torneo.inscribirEquipo(equipo1);

		expect(torneo.rankingParticipantes()).toEqual([[1, jugador1], [2, equipo1], [3, jugador2]]);
	});
});