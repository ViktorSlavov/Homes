import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent{
    @HostBinding('class.modal')
    public cssClass = true;

    @HostBinding('style.z-index')
    public get zIndex(): number {
        return this.visible ? 100 : 0;
    }
    

    public visible = false;
    public show(url: string): void {
        if (this.visible) return;
        this.downloadUrl = url;
        this.title = url.split('.jpg')[0].split('assets/')[1];
        this.backgroundUrl = `url(${url})`;
        this.visible = true;
    }

    public hide(): void {
        if (!this.visible) return;
        this.visible = false;
    }

    @Input()
    public backgroundUrl!: string;

    public downloadUrl!: string;
    public title!: string;
}