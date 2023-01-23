import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduFormComponent } from './edu-form.component';

describe('EduFormComponent', () => {
  let component: EduFormComponent;
  let fixture: ComponentFixture<EduFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
