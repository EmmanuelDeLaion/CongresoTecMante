import { Component, OnInit } from '@angular/core';
//import * as videojs from 'videojs';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'] 
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //  videojs.init();
  }

}
