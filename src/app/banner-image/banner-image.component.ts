import { Component, HostBinding, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner-image',
  templateUrl: './banner-image.component.html',
  styleUrls: ['./banner-image.component.scss']
})
export class BannerImageComponent {

  @ViewChild('scrollButton', { read: ElementRef })
  public scrollButton!: ElementRef<any>;

  @Input()
  @HostBinding('style.background-image')
  public imageUrl!: string;

  @Input()
  public bannerText!: string;

  @Output()
  public scrollDown = new EventEmitter<void>();

  public scroll(): void {
    (this.scrollButton.nativeElement as HTMLElement).scrollIntoView({ block: "start", inline: "nearest", behavior: "smooth"});
    this.scrollDown.emit();
  }
}
