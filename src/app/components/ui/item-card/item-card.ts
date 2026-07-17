import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HlmButton, HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-item-card',
  imports: [RouterLink, HlmButton],
  templateUrl: './item-card.html',
})
export class ItemCard {
  isOk = true;
  canClick = false;
  nome = 'Lucas';
  ronaldos = [
    {
      nome: 'Ronaldo',
      idade: 23,
    },
    {
      nome: 'Juliana',
      idade: 24,
    },
    {
      nome: 'Mariana',
      idade: 25,
    },
  ];
  onClick(): void {
    console.log('Clicado');
  }
  // constructor(tor: string){
  //   ronaldo = tor;

  // }
}
