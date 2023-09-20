import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {


  public zoom:number = 10;
  public map?: Map;
  public ActualLngLat: LngLat = new LngLat(-97.15613207928855, 32.73738810026772);


    // referencia a algun elemento html basado en map del html
    @ViewChild('map') divMap?: ElementRef;

    // Muestra o rederiza el mapa en si.
    ngAfterViewInit(): void {
      if (!this.divMap) throw 'Elemento HTML no encontrado'

      this.map = new Map({
        // puede tener un string o un elementHtml, en este caso se implemento el elemetHTML
        container: this.divMap.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.ActualLngLat, // starting position [lng, lat]
        zoom: this.zoom, // starting zoom
        });

        this.mapListeners();
    }

    ngOnDestroy(): void {
      this.map?.remove();
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

      // Listener para tener la long y lat
      this.map.on('move', ()=> {
        this.ActualLngLat = this.map!.getCenter();
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
