import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderWrapComponent } from './preloader-wrap.component';

describe('PreloaderWrapComponent', () => {
  let component: PreloaderWrapComponent;
  let fixture: ComponentFixture<PreloaderWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreloaderWrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreloaderWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
