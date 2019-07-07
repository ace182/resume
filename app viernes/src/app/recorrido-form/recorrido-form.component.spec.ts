import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridoFormComponent } from './recorrido-form.component';

describe('RecorridoFormComponent', () => {
  let component: RecorridoFormComponent;
  let fixture: ComponentFixture<RecorridoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorridoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorridoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
