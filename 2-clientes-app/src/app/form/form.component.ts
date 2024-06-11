import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { ClienteService } from '../clientes/cliente.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear cliente';

  constructor(private clienteService: ClienteService, private router:Router) {}

  ngOnInit(): void {}

  public createCliente(): void{
    this.clienteService.createCliente(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes'])
        Swal.fire('Nuevo cliente', `Cliente ${response.nombre} creado con éxito!`, 'success');
      }
    );
  }
}
