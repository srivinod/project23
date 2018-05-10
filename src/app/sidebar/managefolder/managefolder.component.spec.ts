import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefolderComponent } from './managefolder.component';

describe('ManagefolderComponent', () => {
  let component: ManagefolderComponent;
  let fixture: ComponentFixture<ManagefolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
