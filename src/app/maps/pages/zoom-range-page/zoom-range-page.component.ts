import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit {

  public zoom:number = 10;
  public map?: Map;


    // referencia a algun elemento html basado en map del html
    @ViewChild('map') divMap?: ElementRef;

    // Muestra o rederiza el mapa en si.
    ngAfterViewInit(): void {
      if (!this.divMap) throw 'Elemento HTML no encontrado'

      this.map = new Map({
        // puede tener un string o un elementHtml, en este caso se implemento el elemetHTML
        container: this.divMap.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: this.zoom, // starting zoom
        });

        this.mapListeners();
    }

    mapListeners(){
      // Listener del zoom
      if (!this.map) throw 'Mapa no inicializado';
      this.map.on('zoom', (ev) => {
        // actualizar el zoom cada vez que cambie
        this.zoom =  this.map!.getZoom();

      });

      // Listener para maximo de zoom
      this.map.on('zoomend', (ev) => {
        if(this.map!.getZoom() < 18 ) return;
        this.map!.zoomTo(18);

      });

    }

    zoomIn(){
      this.map?.zoomIn();
    }

    zoomOut(){
      this.map?.zoomOut();
    }

    zoomChangeBarra(value:string){
      this.zoom = Number(value);
      this.map?.zoomTo(this.zoom)
    }

}
