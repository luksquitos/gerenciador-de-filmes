import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  imports: [],
  // templateUrl: './item-card.html',
  template: `
    <p class="bg-error-base font-rajdhani ">Funciona dessa forma também </p>
    <!-- @for (item of ronaldos;) {} -->
  `
})
export class ItemCard {
  ronaldos = [
    {
      nome: "Ronaldo",
      idade: 23
    },
    {
      nome: "Juliana",
      idade: 24
    },
    {
      nome: "Mariana",
      idade: 25
    },
  ]

}
