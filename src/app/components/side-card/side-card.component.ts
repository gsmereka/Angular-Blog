import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-card',
  imports: [RouterModule],
  templateUrl: './side-card.component.html',
  styleUrl: './side-card.component.css'
})

export class SideCardComponent implements OnInit {

    @Input()
    photoCover:string = ""
  
    @Input()
    cardTitle:string = ""
  
    @Input()
    Id:string="0"
  
    @Input()
    cardDescription:string =""

    @Input()
    cardTime:string ="9 minutes"
    
    iconLink: string = "https://www.pngfind.com/pngs/m/99-999153_clock-4pm-clock-4pm-clock-4pm-clock-sign.png"

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  