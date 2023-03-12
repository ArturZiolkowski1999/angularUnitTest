import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentService } from '../services/student.service';

import { StudentComponent } from './student.component';
import { StudentMock } from '../models/mocks/student';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [ StudentService ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("SpyOn method", () => {
    spyOn(component, 'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  })

  it("Student mock", () => {
    let data = new StudentMock()
                  .withId(1)
                  .withName("Student")
                  .model();
    expect(component.ToMockTest().id).toBe(data.id);
    expect(component.ToMockTest().name).toBe(data.name);
  })
});
