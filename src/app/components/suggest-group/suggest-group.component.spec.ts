import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestGroupComponent } from './suggest-group.component';

describe('SuggestGroupComponent', () => {
  let component: SuggestGroupComponent;
  let fixture: ComponentFixture<SuggestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
