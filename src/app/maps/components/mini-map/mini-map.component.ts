import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {
  public map?: Map;

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement) throw 'Map no encontrado'
    if(!this.lngLat) throw 'No puede ser nulo'

    const map = new Map({
      // puede tener un string o un elementHtml, en este caso se implemento el elemetHTML
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      // interactive: false,
      });

      new Marker ()
        .setLngLat(this.lngLat)
        .addTo(map)
  }

}
