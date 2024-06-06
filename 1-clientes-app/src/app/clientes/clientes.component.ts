import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { CommonModule } from '@angular/common';
import { ClienteService } from './cliente.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  constructor(private clienteService: ClienteService) {}
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    //this.objClienteService.getClientes().subscribe(function (clientes) {
      //this.clientes = clientes;
    //};
  }

  //Implementacion 1
  /*
  clientes: Cliente[]=[
    {id: 1, nombre: 'Juan', apellido: 'Perez', email: 'juan@unicauca.edu.co', createAt: '2021-05-14'},
    {id: 2, nombre: 'Andres', apellido: 'Sanchez', email: 'andres@unicauca.edu.co', createAt: '2022-06-14'},
    {id: 1, nombre: 'Pedro', apellido: 'Cortez', email: 'pedro@unicauca.edu.co', createAt: '2018-02-14'}
  ]
    constructor() { }
    ngOnInit(): void {
    }
  */
  //Implementacion 2
  /*
  clientes?: Cliente[];
  constructor() { }

  ngOnInit(): void {
    this.clientes = CLIENTES;
  }
  */
}
