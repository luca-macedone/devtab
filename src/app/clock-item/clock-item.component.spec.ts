import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockItemComponent } from './clock-item.component';

describe('ClockItemComponent', () => {
  let component: ClockItemComponent;
  let fixture: ComponentFixture<ClockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClockItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
