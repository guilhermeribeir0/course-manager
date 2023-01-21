import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alertSucess(mensagem: string) {
    Swal.fire({
      title: 'SUCESS!',
      text: mensagem,
      icon: 'success'
    });
  }

  alertError(mensagem: string) {
    Swal.fire({
      title: 'ERRO!',
      text: mensagem,
      icon: 'error'
    });
  }

  alertWarm(mensagem: string) {
    Swal.fire({
      title: 'OPS!',
      text: mensagem,
      icon: 'warning'
    });
  }
}
