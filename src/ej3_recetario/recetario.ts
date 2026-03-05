import { Paso } from "./paso";

export interface elementosRecetario {
  nombre: string;
  anyoPublicacion: number;
  pasos: Paso[];
}

export class Recetas implements elementosRecetario {
  /**
   * Crear una nueva instancia de una Receta
   * @param nombre Nombre de la receta
   * @param anyoPublicacion Año en que fue publicada la receta
   * @param pasos Array de pasos que componen la receta
   */
  constructor(
    public nombre: string,
    public anyoPublicacion: number,
    public pasos: Paso[],
  ) {}

  /**
   * Obtiene el número total de pasos en la receta
   * @returns Número de pasos de la receta
   */
  public getNumeroPasos(): number {
    return this.pasos.length;
  }

  /**
   * Calcula la duración total mínima y máxima de la receta
   * @returns Array con dos elementos: [duración mínima, duración máxima incluyendo pasos opcionales]
   */
  public getDuracionTotal(): number[] {
    let duracionMinima = 0;
    let duracionMaxima = 0;
    this.pasos.forEach((paso) => {
      duracionMinima += paso.duracion;
      if (paso.pasoOpcional) {
        duracionMaxima += paso.duracion;
      }
    });
    return [duracionMinima, duracionMinima + duracionMaxima];
  }

  /**
   * Filtra los pasos de la receta según los criterios especificados
   * @param filtro Objeto con criterios de filtrado opcional (nombre, duración, etiquetas, veces completado, si es opcional)
   * @returns Array de pasos que cumplen con los criterios de filtrado
   */
  public filtradoPasos(filtro: {
    nombre?: string;
    duracion?: number;
    etiquetasClasificacion?: string;
    numVecesCompletado?: number;
    pasoOpcional?: boolean;
  }): Paso[] {
    let filtrado: Paso[] = [];
    filtrado = this.pasos.filter((paso) => {
      if (filtro.nombre && filtro.nombre != paso.nombre) return false;
      if (filtro.duracion && filtro.duracion != paso.duracion) return false;
      if (
        filtro.etiquetasClasificacion &&
        !paso.etiquetasClasificacion.includes(filtro.etiquetasClasificacion)
      )
        return false;
      if (
        filtro.numVecesCompletado &&
        filtro.numVecesCompletado != paso.numVecesCompletado
      )
        return false;
      if (
        filtro.pasoOpcional != undefined &&
        filtro.pasoOpcional != paso.pasoOpcional
      )
        return false;
      return true;
    });
    return filtrado;
  }
}
