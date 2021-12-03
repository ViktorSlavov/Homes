import { AfterViewInit, Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { LanguageService } from './language.service';
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
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ImageModalComponent)
  public imageModal!: ImageModalComponent

  @HostBinding('class.content')
  public class = "content";

  constructor(public languageService: LanguageService, private modalService: ModalService) {
  }

  public ngOnInit(): void {
    this.languageService.getData();
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