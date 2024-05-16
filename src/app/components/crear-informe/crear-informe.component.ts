import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Informe } from '../../models/informe';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-informe',
  templateUrl: './crear-informe.component.html',
  styleUrls: ['./crear-informe.component.css']
})
export class CrearInformeComponent implements OnInit {
  informeForm: FormGroup;

  constructor(private fb: FormBuilder,
             private router: Router,
             private toastr: ToastrService) {

    this.informeForm = this.fb.group({
      a_o:                      ['', Validators.required],
      cod_territorio:           ['', Validators.required],
      nom_territorio:           ['', Validators.required],
      cantidad_dosis_aplicadas: ['', Validators.required],
    })
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

    this.toastr.info('El informe fue registrado con éxito', 'Informe Registrado');
    this.router.navigate(['/']);
  }

}
