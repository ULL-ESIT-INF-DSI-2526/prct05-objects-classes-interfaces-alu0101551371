import { Jugador } from './jugador';

export class Conecta4 {
  public tablero: string[][] = [];
  public player1: Jugador;
  public player2: Jugador;
	public turno: Jugador;

  /**
   * Inicializa un nuevo juego de Conecta4 con el tablero, jugadores y turno
   */
  constructor() {
    this.crearTablero();
    this.player1 = new Jugador(1, '🔴', 21);
    this.player2 = new Jugador(2, '🟡', 21);
    this.turno = this.player1;
  }

  /**
   * Crea e inicializa el tablero de juego de 6 filas x 7 columnas
   */
	public crearTablero(): void {
    this.tablero = new Array(6);
    for (let i: number = 0; i < 6; i++) {
      this.tablero[i] = new Array(7).fill('⚪');
    }
  }

  /**
   * Imprime el estado actual del tablero en la consola
   */
  public printTablero(): void {
    this.tablero.map((row: string[]) => console.log(row.join(' ')));
  }

  /**
   * Suelta una ficha del jugador actual en la columna especificada
   * @param columna Número de columna (0-6) donde se desea soltar la ficha
   * @returns true si la ficha fue colocada exitosamente, false si la columna es inválida o está llena
   */
  public soltarFicha(columna: number): boolean {
    if(columna < 0 || columna > 6) {
      console.log('Columna no válida');
      return false;
    }
        
    for (let i: number = 5; i >= 0; i--) {
      if(this.tablero[i][columna] === '⚪') {
        this.tablero[i][columna] = this.turno.color;
        // Cambiar el turno al otro jugador
        this.turno = this.turno === this.player1 ? this.player2 : this.player1;
        return true;
      }
    }
        
    console.log('Columna completa');
    return false;
  }

  /**
   * Verifica si hay un ganador en el tablero actual
   * @returns true si hay cuatro fichas consecutivas en fila, columna o diagonal, false en caso contrario
   */
	public verificarGanador(): boolean {
    // Verificar filas
    for (let i: number = 0; i < 6; i++) {
      for (let j: number = 0; j < 4; j++) {
        if (this.tablero[i][j] !== '⚪' &&
            this.tablero[i][j] === this.tablero[i][j + 1] &&
            this.tablero[i][j] === this.tablero[i][j + 2] &&
            this.tablero[i][j] === this.tablero[i][j + 3]) {
          return true;
        }
      }
    }

    // Verificar columnas
    for (let j: number = 0; j < 7; j++) {
      for (let i: number = 0; i < 3; i++) {
        if (this.tablero[i][j] !== '⚪' &&
            this.tablero[i][j] === this.tablero[i + 1][j] &&
            this.tablero[i][j] === this.tablero[i + 2][j] &&
            this.tablero[i][j] === this.tablero[i + 3][j]) {
          return true;
        }
      }
    }

    // Verificar diagonales (arriba-izquierda a abajo-derecha)
    for (let i: number = 0; i < 3; i++) {
      for (let j: number = 0; j < 4; j++) {
        if (this.tablero[i][j] !== '⚪' &&
            this.tablero[i][j] === this.tablero[i + 1][j + 1] &&
            this.tablero[i][j] === this.tablero[i + 2][j + 2] &&
            this.tablero[i][j] === this.tablero[i + 3][j + 3]) {
          return true;
        }
      }
    }

    // Verificar diagonales (abajo-izquierda a arriba-derecha)
    for (let i: number = 3; i < 6; i++) {
      for (let j: number = 0; j < 4; j++) {
        if (this.tablero[i][j] !== '⚪' &&
            this.tablero[i][j] === this.tablero[i - 1][j + 1] &&
            this.tablero[i][j] === this.tablero[i - 2][j + 2] &&
            this.tablero[i][j] === this.tablero[i - 3][j + 3]) {
          return true;
        }
      }
    }

    return false;
  }
}