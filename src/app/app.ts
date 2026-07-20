import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { phosphorStarFill } from '@ng-icons/phosphor-icons/fill';
import {
  phosphorArrowLeft,
  phosphorCalendar,
  phosphorEnvelope,
  phosphorFilmSlate,
  phosphorMagnifyingGlass,
  phosphorPassword,
  phosphorPencilSimple,
  phosphorPlay,
  phosphorPlus,
  phosphorPopcorn,
  phosphorSignOut,
  phosphorStar,
  phosphorTag,
  phosphorUploadSimple,
  phosphorUser,
  phosphorWarning,
  phosphorX,
  phosphorXCircle,
} from '@ng-icons/phosphor-icons/regular';

import { ItemCard } from './components/ui/item-card/item-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    provideIcons({
      phosphorPlay,
      phosphorXCircle,
      phosphorStar,
      phosphorStarFill,
      phosphorPopcorn,
      phosphorFilmSlate,
      phosphorMagnifyingGlass,
      phosphorArrowLeft,
      phosphorPlus,
      phosphorEnvelope,
      phosphorPassword,
      phosphorSignOut,
      phosphorX,
      phosphorTag,
      phosphorCalendar,
      phosphorUploadSimple,
      phosphorWarning,
      phosphorUser,
      phosphorPencilSimple,
    }),
  ],
})
export class App {
  protected readonly title = signal('gerenciador-de-filmes');
}
