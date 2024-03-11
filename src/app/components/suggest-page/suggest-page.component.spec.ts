import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestPageComponent } from './suggest-page.component';

describe('SuggestPageComponent', () => {
  let component: SuggestPageComponent;
  let fixture: ComponentFixture<SuggestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
