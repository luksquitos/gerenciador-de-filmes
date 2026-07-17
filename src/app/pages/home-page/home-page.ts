import { Component } from '@angular/core';

import { ItemCard } from '../../components/ui/item-card/item-card';

@Component({
  selector: 'app-home-page',
  imports: [ItemCard],
  templateUrl: './home-page.html',
})
export class HomePage {}
