import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { NotFoundError } from '@angular/core/primitives/di';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: '**', component: NotFoundPage}, // não funciona
];
