import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTextTileComponent } from './house-text-tile.component';

describe('HouseTextTileComponent', () => {
  let component: HouseTextTileComponent;
  let fixture: ComponentFixture<HouseTextTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseTextTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTextTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
