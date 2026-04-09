import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Banner } from './banner/banner';
import { Cardd } from './cardd/cardd';
import { Menu }  from './menu/menu';

import { Popular } from './popular/popular';
import { Tours } from './tours/tours';
import { Promo } from './promo/promo';
import { Toptrend } from './toptrend/toptrend';
import { Review } from './review/review';
import { Email } from './email/email';
import { email } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Banner, Cardd, Menu, Popular, Tours, Promo, Toptrend, Review, Email],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-viagem-angular');
}
