import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosHomeComponent } from './photos-home/photos-home.component';
import { GetButtonComponent } from './get-button/get-button.component';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    PhotosHomeComponent,
    GetButtonComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
