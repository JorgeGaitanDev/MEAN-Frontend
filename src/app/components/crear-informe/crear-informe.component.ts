import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Informe } from '../../models/informe';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InformeService } from 'src/app/services/informe.service';

@Component({
  selector: 'app-crear-informe',
  templateUrl: './crear-informe.component.html',
  styleUrls: ['./crear-informe.component.css']
})
export class CrearInformeComponent implements OnInit {
  informeForm: FormGroup;
  titulo = 'Crear informe';
  id: string | null;
  constructor(private fb: FormBuilder,
             private router: Router,
             private toastr: ToastrService,
             private _informeService: InformeService,
             private aRouter: ActivatedRoute) {

    this.informeForm = this.fb.group({
      a_o:                      ['', Validators.required],
      cod_territorio:           ['', Validators.required],
      nom_territorio:           ['', Validators.required],
      cantidad_dosis_aplicadas: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  agregarInforme() {
    const INFORME: Informe = {
      a_o: this.informeForm.get('a_o')?.value,
      cod_territorio: this.informeForm.get('cod_territorio')?.value,
      nom_territorio: this.informeForm.get('nom_territorio')?.value,
      cantidad_dosis_aplicadas: this.informeForm.get('cantidad_dosis_aplicadas')?.value,
    }

    if (this.id !== null) {
      // edita informe
      this._informeService.editarInforme(this.id, INFORME).subscribe(data => {
        this.toastr.success('El informe fue actualizado con éxito', 'Informe Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.informeForm.reset();
      })

    } else {
      // agrega informe
      console.log(INFORME);
      this._informeService.guardarInforme(INFORME).subscribe(data => {
        this.toastr.info('El informe fue registrado con éxito', 'Informe Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.informeForm.reset();
      })
    }

  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar informe';
      this._informeService.obtenerInforme(this.id).subscribe(data => {
        this.informeForm.setValue({
          a_o: data.a_o,
          cod_territorio: data.cod_territorio,
          nom_territorio: data.nom_territorio,
          cantidad_dosis_aplicadas: data.cantidad_dosis_aplicadas,
        })
      })
    }
  }
}
