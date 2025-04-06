import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  Id:string="0"

  placeHolder:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"
  
  constructor() { }

  ngOnInit(): void {
    if (this.photoCover == "")
      this.photoCover = this.placeHolder
  }

}