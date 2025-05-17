import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados: any[] = [
    { id: 1, nombre: 'Juan Pérez', puesto: 'Ingeniero', salario: 5000 },
    { id: 2, nombre: 'Ana Gómez', puesto: 'Gerente', salario: 7000 }
  ];

  nuevoEmpleado = { nombre: '', puesto: '', salario: 0 };

  agregarEmpleado() {
    const id = this.empleados.length ? this.empleados[this.empleados.length - 1].id + 1 : 1;
    const empleado = { id, ...this.nuevoEmpleado };
    this.empleados.push(empleado);
    this.nuevoEmpleado = { nombre: '', puesto: '', salario: 0 };
  }

  eliminarEmpleado(id: number) {
    this.empleados = this.empleados.filter(emp => emp.id !== id);
  }
}