import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone',
  standalone: true,
  // imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent {

  // Al hacerlo con Input. DEsde el padre puedo mandar el valor del counter inicial.
  @Input()
  public counter:number = 10;

}
