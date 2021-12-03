import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  constructor(private appComponent: AppComponent) {
  }

  public get routes() {
    return this.appComponent.routes;
  }

  @Output()
  public clicked = new EventEmitter<void>();

  public closeNav(): void {
    this.clicked.emit();
  }
}
