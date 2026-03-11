import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringTiersComponent } from './hiring-tiers.component';

describe('HiringTiersComponent', () => {
  let component: HiringTiersComponent;
  let fixture: ComponentFixture<HiringTiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiringTiersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HiringTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
