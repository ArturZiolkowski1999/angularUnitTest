import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  sum = 0;
  result: any;
  sutdent!: StudentModel;

  constructor(public service: StudentService) { }

  ngOnInit(): void {
  };

  calculate(num1: number, num2: number){
    this.sum = num1 + num2;
    this.sutdent = {
      id: 1,
      name: "sutdent"
    }
    return this.sum;
    
  };

  saveData(): void {
    let info = {
      sumVal: this.calculate(5,5),
      name: "name"
    };
    console.log(info);
    this.service.SaveDetails(info).subscribe(response => {
      this.result = response;
    })
  }

  ToMockTest(): StudentModel{
    this.sutdent = {
      id: 1,
      name: "Student"
    }
    return this.sutdent;
  }

}
