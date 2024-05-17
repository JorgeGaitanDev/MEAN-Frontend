import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Informe } from 'src/app/models/informe';
import { InformeService } from 'src/app/services/informe.service';

@Component({
  selector: 'app-listar-informe',
  templateUrl: './listar-informe.component.html',
  styleUrls: ['./listar-informe.component.css']
})
export class ListarInformeComponent implements OnInit {
eliminatInforme(arg0: number|undefined) {
throw new Error('Method not implemented.');
}
  listInformes: Informe[] = [];

  constructor(private _informeService: InformeService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerInformes();
  }


  obtenerInformes() {
    this._informeService.getInformes().subscribe(data => {
      console.log(data);
      this.listInformes = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarInforme(id: any) {
    this._informeService.eliminarInforme(id).subscribe(data => {
      this.toastr.error('El informe fue eliminado con exito' ,'Informe Eliminado');
      this.obtenerInformes();
    }, error => {
      console.log(error);
    })
  }

}
