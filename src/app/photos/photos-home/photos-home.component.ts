import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-photos-home',
  templateUrl: './photos-home.component.html',
  styleUrls: ['./photos-home.component.css']
})
export class PhotosHomeComponent implements OnInit {

  imageUrl = '';
  imageAlt = '';

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.onPhotoRequest();
  }

  onPhotoRequest() {
    this.imageService.getPhoto()
      .subscribe(
        (response) => {
          this.imageAlt = response.photos[0].alt;
          this.imageUrl = response.photos[0].src.portrait;
        }
      );
  }

}
