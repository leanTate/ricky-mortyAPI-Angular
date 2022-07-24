import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rickresults:any;
  number = 1;
  scroll = 2500;
  Response:any = fetch(`https://rickandmortyapi.com/api/character/?page=${1}`)
  .then(response => response.json())
  .then(data => {
    this.rickresults = data.results
  });
  async onScrollDown(){
    console.log(this.number)
  if(window.scrollY>this.scroll&& this.number<42){
    this.scroll = this.scroll+2500;
    const Responsed= await fetch(`https://rickandmortyapi.com/api/character/?page=${this.number+=1}`)
    .then(response => response.json())
    .then(data => {
      this.rickresults.push(...data.results)
    });
    }
  }
}

