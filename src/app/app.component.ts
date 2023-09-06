import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
  public alertButtons = ['OK'];

}


