import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name = 'Nora';
  total = 0.0;
  test() {
    console.log("Button Clicked!")

    this.name = "Thank you!";
    this.total += 9.99;

  }
}
