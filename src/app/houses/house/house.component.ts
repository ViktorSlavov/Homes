import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Base } from 'src/app/base-component/base-component.component';
import { House } from 'src/app/common';

@Component({
  selector: 'app-house-tile',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseTileComponent extends Base implements OnInit {

  // TODO: Delete this
  @ViewChild('button', { read: ElementRef })
  private viewButton!: ElementRef<any>

  @HostListener('click', ['$event'])
  public handleClick(ev: any): void {
    ev.stopPropagation();
    this.viewButton.nativeElement.click();
  }

  @HostBinding('class')
  public houseCard = 'house__card';

  public resourceKey = 'house';

  @Input()
  public house!: House;
}
