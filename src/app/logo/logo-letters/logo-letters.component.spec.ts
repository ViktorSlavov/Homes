import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLettersComponent } from './logo-letters.component';

describe('LogoLettersComponent', () => {
  let component: LogoLettersComponent;
  let fixture: ComponentFixture<LogoLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
