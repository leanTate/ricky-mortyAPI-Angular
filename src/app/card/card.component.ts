import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() img:string='';
  @Input() title:string='';
  @Input() price:number=0;

  constructor() {

  }

  ngOnInit(): void {
  }

}
