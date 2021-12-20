import { Component, OnInit } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images=["../../assets/apple.jpg","../../assets/apple.jpg","../../assets/apple.jpg"]
  imageObject = [{
    image: '../../assets/earphone1.jpg',
    thumbImage: '../../assets/earphone1.jpg',

}, {
  image: '../../assets/keyboard1.jpg',
  thumbImage: '../../assets/keyboard1.jpg',

    
}, {
  image: '../../assets/earphones2.jpg',
  thumbImage: '../../assets/earphones2.jpg',

},{
  image: '../../assets/watch1.jpg',
  thumbImage: '../../assets/watch1.jpg',

}, {
    
  image: '../../assets/hp.jpg',
  thumbImage: '../../assets/hp.jpg',

}, {
  image: '../../assets/pendrive.jpg',
  thumbImage: '../../assets/pendrive.jpg',

}];
  constructor() { }

  ngOnInit(): void {
    
  }

}
