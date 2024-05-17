export class Informe {
  _id?: string;
  fecha_aplicaci_n: string;
  a_o: string;
  cod_territorio: string;
  nom_territorio: string;
  cantidad_dosis_aplicadas: string;
  fecha_corte: string;

  constructor(fecha_aplicaci_n: string, a_o: string, cod_territorio: string, nom_territorio: string, cantidad_dosis_aplicadas: string, fecha_corte: string) {
      this.fecha_aplicaci_n = fecha_aplicaci_n;
      this.a_o = a_o;
      this.cod_territorio = cod_territorio;
      this.nom_territorio = nom_territorio;
      this.cantidad_dosis_aplicadas = cantidad_dosis_aplicadas;
      this.fecha_corte = fecha_corte;
  }
}

