import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Base } from '../../base-component/base-component.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent extends Base implements OnInit {

  @Output()
  public clicked = new EventEmitter<void>();

  public closeNav(): void {
    this.clicked.emit();
  }
}
