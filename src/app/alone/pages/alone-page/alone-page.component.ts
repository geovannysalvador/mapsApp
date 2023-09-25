import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  // imports: [CommonModule], //! no es necesario pero puede ir si usamos los ng-if o for etc
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent {

}
