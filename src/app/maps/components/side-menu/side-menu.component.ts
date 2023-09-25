import { Component } from '@angular/core';

interface MenuItem{
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItem: MenuItem[] = [
    {route: '/maps/fullscreen', name: 'Pantalla General'},
    {route: '/maps/zoom-range', name: 'Navegar por Zoom'},
    {route: '/maps/markers', name: 'Marcadores'},
    {route: '/maps/properties', name: 'Propiedades'},
  ]
}
