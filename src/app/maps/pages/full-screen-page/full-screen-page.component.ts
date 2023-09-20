import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit {

  // referencia a algun elemento html basado en map del html
  @ViewChild('map') divMap?: ElementRef;

  // Muestra o rederiza el mapa en si.
  ngAfterViewInit(): void {

    if (!this.divMap) throw 'Elemento HTML no encontrado'

    const map = new Map({
      // puede tener un string o un elementHtml, en este caso se implemento el elemetHTML
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }

}
