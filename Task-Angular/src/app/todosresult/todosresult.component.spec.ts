import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosresultComponent } from './todosresult.component';

describe('TodosresultComponent', () => {
  let component: TodosresultComponent;
  let fixture: ComponentFixture<TodosresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
