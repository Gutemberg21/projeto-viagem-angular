import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu }  from './menu/menu';
import { Card } from './card/card';
import { Popular } from './popular/popular';
import { Tours } from './tours/tours';
import { Promo } from './promo/promo';
import { Toptrend } from './toptrend/toptrend';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Card, Popular, Tours, Promo, Toptrend],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-viagem-angular');
}
