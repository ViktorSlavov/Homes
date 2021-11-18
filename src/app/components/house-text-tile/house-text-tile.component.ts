import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Base } from '../../base-component/base-component.component';

@Component({
  selector: 'app-house-text-tile',
  templateUrl: './house-text-tile.component.html',
  styleUrls: ['./house-text-tile.component.scss']
})
export class HouseTextTileComponent extends Base implements OnInit {
  @Input()
  public text!: string;

  @Input()
  public src!: string;

  @Input()
  public orientation: 'left' | 'right' = 'right';

  @HostBinding('style.align-self')
  public get alignSelf(): string {
    return this.orientation === 'left' ? 'flex-start' : 'flex-end';
  }
}
