import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMountainComponent } from './logo-mountain.component';

describe('LogoMountainComponent', () => {
  let component: LogoMountainComponent;
  let fixture: ComponentFixture<LogoMountainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoMountainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
