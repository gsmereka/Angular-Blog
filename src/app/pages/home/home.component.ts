import { Component } from '@angular/core';
import { SideCardComponent } from '../../components/side-card/side-card.component';
import { MidCardComponent } from '../../components/mid-card/mid-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';

@Component({
  selector: 'app-home',
  imports: [SideCardComponent, MidCardComponent, FooterComponent, MenuTitleComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
