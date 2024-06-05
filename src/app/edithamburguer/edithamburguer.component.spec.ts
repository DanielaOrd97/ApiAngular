import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithamburguerComponent } from './edithamburguer.component';

describe('EdithamburguerComponent', () => {
  let component: EdithamburguerComponent;
  let fixture: ComponentFixture<EdithamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdithamburguerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdithamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
