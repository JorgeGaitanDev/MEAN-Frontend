export class Informe {
  _id?: number;
  a_o: number;
  cod_territorio: number;
  nom_territorio: string;
  cantidad_dosis_aplicadas: number;

  constructor(a_o: number, cod_territorio: number, nom_territorio: string, cantidad_dosis_aplicadas: number) {
      this.a_o = a_o;
      this.cod_territorio = cod_territorio;
      this.nom_territorio = nom_territorio;
      this.cantidad_dosis_aplicadas = cantidad_dosis_aplicadas;
  }
}

