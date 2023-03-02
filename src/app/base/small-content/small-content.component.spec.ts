import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallContentComponent } from './small-content.component';

describe('SmallContentComponent', () => {
  let component: SmallContentComponent;
  let fixture: ComponentFixture<SmallContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
