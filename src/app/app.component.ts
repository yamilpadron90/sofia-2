import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sofia2';

  setStorage() {
    sessionStorage.setItem('prueba', 'test')
    localStorage.setItem('mmm', 'test123')
  }

  getStorage() {
    const a = sessionStorage.getItem('prueba')
    const a0 = localStorage.getItem('mmm')
    console.log(a)
    console.log(a0)
  }

}
