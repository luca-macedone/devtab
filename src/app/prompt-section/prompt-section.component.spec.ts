import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptSectionComponent } from './prompt-section.component';

describe('PromptSectionComponent', () => {
  let component: PromptSectionComponent;
  let fixture: ComponentFixture<PromptSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromptSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromptSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
