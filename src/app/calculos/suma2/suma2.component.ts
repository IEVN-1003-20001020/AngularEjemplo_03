import { Component } from '@angular/core';

@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
})
export class Suma2Component {

  numero1:number=0;
  numero2:number=0;
  res:number=0;


  sumaar(){

    this.res=this.numero1+this.numero2;

  }

   multiplica() {
    this.res=this.numero1 * this.numero2;
   }


   imprime(){

    this.res=this.numero1+this.numero2;

    
   }
  
  

}
