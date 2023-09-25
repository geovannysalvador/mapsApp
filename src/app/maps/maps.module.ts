import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2VvOTk0IiwiYSI6ImNsbXF3cGJmdDAxcTUyc215NnFidW52ZGwifQ.PAJSQyFh0mecqReVxkSAAw';

import { MapsRoutingModule } from './maps-routing.module.ts.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';



@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    // Para un StandAlone component se importa directo en el module si es uno sobre otro como el git anterios
    // Solo se llama por medio del import en el component.ts
    CounterAloneComponent,
  ]
})
export class MapsModule { }
