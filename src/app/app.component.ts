import { Component } from '@angular/core';
import { EmpleadosComponent } from './empleados/empleados.component';

@Component({
  selector: 'app-root',
  imports: [EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';
}
