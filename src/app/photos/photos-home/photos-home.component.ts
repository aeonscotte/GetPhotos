import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css']
})
export class PhotosHomeComponent implements OnInit {

  photoUrl: any;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.onPhotoRequest();
  }

  onPhotoRequest() {
    this.imageService.getPhoto().subscribe((photo) => { this.photoUrl = photo; console.log(this.photoUrl) });
  }

}
