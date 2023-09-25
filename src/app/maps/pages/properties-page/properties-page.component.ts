import { Component } from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
  shortDescription?: string;
}

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {
  public houses: House[] = [
    {
      title: 'Casa residencial, Canadá',
      description: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466],
      shortDescription: '',
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748],
      shortDescription: '',
    },
    {
      title: 'Apartamento, Argentina',
      description: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ],
      shortDescription: '',
    },
    {
      title: 'Local comercial, España',
      description: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ],
      shortDescription: '',
    },
  ];

  longitudMaxima = 35; // Puedes ajustar este valor según tus necesidades

  constructor() { }

  ngOnInit(): void {
    this.limitarTexto();
  }

  limitarTexto() {
    this.houses.forEach(house => {
      if (house.description.length > this.longitudMaxima) {
        house.shortDescription = house.description.slice(0, this.longitudMaxima) +' ...';
      } else {
        house.shortDescription = house.description;
      }
    });
  }
}
