import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryBufferRwUtilLibComponent } from './binary-buffer-rw-util-lib.component';

describe('BinaryBufferRwUtilLibComponent', () => {
  let component: BinaryBufferRwUtilLibComponent;
  let fixture: ComponentFixture<BinaryBufferRwUtilLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinaryBufferRwUtilLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryBufferRwUtilLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
