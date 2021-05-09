import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBodyPictureComponent } from './full-body-picture.component';

describe('FullBodyPictureComponent', () => {
  let component: FullBodyPictureComponent;
  let fixture: ComponentFixture<FullBodyPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBodyPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBodyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
