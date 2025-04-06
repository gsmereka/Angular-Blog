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
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  