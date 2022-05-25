import { Injectable } from "@angular/core";
import { ImageModalComponent } from "./components/image-modal/image-modal.component";

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private modal!: ImageModalComponent;

    public register(imageModal: ImageModalComponent) {
        this.modal = imageModal;
    }

    public show(url: string): void {
        this.modal.show(url);
    }

    public hide(): void {
        this.modal.hide();
    }
}