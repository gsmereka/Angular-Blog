import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideCardComponent } from './side-card/side-card.component';
import { MidCardComponent } from './mid-card/mid-card.component';
import { FooterComponent } from './footer/footer.component';
import { MenuTitleComponent } from './menu-title/menu-title.component';
import { BigCardComponent } from './big-card/big-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideCardComponent, MidCardComponent, FooterComponent, MenuTitleComponent, BigCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
