import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LanguageService } from '../language.service';
import { ResourceStrings } from '../resource-strings';

@Directive({
  selector: 'app-base'
})
export abstract class Base implements OnInit, OnDestroy {
  protected resourceKey: string = 'None';
  protected destroy$ = new Subject();
  public resourceStrings!: ResourceStrings;

  constructor(protected languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.resourceStrings = this.languageService.getResources(this.resourceKey);
    this.languageService.languageChange.pipe(takeUntil(this.destroy$)).subscribe((e) => {
      this.resourceStrings = this.languageService.getResources(this.resourceKey);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
