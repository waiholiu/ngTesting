import { MyService } from './my.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private myService : MyService){

  }
  
  title = 'app works!';

  buttonClick() {
    // this.myService.callServer();
  }


}
