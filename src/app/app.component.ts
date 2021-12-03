import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { ModalService } from './modal.service';
interface Route {
  route: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ImageModalComponent)
  public imageModal!: ImageModalComponent

  @HostBinding('class.content')
  public class = "content";

  constructor(private modalService: ModalService) {
  }

  public ngAfterViewInit(): void {
    this.modalService.register(this.imageModal);
  }

  public routes: Route[] = [{
    route: '/home',
    name: $localize`Home`
  }, {
    route: '/houses',
    name: $localize`Houses`
  }, {
    route: '/about-us',
    name: $localize`About Us`
  },
  ];
}