import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoNglFComponent } from './uso-ngl-f.component';

describe('UsoNglFComponent', () => {
  let component: UsoNglFComponent;
  let fixture: ComponentFixture<UsoNglFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoNglFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoNglFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
