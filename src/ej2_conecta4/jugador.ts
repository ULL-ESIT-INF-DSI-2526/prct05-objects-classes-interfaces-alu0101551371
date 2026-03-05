export interface J {
  id: number;
  color: string;
  numFichas: number;
  soltarFicha(columna: number): boolean;
}

export class Jugador implements J {
  /**
   * Crear una nueva instancia de un Jugador de Conecta4
   * @param id Identificador único del jugador (1 o 2)
   * @param color Emoji o símbolo que representa las fichas del jugador
   * @param numFichas Número inicial de fichas disponibles para el jugador (por defecto 21)
   */
  constructor(
    public id: number,
    public color: string,
    public numFichas: number = 21,
  ) {
    this.id = id;
    this.color = color;
  }

  /**
   * Intenta soltar una ficha del jugador
   * @param columna Número de columna donde se intenta soltar la ficha
   * @returns true si el jugador tenía fichas disponibles, false si se han agotado
   */
  soltarFicha(): boolean {
    if (this.numFichas > 0) {
      this.numFichas--;
      return true;
    }
    return false;
  }
}
