import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { NgModule } from '@angular/core';

const MATERIAL_IMPORTS = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatSliderModule,
  MatSelectModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCheckboxModule
];

@NgModule({
    imports: [...MATERIAL_IMPORTS],
    exports: [...MATERIAL_IMPORTS]
})
export class MaterialModule {}