import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})


export class AppComponent {
  title = 'AngularEjemplo_03';

  duplicarValor(valor:number):number{
    return valor*2
  }


  sumar(valor2:number):number{
    return valor2 + 100
  }


  pelicula={
    titulo:'Spider-man',
    fechaLanzamiento:new Date(),
  }

}


