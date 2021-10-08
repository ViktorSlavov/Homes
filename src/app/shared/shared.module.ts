import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translate.pipe';
import { CapitalizePipe } from '../capitalize.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TranslatePipe, CapitalizePipe],
  exports: [TranslatePipe, CapitalizePipe, FlexLayoutModule],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
