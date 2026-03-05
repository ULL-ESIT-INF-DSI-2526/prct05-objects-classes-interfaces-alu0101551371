import { Recetas } from "./recetario";

export interface elementosChef {
  nombre: string;
  seguidores: number;
  recetario: Recetas[];
}

export class Chef implements elementosChef {
  /**
   * Crear una nueva instancia de un Chef
   * @param nombre Nombre del chef
   * @param seguidores Número de seguidores del chef
   * @param recetario Lista de recetas creadas por el chef
   */
  constructor(
    public nombre: string,
    public seguidores: number,
    public recetario: Recetas[],
  ) {}

  /**
   * Filtra las recetas del chef según los criterios especificados
   * @param filtro Objeto con criterios de filtrado opcional (nombre de la receta, año de publicación)
   * @returns Array de recetas que cumplen con los criterios de filtrado
   */
  public filtradoRecetario(filtro: {
    nombre?: string;
    anyoPublicacion?: number;
  }): Recetas[] {
    let filtrado: Recetas[] = [];
    filtrado = this.recetario.filter((receta) => {
      if (filtro.nombre && filtro.nombre != receta.nombre) return false;
      if (
        filtro.anyoPublicacion &&
        filtro.anyoPublicacion != receta.anyoPublicacion
      )
        return false;
      return true;
    });
    return filtrado;
  }
}
