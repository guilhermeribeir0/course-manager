import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertSucess(mensagem: string) {
    Swal.fire({
      title: 'Sucess!',
      text: mensagem,
      icon: 'success'
    });
  }

  alertError(mensagem: string) {
    Swal.fire({
      title: 'Erro!',
      text: mensagem,
      icon: 'error'
    });
  }

  alertWarm(mensagem: string) {
    Swal.fire({
      title: 'Ops!',
      text: mensagem,
      icon: 'warning'
    });
  }
}
