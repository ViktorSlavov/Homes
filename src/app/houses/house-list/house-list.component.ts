import { Component, ElementRef, Input } from "@angular/core";
import { House } from "src/app/common";

@Component({
    selector: 'app-house-list',
    template: `<app-house-tile *ngFor="let house of houses" [house]="house"></app-house-tile>`,
    styleUrls: ['house-list.component.scss']
})
export class HouseListComponent {
    @Input()
    public houses!: House[];

    constructor(private elementRef: ElementRef) {}

    public goToTop(): void {
        this.elementRef.nativeElement.scrollTop = 0;
    }
}
