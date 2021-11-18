import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './header.interceptor';
import { AuthGuard } from './auth.guard';
import { CrudService } from './crud.service';
import { AuthService } from './auth.service';
import { EditPageComponent } from './edit/edit-page/edit-page.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    EditComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true
  }, AuthGuard, CrudService, AuthService]
})
export class AdminModule { }
