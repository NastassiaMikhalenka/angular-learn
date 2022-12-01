import { Component } from '@angular/core';
import { Grades } from './child/child.component';

export interface Address {
  street: string;
  house: number;
}
export interface Lesson {
  id: number;
  title: string;
  weekGrades: Grade[];
}
export interface Grade {
  id: number;
  gradeItem: number;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  name = 'Ivan';
  surname = 'Petrov';
  city = 'Minsk';
  address: Address = {
    street: 'Lenina',
    house: 27,
  };
  grades?: Grades;

  values: string[] = [];

  lessons: Lesson[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        { id: 0, gradeItem: 5 },
        { id: 1, gradeItem: 4 },
      ],
    },
    { id: 1, title: 'Lit', weekGrades: [{ id: 0, gradeItem: 5 }] },
  ];

  getGrade(value: Grades) {
    this.grades = value;
  }

  getValue(data: string) {
    debugger;
    this.values.push(data);
  }
}
