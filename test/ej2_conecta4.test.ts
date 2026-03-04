import { describe, expect, test, beforeEach } from "vitest";
import { Conecta4 } from "../src/ej2_conecta4/conecta4";
import { Jugador, J } from "../src/ej2_conecta4/jugador";

describe("Conecta4", () => {
	let tablero: Conecta4;
	
	beforeEach(() => {
		tablero = new Conecta4();
	});

	test("Tablero se inicializa correctamente", () => {
		expect(tablero.tablero.length).toBe(6);
		tablero.tablero.forEach(row => {
			expect(row.length).toBe(7);
			row.forEach(cell => expect(cell).toBe('⚪'));
		});
	});

	test("Jugador 1 es el primer turno", () => {
		expect(tablero.turno).toBe(tablero.player1);
	});

	test("Soltar ficha en columna válida", () => {
		const result = tablero.soltarFicha(0);
		expect(result).toBe(true);
		expect(tablero.tablero[5][0]).toBe('🔴');
	});

	test("Soltar ficha en columna completa", () => {
		for(let i = 0; i < 6; i++) {
			tablero.soltarFicha(1);
		}
		const result = tablero.soltarFicha(1);
		expect(result).toBe(false);
	});

	test("Verificar ganador horizontal", () => {
		tablero.tablero[5][0] = '🔴';
		tablero.tablero[5][1] = '🔴';
		tablero.tablero[5][2] = '🔴';
		tablero.tablero[5][3] = '🔴';
		expect(tablero.verificarGanador()).toBe(true);
	});

	test("Verificar ganador vertical", () => {
		tablero.tablero[5][0] = '🔴';
		tablero.tablero[4][0] = '🔴';
		tablero.tablero[3][0] = '🔴';
		tablero.tablero[2][0] = '🔴';
		expect(tablero.verificarGanador()).toBe(true);
	});

	test("Verificar ganador diagonal (arriba-izquierda a abajo-derecha)", () => {
		tablero.tablero[5][0] = '🔴';
		tablero.tablero[4][1] = '🔴';
		tablero.tablero[3][2] = '🔴';
		tablero.tablero[2][3] = '🔴';
		expect(tablero.verificarGanador()).toBe(true);
	});

	test("Verificar ganador diagonal (abajo-izquierda a arriba-derecha)", () => {
		tablero.tablero[2][0] = '🔴';
		tablero.tablero[3][1] = '🔴';
		tablero.tablero[4][2] = '🔴';
		tablero.tablero[5][3] = '🔴';
		expect(tablero.verificarGanador()).toBe(true);
	});
});

describe("Jugador", () => {
	let player1: Jugador;
	let player2: Jugador;

	beforeEach(() => {
		player1 = new Jugador(1, '🔴', 21);
		player2 = new Jugador(2, '🟡', 21);
	});

	test("Jugador 1 tiene el color correcto", () => {
		expect(player1.color).toBe('🔴');
	});

	test("Jugador 2 tiene el color correcto", () => {
		expect(player2.color).toBe('🟡');
	});

	test("Jugador 1 puede soltar una ficha", () => {
		const result = player1.soltarFicha(0);
		expect(result).toBe(true);
		expect(player1.numFichas).toBe(20);
	});

	test("Jugador 2 puede soltar una ficha", () => {
		const result = player2.soltarFicha(0);
		expect(result).toBe(true);
		expect(player2.numFichas).toBe(20);
	});

	test("Jugador no puede soltar ficha si no tiene fichas", () => {
		player1.numFichas = 0;
		const result = player1.soltarFicha(0);
		expect(result).toBe(false);
		expect(player1.numFichas).toBe(0);
	});
});
