import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[]=[
    {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juan@unicauca.edu.co', createAt: '2021-05-14'},
    {id: 2, nombre: 'Andres', apellido: 'Sanchez', email: 'andres@unicauca.edu.co', createAt: '2022-06-14'},
    {id: 1, nombre: 'Pedro', apellido: 'Cortez', email: 'pedro@unicauca.edu.co', createAt: '2018-02-14'}
    ]
    constructor() { }
    ngOnInit(): void {
    }
}
