import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnoFormComponent } from './tecno-form.component';

describe('TecnoFormComponent', () => {
  let component: TecnoFormComponent;
  let fixture: ComponentFixture<TecnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
