import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rickresults:any;

  Response:any = fetch(`https://rickandmortyapi.com/api/character/?page=${2}`)
  .then(response => response.json())
  .then(data => {
    this.rickresults = data.results
    console.log(data)
  });
  products:Product[]=[
    {
      title:'product1',
      price:100,
      img:'https://picsum.photos/200/200'
    },
    {
      title:'product2',
      price:200,
      img:'https://picsum.photos/201/200'
    },
    {
      title:'product3',
      price:400,
      img:'https://picsum.photos/202/200'
    },
    {
      title:'product4',
      price:700,
      img:'https://picsum.photos/203/200'
    },
    {
      title:'product5',
      price:1000,
      img:'https://picsum.photos/204/200'
    },
  ]

}
