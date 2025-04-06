import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCardComponent } from './side-card.component';

describe('SideCardComponent', () => {
  let component: SideCardComponent;
  let fixture: ComponentFixture<SideCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
