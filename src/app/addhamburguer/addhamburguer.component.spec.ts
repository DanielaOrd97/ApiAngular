import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhamburguerComponent } from './addhamburguer.component';

describe('AddhamburguerComponent', () => {
  let component: AddhamburguerComponent;
  let fixture: ComponentFixture<AddhamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddhamburguerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddhamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
