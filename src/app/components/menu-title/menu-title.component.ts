import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-title',
  imports: [RouterModule],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {
    @Input()
    Id:string="0"

    @Input()
    movingNews:string = ""
    
    
}
