import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

interface MarkerAndColor{
  color: string;
  marker: Marker;
}

@Component({
  selector: 'markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit {

  public zoom:number = 13;
  public map?: Map;
  public ActualLngLat: LngLat = new LngLat(-97.15613207928855, 32.73738810026772);


    // referencia a algun elemento html basado en map del html
    @ViewChild('map') divMap?: ElementRef;

    public markers:MarkerAndColor[] = [];

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

        // // Modificar el elemento html del marcador
        // const markerHtml =  document.createElement('div');
        // markerHtml.innerHTML = 'pruevba'

        // // marcador
        // const marker = new Marker({
        //   color: 'red',
        //   element: markerHtml
        // })
        // .setLngLat( this.ActualLngLat )
        // .addTo( this.map );

    }

  createMarket(){
    if(!this.map) return;

    // const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    // const color = '#' + Array.from({ length: 3 }, () => (Math.random() * 200 + 55 | 0).toString(16)).join('');
    const colorsList = ['#dda15e', '#fefae0', '#e3d5ca', '#a7c957', '#83c5be', '#f5cac3', '#e7c6ff', '#f7af9d', '#fcca46', '#dbd3d8']; // Lista de colores comunes
    const color = colorsList[Math.floor(Math.random() * colorsList.length)];
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
  }

  addMarker(lngLat:LngLat, color:string){
    if(!this.map) return;

    const marker = new Marker ({
      color: color,
      draggable: true,
    })
    .setLngLat(lngLat)
    .addTo(this.map)

    this.markers.push({
      color: color,
      marker: marker,
    });
  }

  deleteMarker(index:number){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

}
