import { NgModule } from '@angular/core';
import { TranslatePipe } from '../translate.pipe';
import { CapitalizePipe } from '../capitalize.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerImageComponent } from '../banner-image/banner-image.component';
import { MaterialModule } from '../shared-material/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@NgModule({
  declarations: [TranslatePipe, CapitalizePipe, BannerImageComponent, ContactFormComponent],
  exports: [TranslatePipe, CapitalizePipe, BannerImageComponent, ContactFormComponent, ReactiveFormsModule, FlexLayoutModule, MaterialModule],
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class SharedModule { }
