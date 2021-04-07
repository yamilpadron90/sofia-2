import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sofia2';

  getStorage() {
    const a = sessionStorage.getItem("sofia2-example")
    console.log("Result from SessionStorage", a)
  }

  setStorage() {
    sessionStorage.setItem("sofia2-example", "test")
  }

}
