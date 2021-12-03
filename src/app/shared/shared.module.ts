import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerImageComponent } from '../banner-image/banner-image.component';
import { MaterialModule } from '../shared-material/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ImageModalComponent } from '../components/image-modal/image-modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [BannerImageComponent, ContactFormComponent, ImageModalComponent],
  exports: [BannerImageComponent, ContactFormComponent, ImageModalComponent, ReactiveFormsModule, FlexLayoutModule, MaterialModule],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
