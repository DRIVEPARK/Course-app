import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kurs';
  message = '';
  tablica: any[] = [
    {nazwa: "Programowanie w C#"},
    {nazwa: "Angular dla początkujących"},
      {nazwa: "Kurs Django"}
  ];
  numer:any = '';
  nazwa:string ='';
    wyswietl(){
      console.log(this.nazwa);
      if(this.numer == 1){
        console.log('Programowanie w C#');
      }
      else if(this.numer == 2){
        console.log('Angular dla początkujących');
      }
      else if(this.numer == 3){
        console.log('Kurs Django');
      }
      else{
        console.log('Nieprawidłowy numer kursu');
      }
    }
  }


