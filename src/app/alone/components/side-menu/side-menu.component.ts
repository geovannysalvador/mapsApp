import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  name: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
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
    {route: '/alone', name: 'Alone'},
  ]
}
