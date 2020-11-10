import { Component } from '@angular/core';
import { UtilsService } from '../assets/util/utils.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CongresoITSM';

  constructor(
    public _utilService: UtilsService
    ) { }
 

}
