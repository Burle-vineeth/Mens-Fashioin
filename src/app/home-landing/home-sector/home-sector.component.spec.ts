import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectorComponent } from './home-sector.component';

describe('HomeSectorComponent', () => {
  let component: HomeSectorComponent;
  let fixture: ComponentFixture<HomeSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
