import { Component, OnInit } from '@angular/core';

interface Appointment {
  id: number;
  clientName: string;
  professionalName: string;
  serviceName: string;
  startAt: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.appointments = [
      { id: 1, clientName: 'Marina Costa', professionalName: 'Dr. André Silva', serviceName: 'Consulta inicial', startAt: '2026-03-29 10:00', status: 'CONFIRMADO' },
      { id: 2, clientName: 'Lucas Almeida', professionalName: 'Dra. Paula Rocha', serviceName: 'Retorno', startAt: '2026-03-29 14:30', status: 'PENDENTE' },
      { id: 3, clientName: 'Fernanda Souza', professionalName: 'Dr. André Silva', serviceName: 'Avaliação', startAt: '2026-03-30 09:00', status: 'CONFIRMADO' }
    ];
  }
}
