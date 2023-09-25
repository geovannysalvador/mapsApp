import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  //imports: [CommonModule], //! no es necesario pero puede ir si usamos los ng-if o for etc
  // para usar con standalone y llamarlo en el HTML se debe de importar aca
  imports: [CounterAloneComponent, ],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}
